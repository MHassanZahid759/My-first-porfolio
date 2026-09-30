import React, { useState, useEffect } from 'react';
import { Database, RefreshCw, Mail, Calendar, User, X, MessageSquare, Lock, Key, LogOut, Trash2, ShieldCheck } from 'lucide-react';

export default function AdminModal({ isOpen, onClose }) {
  const [adminToken, setAdminToken] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Close & Lock Admin Portal
  const handleCloseAndLock = () => {
    sessionStorage.removeItem('adminToken');
    setAdminToken('');
    setPasswordInput('');
    setLoginError('');
    setMessages([]);
    setError(null);
    onClose();
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: passwordInput })
      });
      const data = await res.json();
      if (data.success) {
        sessionStorage.setItem('adminToken', data.token);
        setAdminToken(data.token);
        setPasswordInput('');
      } else {
        setLoginError(data.error || 'Incorrect Admin Password.');
      }
    } catch (err) {
      setLoginError('Could not verify password with server.');
    }
  };

  const fetchMessages = async () => {
    if (!adminToken) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/messages', {
        headers: {
          'x-admin-key': adminToken
        }
      });
      const data = await res.json();
      if (data.success) {
        setMessages(data.data || []);
      } else {
        if (res.status === 401) {
          handleCloseAndLock();
        } else {
          setError(data.error || 'Failed to fetch messages.');
        }
      }
    } catch (err) {
      console.error('Error fetching SQLite messages:', err);
      setError('Could not connect to backend server.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm(`Are you sure you want to delete Message #${id}?`)) return;
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-key': adminToken
        }
      });
      const data = await res.json();
      if (data.success) {
        fetchMessages();
      } else {
        alert(data.error || 'Delete failed.');
      }
    } catch (err) {
      alert('Could not delete message.');
    }
  };

  useEffect(() => {
    if (isOpen && adminToken) {
      fetchMessages();
    }
  }, [isOpen, adminToken]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-gutter animate-fadeIn">
      <div className="bg-surface-container-lowest border border-outline-variant/30 text-on-surface w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Modal Header */}
        <div className="bg-surface-container-low px-md py-sm border-b border-outline-variant/30 flex justify-between items-center">
          <div className="flex items-center gap-sm">
            <div className="p-2 rounded-lg bg-primary-container text-on-primary">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-2">
                <span>Admin Messages Portal</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary-container/10 text-primary font-semibold uppercase">Protected</span>
              </h3>
              <p className="font-caption text-caption text-on-surface-variant">
                Secure Messages Inbox — Contact Submissions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-xs">
            {adminToken && (
              <>
                <button
                  onClick={fetchMessages}
                  disabled={loading}
                  className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors flex items-center gap-1 text-xs font-semibold"
                  title="Refresh Database Messages"
                >
                  <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
                  <span>Refresh</span>
                </button>

                <button
                  onClick={handleCloseAndLock}
                  className="p-2 rounded-lg text-on-surface-variant hover:text-red-600 hover:bg-red-500/10 transition-colors flex items-center gap-1 text-xs font-semibold"
                  title="Lock & Exit Portal"
                >
                  <LogOut size={16} />
                  <span>Lock</span>
                </button>
              </>
            )}
            <button
              onClick={handleCloseAndLock}
              className="p-2 rounded-lg text-on-surface-variant hover:text-red-600 hover:bg-red-500/10 transition-colors"
              title="Close & Lock Admin Portal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-md overflow-y-auto flex-grow space-y-md">
          
          {/* Admin Login Screen */}
          {!adminToken ? (
            <div className="py-lg px-md max-w-md mx-auto text-center space-y-md animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-primary-container/10 text-primary-container flex items-center justify-center mx-auto shadow-md">
                <Lock size={32} />
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Admin Authentication</h4>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                  Enter your secret Admin Password to unlock the Messages Inbox.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-sm text-left">
                {loginError && (
                  <div className="p-sm bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 text-xs font-semibold">
                    {loginError}
                  </div>
                )}
                <div>
                  <label className="font-label-md text-xs text-on-surface-variant block mb-1">
                    Secret Passcode
                  </label>
                  <div className="relative">
                    <input 
                      type="password"
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="Enter Admin Password..."
                      required
                      className="w-full border border-outline-variant/50 rounded-xl px-sm py-2.5 pr-10 text-sm bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-primary-container/30 font-mono"
                    />
                    <Key size={16} className="absolute right-3 top-3 text-outline-variant" />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold">
                  Unlock Admin Inbox
                </button>
              </form>


            </div>
          ) : (
            /* Admin Logged-In Messages Inbox */
            <>
              {loading && (
                <div className="text-center py-xl text-on-surface-variant font-body-md animate-pulse">
                  Loading messages...
                </div>
              )}

              {error && (
                <div className="p-md bg-red-500/10 border border-red-500/30 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}

              {!loading && !error && messages.length === 0 && (
                <div className="text-center py-xl space-y-sm text-on-surface-variant">
                  <MessageSquare size={48} className="mx-auto text-outline-variant opacity-60" />
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">No Messages Found</h4>
                  <p className="font-body-md text-body-md max-w-sm mx-auto">
                    New visitor submissions will appear here once someone sends a message via the Contact form.
                  </p>
                </div>
              )}

              {!loading && messages.map((msg) => (
                <div 
                  key={msg.id}
                  className="bg-surface-container-low/60 border border-outline-variant/30 rounded-xl p-md space-y-xs hover:border-primary-container transition-all shadow-sm relative group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-xs border-b border-outline-variant/20 pb-xs">
                    <div className="flex items-center gap-sm">
                      <div className="w-8 h-8 rounded-full bg-primary-container/10 text-primary-container font-bold flex items-center justify-center text-xs">
                        #{msg.id}
                      </div>
                      <div>
                        <h4 className="font-body-md font-bold text-on-surface flex items-center gap-2">
                          <User size={14} className="text-primary-container" />
                          {msg.name}
                        </h4>
                        <a 
                          href={`mailto:${msg.email}`} 
                          className="font-caption text-caption text-primary hover:underline flex items-center gap-1"
                        >
                          <Mail size={12} />
                          {msg.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-sm font-caption text-caption text-on-surface-variant">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{new Date(msg.created_at).toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-500/10 transition-colors"
                        title="Delete Message Record"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="pt-xs">
                    <p className="font-label-md text-label-md font-semibold text-on-surface">
                      Subject: <span className="font-normal text-on-surface-variant">{msg.subject}</span>
                    </p>
                    <div className="mt-xs p-sm bg-surface-container-lowest border border-outline-variant/20 rounded-lg text-sm text-on-surface leading-relaxed whitespace-pre-wrap">
                      {msg.message}
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}

        </div>

        {/* Modal Footer */}
        {adminToken && (
          <div className="bg-surface-container-low px-md py-xs border-t border-outline-variant/30 flex justify-between items-center text-xs text-on-surface-variant font-caption">
            <span>Records: <strong>{messages.length}</strong></span>
            <span>Recipient: <strong>dev.hassanzahid@gmail.com</strong></span>
          </div>
        )}

      </div>
    </div>
  );
}
