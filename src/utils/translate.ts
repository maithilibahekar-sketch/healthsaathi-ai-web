import type { TranslationDict } from '@/utils/translations';

export const SYMPTOM_MAP: Record<string, keyof TranslationDict> = {
  'Fever': 'fever',
  'Cough': 'cough',
  'Headache': 'headache',
  'Fatigue': 'fatigue',
  'Sore Throat': 'soreThroat',
  'Body Ache': 'bodyAche',
  'Nausea': 'nausea',
  'Dizziness': 'dizziness',
  'Chest Pain': 'chestPain',
  'Shortness of Breath': 'shortnessOfBreath',
  'Stomach Pain': 'stomachPain',
  'Skin Rash': 'skinRash',
};

export const MOOD_MAP: Record<string, keyof TranslationDict> = {
  great: 'great',
  good: 'good',
  neutral: 'neutral',
  low: 'low',
  stressed: 'stressed',
};

export const MOOD_EMOJI: Record<string, string> = {
  great: '😊', good: '🙂', neutral: '😐', low: '😕', stressed: '😣',
};

export const HOSPITAL_TYPE_MAP: Record<string, keyof TranslationDict> = {
  'Multi-Specialty': 'multiSpecialty',
  'General Hospital': 'generalHospital',
  'Speciality Clinic': 'specialityClinic',
  'Pediatric Hospital': 'pediatricHospital',
  'Community Clinic': 'communityClinic',
  'Cardiac Speciality': 'cardiacSpeciality',
};

export const SERVICE_MAP: Record<string, keyof TranslationDict> = {
  'Emergency': 'emergency',
  'Cardiology': 'cardiology',
  'Pediatrics': 'pediatrics',
  'Radiology': 'radiology',
  'General Medicine': 'generalMedicine',
  'Orthopedics': 'orthopedics',
  'Pharmacy': 'pharmacy',
  'Neurology': 'neurology',
  'Dermatology': 'dermatology',
  'Diagnostics': 'diagnostics',
  'Neonatal Care': 'neonatalCare',
  'Vaccination': 'vaccination',
  'Free Check-ups': 'freeCheckups',
  'Cardiac Surgery': 'cardiacSurgery',
  'ICU': 'icu',
};

export const CATEGORY_MAP: Record<string, keyof TranslationDict> = {
  'General Health': 'generalHealth',
  'Cardiovascular': 'cardiovascular',
  'Mental Health': 'mentalHealth',
  'Nutrition': 'nutrition',
  'Fitness': 'fitness',
  'Wellness': 'wellness',
  'Chronic Conditions': 'chronicConditions',
  'Pediatrics': 'pediatrics',
};

export function translateSymptom(s: string, t: TranslationDict): string {
  const key = SYMPTOM_MAP[s];
  return key ? t[key] : s;
}

export function translateMood(value: string, t: TranslationDict): string {
  const key = MOOD_MAP[value];
  if (!key) return value;
  return `${MOOD_EMOJI[value] ?? ''} ${t[key]}`;
}

export function translateHospitalType(type: string, t: TranslationDict): string {
  const key = HOSPITAL_TYPE_MAP[type];
  return key ? t[key] : type;
}

export function translateService(service: string, t: TranslationDict): string {
  const key = SERVICE_MAP[service];
  return key ? t[key] : service;
}

export function translateCategory(category: string, t: TranslationDict): string {
  const key = CATEGORY_MAP[category];
  return key ? t[key] : category;
}
