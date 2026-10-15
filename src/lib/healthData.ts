import type { Language } from '@/utils/translations';

export const SYMPTOM_OPTIONS = [
  'Fever',
  'Cough',
  'Headache',
  'Fatigue',
  'Sore Throat',
  'Body Ache',
  'Nausea',
  'Dizziness',
  'Chest Pain',
  'Shortness of Breath',
  'Stomach Pain',
  'Skin Rash',
] as const;

export const MOOD_OPTIONS = [
  { value: 'great', label: 'Great', emoji: '😊' },
  { value: 'good', label: 'Good', emoji: '🙂' },
  { value: 'neutral', label: 'Neutral', emoji: '😐' },
  { value: 'low', label: 'Low', emoji: '😕' },
  { value: 'stressed', label: 'Stressed', emoji: '😣' },
] as const;

export const HOSPITALS = [
  {
    id: '1',
    name: 'City General Hospital',
    type: 'Multi-Specialty',
    distance: '1.2 km',
    address: '123 MG Road, Central District',
    phone: '+91 80 1234 5678',
    open24h: true,
    rating: 4.5,
    services: ['Emergency', 'Cardiology', 'Pediatrics', 'Radiology'],
  },
  {
    id: '2',
    name: 'Sunrise Medical Center',
    type: 'General Hospital',
    distance: '2.8 km',
    address: '45 Park Avenue, North Zone',
    phone: '+91 80 2345 6789',
    open24h: true,
    rating: 4.2,
    services: ['Emergency', 'General Medicine', 'Orthopedics', 'Pharmacy'],
  },
  {
    id: '3',
    name: 'LifeCare Speciality Clinic',
    type: 'Speciality Clinic',
    distance: '3.5 km',
    address: '78 Lake View Road, South Zone',
    phone: '+91 80 3456 7890',
    open24h: false,
    rating: 4.7,
    services: ['Cardiology', 'Neurology', 'Dermatology', 'Diagnostics'],
  },
  {
    id: '4',
    name: 'Apollo Children Hospital',
    type: 'Pediatric Hospital',
    distance: '4.1 km',
    address: '12 Ring Road, East Zone',
    phone: '+91 80 4567 8901',
    open24h: true,
    rating: 4.8,
    services: ['Pediatrics', 'Emergency', 'Neonatal Care', 'Vaccination'],
  },
  {
    id: '5',
    name: 'Wellness Community Clinic',
    type: 'Community Clinic',
    distance: '0.8 km',
    address: '34 Sector 5, West Zone',
    phone: '+91 80 5678 9012',
    open24h: false,
    rating: 4.0,
    services: ['General Medicine', 'Vaccination', 'Free Check-ups', 'Pharmacy'],
  },
  {
    id: '6',
    name: 'Metro Heart Institute',
    type: 'Cardiac Speciality',
    distance: '5.3 km',
    address: '90 Outer Ring Road, Central Zone',
    phone: '+91 80 6789 0123',
    open24h: true,
    rating: 4.6,
    services: ['Cardiology', 'Cardiac Surgery', 'ICU', 'Emergency'],
  },
];

const ADVICE: Record<Language, {
  urgent: string;
  significant: string;
  mild: string;
  mood: string;
  sleep: string;
  default: string;
}> = {
  en: {
    urgent: 'Your symptoms may need urgent medical attention. Please consider visiting a nearby hospital or calling emergency services immediately.',
    significant: 'Your symptoms appear significant. We recommend consulting a healthcare professional within the next 24 hours.',
    mild: 'Your symptoms appear mild. Rest, stay hydrated, and monitor how you feel over the next 24-48 hours.',
    mood: 'Take time for self-care today — try deep breathing, a short walk, or reaching out to someone you trust.',
    sleep: 'You are getting less than the recommended 7-9 hours of sleep. Prioritizing rest tonight will help your recovery.',
    default: 'Great news! Your health indicators look positive. Keep up your healthy habits and stay active.',
  },
  hi: {
    urgent: 'आपके लक्षणों को तत्काल चिकित्सा ध्यान की आवश्यकता हो सकती है। कृपया निकटतम अस्पताल में जाने या तुरंत आपातकालीन सेवाओं को कॉल करने पर विचार करें।',
    significant: 'आपके लक्षण महत्वपूर्ण प्रतीत होते हैं। हम अगले 24 घंटों में एक चिकित्सा पेशेवर से परामर्श लेने की सलाह देते हैं।',
    mild: 'आपके लक्षण हल्के प्रतीत होते हैं। आराम करें, खूब पानी पिएं, और अगले 24-48 घंटों में अपनी सेहत पर नज़र रखें।',
    mood: 'आज आत्म-देखभाल के लिए समय निकालें — गहरी सांस लें, एक छोटी सैर करें, या अपने भरोसेमंद किसी से बात करें।',
    sleep: 'आप अनुशंसित 7-9 घंटों से कम नींद ले रहे हैं। आज रात आराम को प्राथमिकता देना आपकी वसूली में मदद करेगा।',
    default: 'शानदार समाचार! आपके स्वास्थ्य संकेतक सकारात्मक दिखते हैं। अपनी स्वस्थ आदतें बनाए रखें और सक्रिय रहें।',
  },
  mr: {
    urgent: 'तुमच्या लक्षणांना तात्काळ वैद्यकीय लक्ष आवश्यक आहे. कृपया जवळच्या रुग्णालयात जाण्याचा किंवा लगेच आपत्कालीन सेवांना कॉल करण्याचा विचार करा.',
    significant: 'तुमची लक्षणे लक्षणीय वाटतात. आपण पुढील 24 तासांत एका वैद्यकीय व्यावसायिकांचा सल्ला घेण्याची शिफारस करतो.',
    mild: 'तुमची लक्षणे सौम्य वाटतात. विश्रांती घ्या, भरपूर पाणी प्या, आणि पुढील 24-48 तासांत आपल्या प्रकृतीवर लक्ष ठेवा.',
    mood: 'आज स्व-काळजीसाठी वेळ काढा — खोल श्वास घ्या, एक छोटी फेरी मारा, किंवा तुमच्या विश्वासाच्या व्यक्तीशी बोला.',
    sleep: 'तुम्ही भरीव 7-9 तासांपेक्षा कमी झोप घेत आहात. आज रात्री विश्रांतीला प्राधान्य देणे तुमच्या पुनर्प्राप्तीत मदत करेल.',
    default: 'छान बातमी! तुमचे आरोग्य संकेत सकारात्मक दिसतात. तुमच्या निरोगी सवयी चालू ठेवा आणि सक्रिय रहा.',
  },
};

export function generateAdvice(symptoms: string[], severity: number, mood: string, sleepHours: number | null, lang: Language = 'en'): string {
  const a = ADVICE[lang];
  const parts: string[] = [];

  if (symptoms.includes('Chest Pain') || symptoms.includes('Shortness of Breath')) {
    parts.push(a.urgent);
  } else if (severity >= 4) {
    parts.push(a.significant);
  } else if (symptoms.length > 0) {
    parts.push(a.mild);
  }

  if (mood === 'stressed' || mood === 'low') {
    parts.push(a.mood);
  }

  if (sleepHours !== null && sleepHours < 6) {
    parts.push(a.sleep);
  }

  if (parts.length === 0) {
    parts.push(a.default);
  }

  return parts.join(' ');
}
