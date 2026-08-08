import { ContactSubmission } from '../types';
import { supabase } from '../lib/supabase';

const STORAGE_KEY = 'varshith_portfolio_contact_submissions';

const INITIAL_SUBMISSIONS: ContactSubmission[] = [
  {
    id: 'sub_101',
    name: 'Aarav Sharma',
    email: 'aarav.sharma@techventure.in',
    phone: '+91 98765 43210',
    company: 'TechVenture Solutions',
    projectType: 'AI Project',
    message: 'Hi Varshith, we loved your portfolio! We need a custom Gemini AI chatbot integrated into our customer support flow. Let us know your availability.',
    date: '2026-08-07 14:30',
    status: 'New',
  },
  {
    id: 'sub_102',
    name: 'Priya Nair',
    email: 'priya@brandcraft.com',
    phone: '+91 87654 32109',
    company: 'BrandCraft Media',
    projectType: 'Business Website',
    message: 'Looking to build a responsive business website with custom UI/UX and Canva graphic assets. Would love to discuss a project timeline.',
    date: '2026-08-06 11:15',
    status: 'Read',
  },
  {
    id: 'sub_103',
    name: 'Rahul Verma',
    email: 'rahul.v@innovatelabs.io',
    phone: '+91 76543 21098',
    company: 'Innovate Labs',
    projectType: 'API Development',
    message: 'Hello Varshith, we need assistance setting up REST API endpoints and Google AI Studio integration for a data analytics dashboard.',
    date: '2026-08-04 18:45',
    status: 'Responded',
  },
];

export const getSubmissions = (): ContactSubmission[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SUBMISSIONS));
      return INITIAL_SUBMISSIONS;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to load contact submissions from localStorage', err);
    return INITIAL_SUBMISSIONS;
  }
};

export const fetchSupabaseSubmissions = async (): Promise<ContactSubmission[]> => {
  try {
    // Try fetching from contact_submissions or submissions table
    let { data, error } = await supabase.from('contact_submissions').select('*').order('created_at', { ascending: false });
    
    if (error || !data) {
      const res = await supabase.from('submissions').select('*');
      data = res.data;
      error = res.error;
    }

    if (error || !data || data.length === 0) {
      return getSubmissions();
    }

    const fetchedSubmissions: ContactSubmission[] = data.map((item: any) => ({
      id: item.id || `sub_${Date.now()}`,
      name: item.name || item.full_name || 'Anonymous',
      email: item.email || '',
      phone: item.phone || '',
      company: item.company || '',
      projectType: item.project_type || item.projectType || 'Website',
      message: item.message || '',
      date: item.created_at ? new Date(item.created_at).toISOString().replace('T', ' ').slice(0, 16) : item.date || new Date().toISOString().replace('T', ' ').slice(0, 16),
      status: item.status || 'New',
    }));

    // Save fetched items to localStorage for seamless sync
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fetchedSubmissions));
    return fetchedSubmissions;
  } catch (err) {
    console.warn('Supabase fetch fallback to local storage:', err);
    return getSubmissions();
  }
};

export const saveSubmission = async (submission: Omit<ContactSubmission, 'id' | 'date' | 'status'>): Promise<ContactSubmission> => {
  const current = getSubmissions();
  const dateStr = new Date().toISOString().replace('T', ' ').slice(0, 16);
  const newEntry: ContactSubmission = {
    ...submission,
    id: `sub_${Date.now()}`,
    date: dateStr,
    status: 'New',
  };

  const updated = [newEntry, ...current];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  // Async push to Supabase
  try {
    const payload = {
      name: submission.name,
      email: submission.email,
      phone: submission.phone || null,
      company: submission.company || null,
      project_type: submission.projectType,
      projectType: submission.projectType,
      message: submission.message,
      status: 'New',
    };

    // Attempt insert into contact_submissions
    const { error } = await supabase.from('contact_submissions').insert([payload]);
    if (error) {
      // Fallback attempt into submissions table
      await supabase.from('submissions').insert([payload]);
    }
  } catch (err) {
    console.warn('Supabase insert warning (saved locally):', err);
  }

  return newEntry;
};

export const updateSubmissionStatus = (id: string, status: 'New' | 'Read' | 'Responded'): ContactSubmission[] => {
  const current = getSubmissions();
  const updated = current.map((sub) => (sub.id === id ? { ...sub, status } : sub));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  // Async update in Supabase
  (async () => {
    try {
      const { error } = await supabase.from('contact_submissions').update({ status }).eq('id', id);
      if (error) {
        await supabase.from('submissions').update({ status }).eq('id', id);
      }
    } catch (err) {
      console.warn('Supabase update status failed:', err);
    }
  })();

  return updated;
};

export const deleteSubmission = (id: string): ContactSubmission[] => {
  const current = getSubmissions();
  const updated = current.filter((sub) => sub.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  // Async delete from Supabase
  (async () => {
    try {
      const { error } = await supabase.from('contact_submissions').delete().eq('id', id);
      if (error) {
        await supabase.from('submissions').delete().eq('id', id);
      }
    } catch (err) {
      console.warn('Supabase delete failed:', err);
    }
  })();

  return updated;
};

