import React, { useState, useMemo } from 'react';

// --- ICON COMPONENTS (SVG) ---
const IconDashboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
const IconFileText = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
);
const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);
const IconLogOut = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
);
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
);
const IconPlus = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
);
const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
);

// --- MOCK DATA ---
const MOCK_PEGAWAI = [
  { id: 1, nip: '19850412 201012 1 001', nama: 'Andi Pratama, S.H.', jabatan: 'Kepala Subseksi Keamanan', golongan: 'Penata Muda (III/a)' },
  { id: 2, nip: '19900823 201503 2 002', nama: 'Sari Lestari, A.Md.P.', jabatan: 'Staf Registrasi', golongan: 'Pengatur (II/c)' },
  { id: 3, nip: '19821105 200501 1 003', nama: 'Rizal Mahendra', jabatan: 'Komandan Jaga', golongan: 'Penata Muda Tk. I (III/b)' },
  { id: 4, nip: '19950214 201902 2 001', nama: 'Dina Karmila, S.Kom.', jabatan: 'Pengelola Data Kepegawaian', golongan: 'Penata Muda (III/a)' },
  { id: 5, nip: '19880719 200912 1 004', nama: 'Budi Santoso', jabatan: 'Anggota Jaga', golongan: 'Pengatur Tk. I (II/d)' },
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(''); // 'admin' or 'pegawai'
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Authentication Handler (Prototype)
  const handleLogin = (username: string, password: string) => {
    // Basic sanitization for frontend simulation
    const sanitizedUser = username.trim().toLowerCase();
    
    // In a real app, this data is sent to a backend API which securely checks against a DB
    // preventing SQL injection via prepared statements/parameterized queries.
    if (sanitizedUser.includes('admin')) {
      setUserRole('admin');
      setIsLoggedIn(true);
    } else if (sanitizedUser !== '') {
      setUserRole('pegawai');
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <DashboardLayout 
          userRole={userRole} 
          onLogout={handleLogout}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
    </div>
  );
}

// --- LOGIN COMPONENT ---
function LoginScreen({ onLogin }: { onLogin: (username: string, password: string) => void }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Username dan Password wajib diisi.');
      return;
    }
    // Simulate API call
    onLogin(username, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-slate-900 p-6 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-white mb-4">
             <IconFileText />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">E-Arsip Kepegawaian</h1>
          <p className="text-slate-400 mt-1 text-sm">Lapas Kelas IIB Tual</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm border border-red-100">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan username (mis: admin1)"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg transition-colors mt-2"
            >
              Masuk
            </button>

            <div className="mt-6 text-center text-xs text-slate-500">
              <p>Prototipe Frontend. Keamanan backend belum terhubung.</p>
              <p>Gunakan username mengandung "admin" untuk hak akses penuh.</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// --- DASHBOARD LAYOUT & MAIN CONTENT ---
function DashboardLayout({ 
  userRole, 
  onLogout, 
  sidebarOpen, 
  setSidebarOpen 
}: { 
  userRole: string; 
  onLogout: () => void; 
  sidebarOpen: boolean; 
  setSidebarOpen: (value: boolean) => void; 
}) {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: IconDashboard },
    { name: 'Data Pegawai', icon: IconUsers },
    { name: 'Manajemen Pengguna', icon: IconUsers },
    { name: 'Impor Excel', icon: IconFileText },
    { name: 'Pengaturan', icon: IconSettings },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-30 w-64 bg-[#0f172a] text-slate-300 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-6 pb-2 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-slate-800 rounded-lg text-white">
              <IconFileText />
            </div>
            <div>
              <h2 className="text-white font-semibold text-sm leading-tight tracking-wide">E-Arsip Kepegawaian</h2>
              <p className="text-xs text-slate-500">Lapas Kelas IIB Tual</p>
            </div>
          </div>
        </div>

        <nav className="p-4 space-y-1 mt-4">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => { setActiveTab(item.name); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                activeTab === item.name 
                  ? 'bg-slate-800 text-white border-l-4 border-teal-500' 
                  : 'hover:bg-slate-800/50 hover:text-white border-l-4 border-transparent'
              }`}
            >
              <item.icon />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-slate-400 hover:text-red-400 hover:bg-slate-800/50 transition-colors"
          >
            <IconLogOut />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden text-slate-600 hover:text-slate-900"
              onClick={() => setSidebarOpen(true)}
            >
              <IconMenu />
            </button>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Sistem Arsip Kepegawaian</p>
              <h1 className="text-lg font-bold text-slate-800">Lapas Kelas IIB Tual</h1>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
             <span className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full border border-teal-100 uppercase tracking-wide">
               Data Pegawai
             </span>
             <div className="h-8 w-8 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-sm font-bold text-slate-600">
               {userRole === 'admin' ? 'A' : 'P'}
             </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Page Title & Badge */}
            <div>
              <span className="inline-block mb-3 px-3 py-1 bg-teal-50 text-teal-700 text-xs font-bold rounded-full border border-teal-100 uppercase tracking-wide">
                Data Pegawai
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h2>
              <p className="text-slate-500">Selamat datang. Berikut ringkasan data kepegawaian contoh.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard title="Total Pegawai" value="55" subtitle="Data contoh fiktif" />
              <StatCard title="Total Dokumen" value="05" subtitle="Jumlah ilustrasi, tanpa berkas" />
              <StatCard title="Data Terbaru" value="01" subtitle="Ilustrasi pembaruan" />
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-slate-800">Aktivitas Terbaru</h3>
                <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded uppercase tracking-wide">Contoh</span>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2 -mx-2 px-2 snap-x">
                <ActivityCard date="18 Okt 2026" desc="Metadata Andi Pratama ditampilkan sebagai contoh." />
                <ActivityCard date="15 Okt 2026" desc="Contoh data Sari Lestari ditampilkan." />
                <ActivityCard date="10 Okt 2026" desc="Contoh data Rizal Mahendra ditampilkan." />
              </div>
            </div>

            {/* Data Table Section */}
            <div className="pt-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Data Pegawai</h3>
                  <p className="text-sm text-slate-500">Cari dan lihat data contoh dalam satu tempat.</p>
                </div>
                <button 
                  onClick={() => alert("Prototipe: Fitur 'Tambah Data' membutuhkan backend untuk menyimpan data secara permanen.")}
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
                >
                  <IconPlus />
                  Tambah Data Pegawai
                </button>
              </div>

              <EmployeeTable data={MOCK_PEGAWAI} />
            </div>

            {/* Footer space */}
            <div className="h-8"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function StatCard({ title, value, subtitle }: { title: string; value: string | number; subtitle: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
      <h4 className="text-sm font-semibold text-slate-500 mb-4">{title}</h4>
      <div>
        <div className="text-5xl font-bold text-[#1e3a8a] mb-2">{value}</div>
        <p className="text-xs text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

function ActivityCard({ date, desc }: { date: string; desc: string }) {
  return (
    <div className="min-w-[280px] sm:min-w-[300px] bg-slate-50 p-4 rounded-xl border border-slate-100 snap-start">
      <p className="text-sm text-slate-600 leading-relaxed">
        <span className="font-semibold">{date}</span> · {desc}
      </p>
    </div>
  );
}

function EmployeeTable({ data }: { data: any[] }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterJabatan, setFilterJabatan] = useState('');

  // Client-side filtering (Simulating secure parameterized search on backend)
  const filteredData = useMemo(() => {
    return data.filter(emp => {
      // Basic sanitization/lowercasing for search
      const safeSearch = searchTerm.toLowerCase().trim();
      const matchesSearch = emp.nama.toLowerCase().includes(safeSearch) || emp.nip.includes(safeSearch);
      const matchesFilter = filterJabatan === '' || emp.jabatan === filterJabatan;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filterJabatan, data]);

  // Extract unique jabatan for the filter dropdown
  const uniqueJabatan = useMemo(() => {
    const jabatans = data.map(d => d.jabatan);
    return [...new Set(jabatans)];
  }, [data]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Table Toolbar */}
      <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Cari berdasarkan NIP atau nama</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <IconSearch />
            </div>
            <input 
              type="text" 
              placeholder="Masukkan NIP contoh atau nama pegawai..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm"
            />
          </div>
        </div>
        
        <div className="w-full sm:w-64">
          <label className="block text-xs font-bold text-slate-700 mb-1.5 ml-1">Filter jabatan / status</label>
          <select 
            value={filterJabatan}
            onChange={(e) => setFilterJabatan(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm appearance-none bg-white"
          >
            <option value="">Semua jabatan / status</option>
            {uniqueJabatan.map(jabatan => (
              <option key={jabatan} value={jabatan}>{jabatan}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-200">
              <th className="p-4 font-semibold">NIP</th>
              <th className="p-4 font-semibold">Nama Pegawai</th>
              <th className="p-4 font-semibold">Jabatan</th>
              <th className="p-4 font-semibold">Pangkat / Golongan</th>
              <th className="p-4 font-semibold text-center">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 text-sm font-medium text-slate-700">{row.nip}</td>
                  <td className="p-4 text-sm font-bold text-slate-900">{row.nama}</td>
                  <td className="p-4 text-sm text-slate-600">{row.jabatan}</td>
                  <td className="p-4 text-sm text-slate-600">
                    <span className="inline-block px-2 py-1 bg-slate-100 rounded text-xs font-medium border border-slate-200">
                      {row.golongan}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-center">
                    <button 
                      onClick={() => alert(`Prototipe: Aksi untuk pegawai ${row.nama} belum terhubung database.`)}
                      className="text-blue-600 hover:text-blue-800 font-medium text-xs border border-blue-200 hover:bg-blue-50 px-3 py-1.5 rounded transition-colors"
                    >
                      Detail
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="p-8 text-center text-slate-500 text-sm">
                  Tidak ada data pegawai yang sesuai dengan pencarian Anda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}