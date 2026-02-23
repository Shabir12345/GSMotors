'use client';

// Admin Submissions Control Center - Modern SaaS Dashboard Revamp
import { useEffect, useState } from 'react';
import AdminLayout from '@/components/AdminLayout';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  FileText,
  BadgeDollarSign,
  RefreshCw,
  Clock,
  User,
  Mail,
  Phone,
  Car,
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  AlertCircle,
  Archive,
  Search,
  Filter,
  ArrowUpRight,
  Inbox,
  Star
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  vehicleInterest?: string;
  status: string;
  createdAt: string;
}

interface FinancingApplication {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vehicleInterest?: string;
  status: string;
  createdAt: string;
}

interface TradeInRequest {
  id: string;
  vehicle: string;
  mileage: string;
  condition: string;
  email: string;
  status: string;
  createdAt: string;
}

export default function SubmissionsPage() {
  const [activeTab, setActiveTab] = useState<'contact' | 'financing' | 'trade-in'>('contact');
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [financingApplications, setFinancingApplications] = useState<FinancingApplication[]>([]);
  const [tradeInRequests, setTradeInRequests] = useState<TradeInRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const token = localStorage.getItem('authToken');

      const [contactRes, financingRes, tradeInRes] = await Promise.all([
        fetch('/api/admin/contact-submissions', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('/api/admin/financing-applications', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch('/api/admin/trade-in-requests', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (contactRes.ok) {
        const contactData = await contactRes.json();
        setContactSubmissions(contactData.data || []);
      }

      if (financingRes.ok) {
        const financingData = await financingRes.json();
        setFinancingApplications(financingData.data || []);
      }

      if (tradeInRes.ok) {
        const tradeInData = await tradeInRes.json();
        setTradeInRequests(tradeInData.data || []);
      }
    } catch (error) {
      console.error('Failed to fetch submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (type: string, id: string, status: string) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/admin/${type}/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        fetchSubmissions();
      }
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'NEW': return { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: Inbox };
      case 'CONTACTED': return { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: Phone };
      case 'IN_PROGRESS': return { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: RefreshCw };
      case 'COMPLETED': return { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: CheckCircle2 };
      case 'ARCHIVED': return { color: 'text-gray-400', bg: 'bg-white/5', border: 'border-white/10', icon: Archive };
      default: return { color: 'text-gray-400', bg: 'bg-white/5', border: 'border-white/10', icon: MoreVertical };
    }
  };

  const tabs = [
    { id: 'contact', label: 'Direct Inquiry', icon: MessageSquare, count: contactSubmissions.length },
    { id: 'financing', label: 'Credit Application', icon: BadgeDollarSign, count: financingApplications.length },
    { id: 'trade-in', label: 'Trade-In Request', icon: RefreshCw, count: tradeInRequests.length },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="max-w-7xl mx-auto space-y-10 animate-pulse">
          <div className="h-20 bg-white/5 rounded-[2.5rem]" />
          <div className="h-16 bg-white/5 rounded-2xl w-1/2" />
          <div className="grid gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-40 bg-white/5 rounded-[2.5rem] border border-white/5" />
            ))}
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 px-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-brand-accent font-black text-[10px] uppercase tracking-[0.3em]">
              <Inbox className="w-3 h-3" />
              Communication Hub
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter leading-none">
              INCOMING <br />
              <span className="text-white/20">REQUESTS</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-sm font-bold text-white uppercase tracking-widest">
                {contactSubmissions.length + financingApplications.length + tradeInRequests.length} Total Signals
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-4">
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] w-fit">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={cn(
                  "flex items-center gap-3 px-8 py-4 rounded-[1.5rem] text-sm font-black uppercase tracking-widest transition-all",
                  activeTab === tab.id
                    ? "bg-brand-accent text-white shadow-xl shadow-brand-accent/20"
                    : "text-gray-500 hover:text-white hover:bg-white/5"
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                <span className={cn(
                  "ml-2 px-2 py-0.5 rounded-lg text-[10px] tabular-nums",
                  activeTab === tab.id ? "bg-white/20 text-white" : "bg-white/5 text-gray-500"
                )}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="px-4 pb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {activeTab === 'contact' && (
                <>
                  {contactSubmissions.length === 0 ? (
                    <EmptyState message="No direct inquiries found." />
                  ) : (
                    contactSubmissions.map((sub) => (
                      <SubmissionCard
                        key={sub.id}
                        type="contact-submissions"
                        status={sub.status}
                        date={sub.createdAt}
                        title={sub.name}
                        onUpdateStatus={updateStatus}
                        id={sub.id}
                        content={
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <InfoRow icon={Mail} label="Email Address" value={sub.email} />
                              <InfoRow icon={Phone} label="Contact Number" value={sub.phone || 'N/A'} />
                            </div>
                            {sub.vehicleInterest && (
                              <InfoRow icon={Car} label="Asset Interest" value={sub.vehicleInterest} highlight />
                            )}
                            <div className="pt-4 border-t border-white/5">
                              <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-2">Message Content</span>
                              <p className="text-gray-300 leading-relaxed italic border-l-2 border-brand-accent/20 pl-4">
                                "{sub.message}"
                              </p>
                            </div>
                          </div>
                        }
                      />
                    ))
                  )}
                </>
              )}

              {activeTab === 'financing' && (
                <>
                  {financingApplications.length === 0 ? (
                    <EmptyState message="No credit applications found." />
                  ) : (
                    financingApplications.map((app) => (
                      <SubmissionCard
                        key={app.id}
                        type="financing-applications"
                        status={app.status}
                        date={app.createdAt}
                        title={`${app.firstName} ${app.lastName}`}
                        onUpdateStatus={updateStatus}
                        id={app.id}
                        content={
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <InfoRow icon={Mail} label="Email Address" value={app.email} />
                              <InfoRow icon={Phone} label="Contact Number" value={app.phone} />
                            </div>
                            {app.vehicleInterest && (
                              <InfoRow icon={Car} label="Target Asset" value={app.vehicleInterest} highlight />
                            )}
                          </div>
                        }
                      />
                    ))
                  )}
                </>
              )}

              {activeTab === 'trade-in' && (
                <>
                  {tradeInRequests.length === 0 ? (
                    <EmptyState message="No trade-in requests found." />
                  ) : (
                    tradeInRequests.map((req) => (
                      <SubmissionCard
                        key={req.id}
                        type="trade-in-requests"
                        status={req.status}
                        date={req.createdAt}
                        title={req.vehicle}
                        onUpdateStatus={updateStatus}
                        id={req.id}
                        content={
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <InfoRow icon={Mail} label="Owner Email" value={req.email} />
                              <InfoRow icon={Clock} label="Usage Mileage" value={req.mileage} />
                              <InfoRow icon={Star} label="Condition State" value={req.condition} />
                            </div>
                          </div>
                        }
                      />
                    ))
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AdminLayout>
  );
}

function InfoRow({ icon: Icon, label, value, highlight = false }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className={cn("p-2 rounded-lg bg-white/5", highlight ? "text-brand-accent" : "text-gray-500")}>
        <Icon className="w-4 h-4" />
      </div>
      <div>
        <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block">{label}</span>
        <span className={cn("text-sm font-bold", highlight ? "text-white" : "text-gray-300")}>{value}</span>
      </div>
    </div>
  );
}

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white/5 rounded-[2.5rem] border border-white/5 text-center px-6">
      <div className="p-6 bg-white/5 rounded-3xl mb-4 border border-white/10">
        <Inbox className="w-12 h-12 text-gray-700" />
      </div>
      <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">Queue Empty</h3>
      <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{message}</p>
    </div>
  );
}

function SubmissionCard({ id, type, title, status, date, content, onUpdateStatus }: any) {
  const config = getStatusConfig(status) as any;
  const StatusIcon = config.icon;

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <StatusIcon className="w-40 h-40 text-white" strokeWidth={1} />
      </div>

      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 relative z-10">
        <div className="flex items-start gap-6">
          <div className={cn("p-4 rounded-2xl", config.bg, config.color)}>
            <StatusIcon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-2xl font-black text-white tracking-tighter">{title}</h3>
            <div className="flex items-center gap-4 mt-2">
              <span className={cn(
                "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border",
                config.bg, config.color, config.border
              )}>
                {status}
              </span>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
                <Clock className="w-3 h-3" />
                {new Date(date).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <select
            value={status}
            onChange={(e) => onUpdateStatus(type, id, e.target.value)}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-white appearance-none cursor-pointer focus:ring-2 focus:ring-brand-accent transition-all pr-12"
            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
          >
            <option value="NEW" className="bg-brand-dark">Set to New</option>
            <option value="CONTACTED" className="bg-brand-dark">Set to Contacted</option>
            <option value="IN_PROGRESS" className="bg-brand-dark">Set to In Progress</option>
            <option value="COMPLETED" className="bg-brand-dark">Set to Completed</option>
            <option value="ARCHIVED" className="bg-brand-dark">Archive Record</option>
          </select>
        </div>
      </div>

      <div className="relative z-10">
        {content}
      </div>
    </div>
  );
}

function getStatusConfig(status: string) {
  switch (status) {
    case 'NEW': return { color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', icon: Inbox };
    case 'CONTACTED': return { color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', icon: Phone };
    case 'IN_PROGRESS': return { color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', icon: RefreshCw };
    case 'COMPLETED': return { color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', icon: CheckCircle2 };
    case 'ARCHIVED': return { color: 'text-gray-400', bg: 'bg-white/5', border: 'border-white/10', icon: Archive };
    default: return { color: 'text-gray-400', bg: 'bg-white/5', border: 'border-white/10', icon: MoreVertical };
  }
}
