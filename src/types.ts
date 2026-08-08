export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  features?: string[];
  status?: 'Completed' | 'In Development' | 'Featured' | 'Live';
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  message: string;
  date: string;
  status: 'New' | 'Read' | 'Responded';
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export interface DesignProject {
  id: string;
  title: string;
  type: 'UI/UX Design' | 'Canva Graphic' | 'Brand Identity' | 'Presentation' | 'Poster';
  image: string;
  category: string;
  description: string;
  toolsUsed: string[];
}
