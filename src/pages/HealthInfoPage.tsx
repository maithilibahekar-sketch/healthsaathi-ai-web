import { useEffect, useState } from 'react';
import { BookOpen, Search, X, Sparkles, Loader2, type LucideIcon, Thermometer, HeartPulse, Brain, Apple, Activity, Moon, Droplet, Baby } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useLanguage } from '@/lib/i18n';
import { translateCategory } from '@/utils/translate';
import type { HealthInfo } from '@/types';

const ICON_MAP: Record<string, LucideIcon> = { Thermometer, HeartPulse, Brain, Apple, Activity, Moon, Droplet, Baby };

export function HealthInfoPage() {
  const { t } = useLanguage();
  const [articles, setArticles] = useState<HealthInfo[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('__all__');
  const [selected, setSelected] = useState<HealthInfo | null>(null);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.from('health_info').select('*').order('created_at', { ascending: true });
      setArticles((data as HealthInfo[]) ?? []);
      setLoading(false);
    })();
  }, []);

  const categories = Array.from(new Set(articles.map((a) => a.category)));
  const filtered = articles.filter((a) => {
    const matchesQuery = !query || a.title.toLowerCase().includes(query.toLowerCase()) || a.summary.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === '__all__' || a.category === category;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="animate-float-up">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">{t.healthInformation}</h1>
        <p className="text-slate-500 text-sm">{t.healthInfoSubtitle}</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchArticles} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all" />
      </div>

      {!loading && (
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setCategory('__all__')} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${category === '__all__' ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-300'}`}>{t.all}</button>
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${category === c ? 'bg-teal-600 text-white' : 'bg-white text-slate-600 border border-slate-200 hover:border-teal-300'}`}>{translateCategory(c, t)}</button>
          ))}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-16"><Loader2 className="w-6 h-6 text-teal-500 animate-spin" /></div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-3"><BookOpen className="w-7 h-7 text-slate-300" /></div>
          <p className="text-slate-500 text-sm">{t.noArticlesMatch}</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((a, idx) => {
            const Icon = ICON_MAP[a.icon_name] ?? BookOpen;
            return (
              <button key={a.id} onClick={() => setSelected(a)} className="text-left bg-white rounded-2xl border border-slate-200 p-5 hover:border-teal-300 hover:shadow-md transition-all group animate-float-up" style={{ animationDelay: `${idx * 60}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center shrink-0 text-teal-600 group-hover:scale-110 transition-transform"><Icon className="w-6 h-6" /></div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium text-teal-600">{translateCategory(a.category, t)}</span>
                    <h3 className="font-semibold text-slate-800 mt-0.5 mb-1">{a.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{a.summary}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden animate-[fadeIn_0.15s_ease-out]">
            <div className="flex items-start justify-between px-6 py-5 border-b border-slate-100">
              <div className="flex items-center gap-3">
                {(() => { const Icon = ICON_MAP[selected.icon_name] ?? BookOpen; return (<div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center text-teal-600 shrink-0"><Icon className="w-6 h-6" /></div>); })()}
                <div>
                  <span className="text-xs font-medium text-teal-600">{translateCategory(selected.category, t)}</span>
                  <h2 className="font-bold text-slate-800 text-lg leading-tight">{selected.title}</h2>
                </div>
              </div>
              <button onClick={() => setSelected(null)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors shrink-0"><X className="w-5 h-5 text-slate-400" /></button>
            </div>
            <div className="px-6 py-5 overflow-y-auto">
              <div className="flex items-start gap-2.5 p-4 rounded-xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 mb-4">
                <Sparkles className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600 leading-relaxed">{selected.summary}</p>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{selected.content}</p>
              <div className="mt-5 p-4 rounded-xl bg-amber-50 border border-amber-100">
                <p className="text-xs text-amber-800 leading-relaxed">{t.healthInfoDisclaimer}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
