import { useEffect, useState } from 'react';
import { HeartPulse, Calendar, Activity, Moon, Smile, StickyNote, Sparkles, ClipboardList, Trash2, TrendingDown } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { useLanguage } from '@/lib/i18n';
import { supabase } from '@/lib/supabase';
import { translateSymptom, translateMood } from '@/utils/translate';
import type { HealthCheckin } from '@/types';

export function MyHealthPage() {
  const { navigate } = useRouter();
  const { t, locale } = useLanguage();
  const [checkins, setCheckins] = useState<HealthCheckin[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('health_checkins').select('*').order('created_at', { ascending: false });
      setCheckins((data as HealthCheckin[]) ?? []);
      setLoading(false);
    })();
  }, []);

  const handleDelete = async (id: string) => {
    await supabase.from('health_checkins').delete().eq('id', id);
    setCheckins((prev) => prev.filter((c) => c.id !== id));
  };

  const totalCheckins = checkins.length;
  const avgSeverity = totalCheckins ? (checkins.reduce((s, c) => s + c.symptom_severity, 0) / totalCheckins).toFixed(1) : '—';
  const sleepEntries = checkins.filter((c) => c.sleep_hours !== null);
  const avgSleep = sleepEntries.length ? (sleepEntries.reduce((s, c) => s + (c.sleep_hours ?? 0), 0) / sleepEntries.length).toFixed(1) : '—';
  const goodMoodCount = checkins.filter((c) => c.mood === 'great' || c.mood === 'good').length;
  const moodPct = totalCheckins ? Math.round((goodMoodCount / totalCheckins) * 100) : 0;

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="animate-float-up">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">{t.myHealth}</h1>
        <p className="text-slate-500 text-sm">{t.myHealthSubtitle}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <SummaryCard icon={<ClipboardList className="w-5 h-5" />} label={t.totalCheckIns} value={String(totalCheckins)} color="teal" />
        <SummaryCard icon={<Activity className="w-5 h-5" />} label={t.avgSeverity} value={String(avgSeverity)} color="amber" />
        <SummaryCard icon={<Moon className="w-5 h-5" />} label={t.avgSleep} value={avgSleep === '—' ? '—' : `${avgSleep}h`} color="indigo" />
        <SummaryCard icon={<Smile className="w-5 h-5" />} label={t.goodMoodDays} value={`${moodPct}%`} color="emerald" />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-slate-800 text-lg">{t.checkInHistory}</h2>
          <button onClick={() => navigate('/check-in')} className="flex items-center gap-1.5 text-sm font-medium text-teal-600 hover:text-teal-700">
            <ClipboardList className="w-4 h-4" />{t.newCheckIn}
          </button>
        </div>
        {loading ? (
          <div className="space-y-3">{[1, 2, 3].map((i) => (<div key={i} className="h-20 rounded-xl bg-slate-100 animate-pulse" />))}</div>
        ) : totalCheckins === 0 ? (
          <div className="text-center py-12">
            <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-3">
              <HeartPulse className="w-7 h-7 text-teal-400" />
            </div>
            <p className="text-slate-500 text-sm mb-4">{t.noCheckinsHistory}</p>
            <button onClick={() => navigate('/check-in')} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 text-white font-medium text-sm hover:bg-teal-700 transition-colors">
              <ClipboardList className="w-4 h-4" />{t.startCheckIn}
            </button>
          </div>
        ) : (
          <div className="space-y-2.5">
            {checkins.map((c) => (
              <div key={c.id} className="rounded-xl border border-slate-100 overflow-hidden">
                <button onClick={() => setExpandedId(expandedId === c.id ? null : c.id)} className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 transition-colors text-left">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 text-teal-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-slate-800">
                      {new Date(c.created_at).toLocaleDateString(locale, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="text-xs text-slate-500 truncate mt-0.5">
                      {c.symptoms.length > 0 ? c.symptoms.map((s) => translateSymptom(s, t)).join(', ') : t.noSymptoms} · {translateMood(c.mood, t)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (<div key={n} className={`w-1.5 h-4 rounded-full ${n <= c.symptom_severity ? 'bg-teal-500' : 'bg-slate-200'}`} />))}
                    </div>
                    {c.symptom_severity >= 4 && <TrendingDown className="w-4 h-4 text-amber-500" />}
                  </div>
                </button>
                {expandedId === c.id && (
                  <div className="px-4 pb-4 pt-1 space-y-3 bg-slate-50/50">
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <DetailItem icon={<Activity className="w-4 h-4" />} label={t.severity} value={`${c.symptom_severity}/5`} />
                      <DetailItem icon={<Smile className="w-4 h-4" />} label={t.mood} value={translateMood(c.mood, t)} />
                      <DetailItem icon={<Moon className="w-4 h-4" />} label={t.sleep} value={c.sleep_hours !== null ? `${c.sleep_hours} ${t.hours}` : t.notRecorded} />
                      <DetailItem icon={<ClipboardList className="w-4 h-4" />} label={t.symptoms} value={c.symptoms.length > 0 ? c.symptoms.map((s) => translateSymptom(s, t)).join(', ') : t.noneReported} />
                    </div>
                    {c.notes && (
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-white border border-slate-100">
                        <StickyNote className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <p className="text-sm text-slate-600">{c.notes}</p>
                      </div>
                    )}
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100">
                      <Sparkles className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                      <p className="text-sm text-slate-600">{c.ai_advice}</p>
                    </div>
                    <div className="flex justify-end">
                      <button onClick={() => handleDelete(c.id)} className="flex items-center gap-1.5 text-xs font-medium text-red-500 hover:text-red-600 px-3 py-1.5 rounded-lg hover:bg-red-50 transition-colors">
                        <Trash2 className="w-3.5 h-3.5" />{t.delete}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const COLOR_MAP = { teal: 'bg-teal-50 text-teal-600', amber: 'bg-amber-50 text-amber-600', indigo: 'bg-indigo-50 text-indigo-600', emerald: 'bg-emerald-50 text-emerald-600' };

function SummaryCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: keyof typeof COLOR_MAP }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${COLOR_MAP[color]}`}>{icon}</div>
      <div className="text-2xl font-bold text-slate-800">{value}</div>
      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
    </div>
  );
}

function DetailItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-slate-100">
      <div className="text-slate-400 mt-0.5">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs text-slate-400">{label}</div>
        <div className="text-sm font-medium text-slate-700">{value}</div>
      </div>
    </div>
  );
}
