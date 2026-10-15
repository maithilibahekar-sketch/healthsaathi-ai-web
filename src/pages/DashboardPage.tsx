import { useEffect, useState } from 'react';
import {
  HeartPulse, ClipboardList, Activity, Moon, TrendingUp, ArrowRight,
  Stethoscope, Calendar, Sparkles,
} from 'lucide-react';
import { useRouter } from '@/lib/router';
import { useLanguage } from '@/lib/i18n';
import { supabase } from '@/lib/supabase';
import { translateSymptom } from '@/utils/translate';
import type { HealthCheckin } from '@/types';

export function DashboardPage() {
  const { navigate } = useRouter();
  const { t, locale } = useLanguage();
  const [checkins, setCheckins] = useState<HealthCheckin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('health_checkins').select('*').order('created_at', { ascending: false }).limit(5);
      setCheckins((data as HealthCheckin[]) ?? []);
      setLoading(false);
    })();
  }, []);

  const totalCheckins = checkins.length;
  const lastCheckin = checkins[0];
  const avgSeverity = checkins.length ? (checkins.reduce((s, c) => s + c.symptom_severity, 0) / checkins.length).toFixed(1) : '—';
  const sleepEntries = checkins.filter((c) => c.sleep_hours !== null);
  const avgSleep = sleepEntries.length ? (sleepEntries.reduce((s, c) => s + (c.sleep_hours ?? 0), 0) / sleepEntries.length).toFixed(1) : '—';

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 px-6 py-10 md:px-10 md:py-14 text-white animate-float-up">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3 blur-2xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-300/20 rounded-full translate-y-1/3 -translate-x-1/4 blur-2xl" />
        <div className="relative">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-teal-100" />
            <span className="text-sm font-medium text-teal-100">{t.yourCompanionInCare}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{t.heroTitle}</h1>
          <p className="text-teal-50 max-w-xl text-sm md:text-base leading-relaxed mb-6">{t.heroDesc}</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => navigate('/check-in')} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-teal-700 font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95">
              <ClipboardList className="w-5 h-5" />{t.startHealthCheckIn}
            </button>
            <button onClick={() => navigate('/nearby')} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 backdrop-blur-sm text-white font-semibold text-sm border border-white/20 hover:bg-white/25 transition-all">
              {t.findNearbyCare}<ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={<ClipboardList className="w-5 h-5" />} label={t.totalCheckIns} value={loading ? '…' : String(totalCheckins)} color="teal" />
        <StatCard icon={<Activity className="w-5 h-5" />} label={t.avgSeverity} value={loading ? '…' : String(avgSeverity)} color="amber" />
        <StatCard icon={<Moon className="w-5 h-5" />} label={t.avgSleepHrs} value={loading ? '…' : String(avgSleep)} color="indigo" />
        <StatCard icon={<TrendingUp className="w-5 h-5" />} label={t.healthTrend} value={totalCheckins > 0 ? t.active : t.new} color="emerald" />
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <QuickActionCard icon={<HeartPulse className="w-6 h-6" />} title={t.myHealth} desc={t.myHealthDesc} onClick={() => navigate('/my-health')} />
        <QuickActionCard icon={<Stethoscope className="w-6 h-6" />} title={t.nearbyHealthcare} desc={t.nearbyDesc} onClick={() => navigate('/nearby')} />
        <QuickActionCard icon={<Sparkles className="w-6 h-6" />} title={t.healthInformation} desc={t.healthInfoDesc} onClick={() => navigate('/health-info')} />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-slate-800 text-lg">{t.recentCheckIns}</h2>
          {totalCheckins > 0 && (
            <button onClick={() => navigate('/my-health')} className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1">
              {t.viewAll}<ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        {loading ? (
          <div className="space-y-3">{[1, 2, 3].map((i) => (<div key={i} className="h-16 rounded-xl bg-slate-100 animate-pulse" />))}</div>
        ) : totalCheckins === 0 ? (
          <div className="text-center py-10">
            <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-3">
              <ClipboardList className="w-7 h-7 text-teal-400" />
            </div>
            <p className="text-slate-500 text-sm mb-4">{t.noCheckinsYet}</p>
            <button onClick={() => navigate('/check-in')} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 text-white font-medium text-sm hover:bg-teal-700 transition-colors">
              <ClipboardList className="w-4 h-4" />{t.startCheckIn}
            </button>
          </div>
        ) : (
          <div className="space-y-2.5">
            {checkins.map((c) => (
              <div key={c.id} className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-slate-800">
                    {new Date(c.created_at).toLocaleDateString(locale, { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="text-xs text-slate-500 truncate">
                    {c.symptoms.length > 0 ? c.symptoms.map((s) => translateSymptom(s, t)).join(', ') : t.noSymptomsReported}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <div key={n} className={`w-1.5 h-4 rounded-full ${n <= c.symptom_severity ? 'bg-teal-500' : 'bg-slate-200'}`} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {lastCheckin && (
        <div className="rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 p-5">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <div className="font-semibold text-slate-800 text-sm mb-1">{t.aiHealthInsight}</div>
              <p className="text-sm text-slate-600 leading-relaxed">{lastCheckin.ai_advice}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const COLOR_MAP = { teal: 'bg-teal-50 text-teal-600', amber: 'bg-amber-50 text-amber-600', indigo: 'bg-indigo-50 text-indigo-600', emerald: 'bg-emerald-50 text-emerald-600' };

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: keyof typeof COLOR_MAP }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 hover:shadow-sm transition-shadow">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${COLOR_MAP[color]}`}>{icon}</div>
      <div className="text-2xl font-bold text-slate-800">{value}</div>
      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
    </div>
  );
}

function QuickActionCard({ icon, title, desc, onClick }: { icon: React.ReactNode; title: string; desc: string; onClick: () => void }) {
  const { t } = useLanguage();
  return (
    <button onClick={onClick} className="text-left bg-white rounded-2xl border border-slate-200 p-5 hover:border-teal-300 hover:shadow-md transition-all group">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center mb-4 text-teal-600 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="font-semibold text-slate-800 mb-1">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      <div className="flex items-center gap-1 text-sm font-medium text-teal-600 mt-3">
        {t.explore}<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}
