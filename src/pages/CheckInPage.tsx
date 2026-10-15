import { useState } from 'react';
import { ClipboardList, Check, Loader2, ArrowRight, Sparkles, Activity, Moon, Smile, StickyNote } from 'lucide-react';
import { useRouter } from '@/lib/router';
import { useLanguage } from '@/lib/i18n';
import { supabase } from '@/lib/supabase';
import { SYMPTOM_OPTIONS, MOOD_OPTIONS, generateAdvice } from '@/lib/healthData';
import { translateSymptom } from '@/utils/translate';
import type { NewCheckin } from '@/types';

export function CheckInPage() {
  const { navigate } = useRouter();
  const { t, lang } = useLanguage();
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [severity, setSeverity] = useState(3);
  const [mood, setMood] = useState('neutral');
  const [sleepHours, setSleepHours] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [advice, setAdvice] = useState('');

  const toggleSymptom = (s: string) => setSymptoms((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleSubmit = async () => {
    setSubmitting(true);
    const sleep = sleepHours ? parseFloat(sleepHours) : null;
    const generatedAdvice = generateAdvice(symptoms, severity, mood, sleep, lang);
    const payload: NewCheckin = { symptoms, symptom_severity: severity, mood, sleep_hours: sleep, notes, ai_advice: generatedAdvice };
    const { error } = await supabase.from('health_checkins').insert(payload);
    setSubmitting(false);
    if (error) return;
    setAdvice(generatedAdvice);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 text-center animate-float-up">
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
            <Check className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">{t.checkInComplete}</h2>
          <p className="text-slate-500 text-sm mb-6">{t.savedSuccess}</p>
          <div className="rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 p-5 text-left mb-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <div className="font-semibold text-slate-800 text-sm mb-1">{t.aiHealthInsight}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{advice}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate('/my-health')} className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors">
              {t.viewMyHealth}<ArrowRight className="w-4 h-4" />
            </button>
            <button onClick={() => { setSymptoms([]); setSeverity(3); setMood('neutral'); setSleepHours(''); setNotes(''); setSuccess(false); setAdvice(''); }} className="px-6 py-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors">
              {t.newCheckIn}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const moodLabelKey: Record<string, 'great' | 'good' | 'neutral' | 'low' | 'stressed'> = { great: 'great', good: 'good', neutral: 'neutral', low: 'low', stressed: 'stressed' };

  return (
    <div className="max-w-3xl mx-auto space-y-5">
      <div className="animate-float-up">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">{t.healthCheckIn}</h1>
        <p className="text-slate-500 text-sm">{t.checkInSubtitle}</p>
      </div>

      <Section icon={<Activity className="w-5 h-5" />} title={t.symptomsTitle} step={1} t={t}>
        <div className="flex flex-wrap gap-2">
          {SYMPTOM_OPTIONS.map((s) => (
            <button key={s} onClick={() => toggleSymptom(s)} className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${symptoms.includes(s) ? 'bg-teal-600 text-white border-teal-600 shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:border-teal-300 hover:bg-teal-50/40'}`}>
              {symptoms.includes(s) && <Check className="w-3.5 h-3.5 inline mr-1.5" />}
              {translateSymptom(s, t)}
            </button>
          ))}
        </div>
        {symptoms.length === 0 && <p className="text-xs text-slate-400 mt-3">{t.noSymptomsSelected}</p>}
      </Section>

      <Section icon={<Activity className="w-5 h-5" />} title={t.severityTitle} step={2} t={t}>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400 w-12 text-right">{t.mild}</span>
          <div className="flex-1 flex gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button key={n} onClick={() => setSeverity(n)} className={`flex-1 h-12 rounded-xl border-2 font-bold text-sm transition-all ${n <= severity ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-200 bg-white text-slate-300 hover:border-slate-300'}`}>{n}</button>
            ))}
          </div>
          <span className="text-xs text-slate-400 w-12">{t.severe}</span>
        </div>
      </Section>

      <Section icon={<Smile className="w-5 h-5" />} title={t.moodTitle} step={3} t={t}>
        <div className="grid grid-cols-5 gap-2">
          {MOOD_OPTIONS.map((m) => (
            <button key={m.value} onClick={() => setMood(m.value)} className={`flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 transition-all ${mood === m.value ? 'border-teal-500 bg-teal-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
              <span className="text-2xl">{m.emoji}</span>
              <span className={`text-xs font-medium ${mood === m.value ? 'text-teal-700' : 'text-slate-500'}`}>{t[moodLabelKey[m.value]]}</span>
            </button>
          ))}
        </div>
      </Section>

      <Section icon={<Moon className="w-5 h-5" />} title={t.sleepTitle} step={4} t={t}>
        <div className="flex items-center gap-3">
          <input type="number" min="0" max="24" step="0.5" value={sleepHours} onChange={(e) => setSleepHours(e.target.value)} placeholder={t.sleepPlaceholder} className="w-32 px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all" />
          <span className="text-sm text-slate-500">{t.hours}</span>
        </div>
      </Section>

      <Section icon={<StickyNote className="w-5 h-5" />} title={t.notesTitle} step={5} t={t}>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder={t.notesPlaceholder} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all resize-none" />
      </Section>

      <div className="flex items-center gap-3 pt-2">
        <button onClick={handleSubmit} disabled={submitting} className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-teal-600 text-white font-semibold text-sm shadow-sm hover:bg-teal-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-95">
          {submitting ? (<><Loader2 className="w-5 h-5 animate-spin" />{t.saving}</>) : (<><ClipboardList className="w-5 h-5" />{t.submitCheckIn}</>)}
        </button>
        <button onClick={() => navigate('/')} className="px-6 py-3.5 rounded-xl bg-slate-100 text-slate-600 font-medium text-sm hover:bg-slate-200 transition-colors">{t.cancel}</button>
      </div>
    </div>
  );
}

import type { TranslationDict } from '@/utils/translations';

function Section({ icon, title, step, t, children }: { icon: React.ReactNode; title: string; step: number; t: TranslationDict; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 md:p-6 animate-float-up">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">{icon}</div>
        <h3 className="font-semibold text-slate-800 text-sm md:text-base">{title}</h3>
        <span className="ml-auto text-xs font-bold text-slate-300">{t.step} {step}</span>
      </div>
      {children}
    </div>
  );
}
