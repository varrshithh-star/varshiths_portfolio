import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Search, Filter, Trash2, CheckCircle2, Mail, Phone, Calendar, X, LogOut, MessageSquare, ArrowUpDown, RefreshCcw } from 'lucide-react';
import { ContactSubmission } from '../types';
import { getSubmissions, fetchSupabaseSubmissions, updateSubmissionStatus, deleteSubmission } from '../utils/storage';

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  isOpen,
  onClose,
  onLogout,
}) => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [projectTypeFilter, setProjectTypeFilter] = useState('All');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const loadData = async () => {
    setIsRefreshing(true);
    setSubmissions(getSubmissions());
    try {
      const liveData = await fetchSupabaseSubmissions();
      setSubmissions(liveData);
    } catch (err) {
      console.warn('Supabase fetch error:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadData();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleUpdateStatus = (id: string, status: 'New' | 'Read' | 'Responded') => {
    const updated = updateSubmissionStatus(id, status);
    setSubmissions(updated);
    if (selectedSubmission && selectedSubmission.id === id) {
      setSelectedSubmission({ ...selectedSubmission, status });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this submission?')) {
      const updated = deleteSubmission(id);
      setSubmissions(updated);
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission(null);
      }
    }
  };

  const filteredSubmissions = submissions.filter((sub) => {
    const matchesSearch =
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.message.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === 'All' || sub.status === statusFilter;
    const matchesProjectType = projectTypeFilter === 'All' || sub.projectType === projectTypeFilter;

    return matchesSearch && matchesStatus && matchesProjectType;
  });

  const totalCount = submissions.length;
  const newCount = submissions.filter((s) => s.status === 'New').length;
  const respondedCount = submissions.filter((s) => s.status === 'Responded').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-neutral-950/85 backdrop-blur-xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="relative w-full max-w-6xl max-h-[92vh] bg-neutral-900 border border-neutral-800 text-white rounded-3xl shadow-2xl z-10 flex flex-col overflow-hidden"
      >
        {/* Dashboard Header Bar */}
        <div className="p-6 bg-neutral-950 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7A1212] flex items-center justify-center text-white">
              <Shield size={20} />
            </div>
            <div>
              <h2 className="text-xl font-black font-heading tracking-tight">
                Admin Control Dashboard
              </h2>
              <p className="text-xs text-neutral-400">
                Varshith Portfolio • Persistent Submissions Database
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              disabled={isRefreshing}
              className="p-2.5 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white border border-neutral-800 transition-colors text-xs flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title="Refresh Supabase & Local Database"
            >
              <RefreshCcw size={14} className={isRefreshing ? 'animate-spin' : ''} />
              <span>{isRefreshing ? 'Syncing...' : 'Refresh'}</span>
            </button>

            <button
              onClick={onLogout}
              className="p-2.5 rounded-xl bg-[#7A1212] hover:bg-[#600e0e] text-white transition-colors text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut size={14} /> Logout
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Overview Stats Cards */}
        <div className="p-6 bg-neutral-900/50 border-b border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
            <span className="text-xs font-bold text-neutral-400 uppercase">Total Messages</span>
            <div className="text-3xl font-black font-heading mt-1 text-white">{totalCount}</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
            <span className="text-xs font-bold text-amber-400 uppercase">New Inquiries</span>
            <div className="text-3xl font-black font-heading mt-1 text-amber-400">{newCount}</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
            <span className="text-xs font-bold text-emerald-400 uppercase font-heading">Responded</span>
            <div className="text-3xl font-black font-heading mt-1 text-emerald-400">{respondedCount}</div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-950 border border-neutral-800">
            <span className="text-xs font-bold text-sky-400 uppercase">Database Status</span>
            <div className="text-sm font-bold mt-2 text-sky-300 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" /> Persistent Storage
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-6 bg-neutral-900 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          {/* Search bar */}
          <div className="relative flex-1 min-w-[240px]">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email, or message..."
              className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#7A1212]"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 text-xs text-white rounded-xl px-3 py-2 focus:outline-none"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Read">Read</option>
              <option value="Responded">Responded</option>
            </select>
          </div>

          {/* Project Type Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-400">Project:</span>
            <select
              value={projectTypeFilter}
              onChange={(e) => setProjectTypeFilter(e.target.value)}
              className="bg-neutral-950 border border-neutral-800 text-xs text-white rounded-xl px-3 py-2 focus:outline-none"
            >
              <option value="All">All Types</option>
              <option value="Website">Website</option>
              <option value="AI Project">AI Project</option>
              <option value="API Development">API Development</option>
              <option value="Business Website">Business Website</option>
              <option value="Chatbot">Chatbot</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Automation">Automation</option>
            </select>
          </div>
        </div>

        {/* Submissions Table / List */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredSubmissions.length === 0 ? (
            <div className="text-center py-16 text-neutral-500 text-sm">
              No contact submissions match the selected filters.
            </div>
          ) : (
            <div className="space-y-3">
              {filteredSubmissions.map((sub) => (
                <div
                  key={sub.id}
                  className={`p-4 rounded-2xl border transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer ${
                    sub.status === 'New'
                      ? 'bg-neutral-950/90 border-amber-500/40 shadow-md'
                      : 'bg-neutral-950/40 border-neutral-800 hover:border-neutral-700'
                  }`}
                  onClick={() => {
                    setSelectedSubmission(sub);
                    if (sub.status === 'New') {
                      handleUpdateStatus(sub.id, 'Read');
                    }
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-white text-base truncate">{sub.name}</span>
                      <span className="text-xs text-neutral-400">({sub.email})</span>
                      
                      <span
                        className={`ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          sub.status === 'New'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                            : sub.status === 'Responded'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-neutral-800 text-neutral-400'
                        }`}
                      >
                        {sub.status}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
                      <span className="font-semibold text-[#7A1212] bg-[#7A1212]/10 px-2 py-0.5 rounded-md border border-[#7A1212]/30">
                        {sub.projectType}
                      </span>
                      {sub.phone && <span>📞 {sub.phone}</span>}
                      {sub.company && <span>🏢 {sub.company}</span>}
                      <span>📅 {sub.date}</span>
                    </div>

                    <p className="text-xs text-neutral-300 mt-2 line-clamp-1 italic">
                      "{sub.message}"
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={`mailto:${sub.email}?subject=Re: Portfolio Inquiry - ${sub.projectType}`}
                      onClick={() => handleUpdateStatus(sub.id, 'Responded')}
                      className="p-2 rounded-xl bg-neutral-900 hover:bg-[#7A1212] text-white transition-colors text-xs flex items-center gap-1"
                      title="Reply via Email"
                    >
                      <Mail size={14} /> Reply
                    </a>

                    <button
                      onClick={() => handleDelete(sub.id)}
                      className="p-2 rounded-xl bg-neutral-900 hover:bg-rose-900 text-rose-400 transition-colors"
                      title="Delete Submission"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Submission Detail Modal */}
      <AnimatePresence>
        {selectedSubmission && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSubmission(null)}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 text-white rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
            >
              <div className="flex justify-between items-start mb-6 pb-4 border-b border-neutral-800">
                <div>
                  <span className="text-xs font-bold text-[#7A1212] uppercase tracking-wider">
                    {selectedSubmission.projectType}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1">
                    {selectedSubmission.name}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">{selectedSubmission.date}</p>
                </div>

                <button
                  onClick={() => setSelectedSubmission(null)}
                  className="p-2 rounded-full text-neutral-400 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300 mb-6">
                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between">
                  <div>
                    <span className="text-neutral-500 font-semibold block uppercase text-[10px]">Email Address</span>
                    <a href={`mailto:${selectedSubmission.email}`} className="text-white hover:underline font-medium">
                      {selectedSubmission.email}
                    </a>
                  </div>
                  {selectedSubmission.phone && (
                    <div>
                      <span className="text-neutral-500 font-semibold block uppercase text-[10px]">Phone Number</span>
                      <span className="text-white font-medium">{selectedSubmission.phone}</span>
                    </div>
                  )}
                </div>

                {selectedSubmission.company && (
                  <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                    <span className="text-neutral-500 font-semibold block uppercase text-[10px]">Company</span>
                    <span className="text-white font-medium">{selectedSubmission.company}</span>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                  <span className="text-neutral-500 font-semibold block uppercase text-[10px] mb-2">Message Body</span>
                  <p className="text-sm text-neutral-200 leading-relaxed whitespace-pre-wrap">
                    {selectedSubmission.message}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-400">Mark Status:</span>
                  <button
                    onClick={() => handleUpdateStatus(selectedSubmission.id, 'Read')}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  >
                    Read
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedSubmission.id, 'Responded')}
                    className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  >
                    Responded
                  </button>
                </div>

                <a
                  href={`mailto:${selectedSubmission.email}?subject=Re: Varshith Portfolio Inquiry`}
                  onClick={() => handleUpdateStatus(selectedSubmission.id, 'Responded')}
                  className="bg-[#7A1212] hover:bg-[#600e0e] text-white font-bold text-xs px-5 py-2.5 rounded-xl flex items-center gap-2 transition-colors"
                >
                  <Mail size={16} /> Open Reply Email
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
