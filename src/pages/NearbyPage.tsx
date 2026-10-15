import { useState } from 'react';
import { MapPin, Phone, Clock, Star, Navigation, Search, Hospital, Stethoscope, Baby, HeartPulse, Building2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { HOSPITALS } from '@/lib/healthData';
import { translateHospitalType, translateService } from '@/utils/translate';

const TYPE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'Multi-Specialty': Hospital, 'General Hospital': Building2, 'Speciality Clinic': Stethoscope,
  'Pediatric Hospital': Baby, 'Community Clinic': HeartPulse, 'Cardiac Speciality': HeartPulse,
};

export function NearbyPage() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [filter24h, setFilter24h] = useState(false);

  const filtered = HOSPITALS.filter((h) => {
    const matchesQuery = !query || h.name.toLowerCase().includes(query.toLowerCase()) || h.type.toLowerCase().includes(query.toLowerCase()) || h.services.some((s) => s.toLowerCase().includes(query.toLowerCase()));
    const matches24h = !filter24h || h.open24h;
    return matchesQuery && matches24h;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-5">
      <div className="animate-float-up">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">{t.nearbyHealthcare}</h1>
        <p className="text-slate-500 text-sm">{t.nearbySubtitle}</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder} className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100 transition-all" />
        </div>
        <button onClick={() => setFilter24h(!filter24h)} className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-medium transition-all whitespace-nowrap ${filter24h ? 'bg-teal-600 text-white border-teal-600' : 'bg-white text-slate-600 border-slate-200 hover:border-teal-300'}`}>
          <Clock className="w-4 h-4" />{t.open247}
        </button>
      </div>

      <div className="text-sm text-slate-500">
        {filtered.length} {filtered.length === 1 ? t.facilityFound : t.facilitiesFound}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-2xl border border-slate-200">
          <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-3">
            <MapPin className="w-7 h-7 text-slate-300" />
          </div>
          <p className="text-slate-500 text-sm">{t.noFacilitiesMatch}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((h, idx) => {
            const TypeIcon = TYPE_ICONS[h.type] ?? Hospital;
            return (
              <div key={h.id} className="bg-white rounded-2xl border border-slate-200 p-5 hover:border-teal-300 hover:shadow-md transition-all animate-float-up" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-emerald-50 flex items-center justify-center shrink-0 text-teal-600">
                    <TypeIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h3 className="font-semibold text-slate-800">{h.name}</h3>
                        <span className="text-xs text-teal-600 font-medium">{translateHospitalType(h.type, t)}</span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="text-sm font-semibold text-slate-700">{h.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5 mt-2 text-sm text-slate-500">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0" /><span>{h.address}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-2 text-xs">
                      <span className="flex items-center gap-1 text-slate-500"><Navigation className="w-3.5 h-3.5" />{h.distance}</span>
                      {h.open24h ? (
                        <span className="flex items-center gap-1 text-emerald-600 font-medium"><Clock className="w-3.5 h-3.5" />{t.open247}</span>
                      ) : (
                        <span className="flex items-center gap-1 text-slate-400"><Clock className="w-3.5 h-3.5" />{t.daytime}</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {h.services.map((s) => (<span key={s} className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-600 text-xs font-medium border border-slate-100">{translateService(s, t)}</span>))}
                    </div>
                    <div className="flex items-center gap-2 mt-4">
                      <a href={`tel:${h.phone.replace(/[\s]/g, '')}`} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition-colors">
                        <Phone className="w-4 h-4" />{t.call}
                      </a>
                      <a href={`https://www.google.com/maps/search/${encodeURIComponent(h.name + ' ' + h.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors">
                        <Navigation className="w-4 h-4" />{t.directions}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
