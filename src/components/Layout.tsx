import { useState, type ReactNode } from 'react';
import {
  LayoutDashboard,
  ClipboardList,
  HeartPulse,
  MapPin,
  BookOpen,
  Phone,
  Shield,
  Menu,
  X,
  Stethoscope,
} from 'lucide-react';
import { useRouter } from '@/lib/router';
import { useLanguage, type TranslationDict } from '@/lib/i18n';
import { LanguageToggle } from '@/components/LanguageToggle';

export function Layout({ children }: { children: ReactNode }) {
  const { path, navigate } = useRouter();
  const { t } = useLanguage();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);

  const handleNav = (to: string) => {
    navigate(to);
    setSidebarOpen(false);
  };

  const navItems = [
    { path: '/', label: t.dashboard, icon: LayoutDashboard },
    { path: '/check-in', label: t.healthCheckIn, icon: ClipboardList },
    { path: '/my-health', label: t.myHealth, icon: HeartPulse },
    { path: '/nearby', label: t.nearbyHealthcare, icon: MapPin },
    { path: '/health-info', label: t.healthInformation, icon: BookOpen },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="hidden md:flex w-64 flex-col fixed inset-y-0 left-0 bg-white border-r border-slate-200 z-30">
        <SidebarContent navItems={navItems} path={path} onNavigate={handleNav} t={t} />
      </aside>

      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-slate-900/40" onClick={() => setSidebarOpen(false)} />
          <aside className="absolute inset-y-0 left-0 w-64 bg-white border-r border-slate-200 flex flex-col animate-[slideIn_0.2s_ease-out]">
            <SidebarContent navItems={navItems} path={path} onNavigate={handleNav} t={t} />
          </aside>
        </div>
      )}

      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="flex items-center justify-between px-4 md:px-8 h-16">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label={t.openMenu}
              >
                <Menu className="w-5 h-5 text-slate-600" />
              </button>
              <div className="flex items-center gap-2 md:hidden">
                <Stethoscope className="w-6 h-6 text-teal-600" />
                <span className="font-semibold text-slate-800">HealthSaathi</span>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3">
              <LanguageToggle />
              <button
                onClick={() => setEmergencyOpen(true)}
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-medium text-sm transition-all hover:shadow-sm active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">{t.emergencyHelp}</span>
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 md:px-8 py-6 md:py-8">{children}</main>

        <footer className="px-4 md:px-8 py-6 border-t border-slate-200 bg-white">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Shield className="w-4 h-4 text-teal-500 shrink-0" />
            <span>{t.privacyFooter}</span>
          </div>
        </footer>
      </div>

      {emergencyOpen && <EmergencyModal onClose={() => setEmergencyOpen(false)} />}
    </div>
  );
}

type NavItem = { path: string; label: string; icon: typeof LayoutDashboard };

function SidebarContent({ navItems, path, onNavigate, t }: { navItems: NavItem[]; path: string; onNavigate: (to: string) => void; t: TranslationDict }) {
  return (
    <>
      <div className="flex items-center justify-between px-5 h-16 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-sm">
            <Stethoscope className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-slate-800 leading-tight">HealthSaathi</div>
            <div className="text-xs text-teal-600 font-medium">{t.aiCompanion}</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = path === item.path;
          return (
            <button
              key={item.path}
              onClick={() => onNavigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 ${active ? 'text-teal-600' : 'text-slate-400'}`} />
              <span>{item.label}</span>
              {active && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-500" />}
            </button>
          );
        })}
      </nav>

      <div className="px-4 py-4 border-t border-slate-200">
        <div className="rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 p-4 border border-teal-100">
          <div className="flex items-center gap-2 mb-1.5">
            <Shield className="w-4 h-4 text-teal-600" />
            <span className="text-sm font-semibold text-slate-700">{t.privacyProtected}</span>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            {t.privacySidebarDesc}
          </p>
        </div>
      </div>
    </>
  );
}

function EmergencyModal({ onClose }: { onClose: () => void }) {
  const { t } = useLanguage();

  const emergencyNumbers: { label: string; number: string; desc: string }[] = [
    { label: t.nationalEmergency, number: '112', desc: t.allInOneEmergencyHelpline },
    { label: t.ambulance, number: '108', desc: t.freeAmbulanceService },
    { label: t.womenHelpline, number: '1091', desc: t.womenSupport247 },
    { label: t.childHelpline, number: '1098', desc: t.childInDistress },
    { label: t.mentalHealthHelpline, number: '1800-599-0019', desc: t.kiranFreeSupport },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-[fadeIn_0.15s_ease-out]">
        <div className="flex items-center justify-between px-5 py-4 bg-red-50 border-b border-red-100">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <Phone className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h2 className="font-bold text-slate-800">{t.emergencyHelp}</h2>
              <p className="text-xs text-slate-500">{t.tapToCall}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-red-100 transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="p-4 space-y-2.5 max-h-[60vh] overflow-y-auto">
          {emergencyNumbers.map((e) => (
            <a
              key={e.number}
              href={`tel:${e.number.replace(/[-\s]/g, '')}`}
              className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200 hover:border-red-300 hover:bg-red-50 transition-all group"
            >
              <div>
                <div className="font-semibold text-slate-800 text-sm">{e.label}</div>
                <div className="text-xs text-slate-500">{e.desc}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-red-600">{e.number}</span>
                <Phone className="w-4 h-4 text-slate-300 group-hover:text-red-500 transition-colors" />
              </div>
            </a>
          ))}
        </div>

        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100">
          <p className="text-xs text-slate-500 text-center">
            {t.emergencyDisclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
