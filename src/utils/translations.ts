export type Language = 'en' | 'hi' | 'mr';

export type TranslationKey =
  | 'aiCompanion'
  | 'dashboard'
  | 'healthCheckIn'
  | 'myHealth'
  | 'nearbyHealthcare'
  | 'healthInformation'
  | 'emergencyHelp'
  | 'tapToCall'
  | 'nationalEmergency'
  | 'allInOneEmergencyHelpline'
  | 'ambulance'
  | 'freeAmbulanceService'
  | 'womenHelpline'
  | 'womenSupport247'
  | 'childHelpline'
  | 'childInDistress'
  | 'mentalHealthHelpline'
  | 'kiranFreeSupport'
  | 'emergencyDisclaimer'
  | 'openMenu'
  | 'privacyProtected'
  | 'privacySidebarDesc'
  | 'privacyFooter'
  | 'yourCompanionInCare'
  | 'heroTitle'
  | 'heroDesc'
  | 'startHealthCheckIn'
  | 'findNearbyCare'
  | 'totalCheckIns'
  | 'avgSeverity'
  | 'avgSleepHrs'
  | 'healthTrend'
  | 'active'
  | 'new'
  | 'myHealthDesc'
  | 'nearbyDesc'
  | 'healthInfoDesc'
  | 'recentCheckIns'
  | 'viewAll'
  | 'noCheckinsYet'
  | 'startCheckIn'
  | 'noSymptomsReported'
  | 'aiHealthInsight'
  | 'checkInSubtitle'
  | 'step'
  | 'symptomsTitle'
  | 'noSymptomsSelected'
  | 'severityTitle'
  | 'mild'
  | 'severe'
  | 'moodTitle'
  | 'sleepTitle'
  | 'hours'
  | 'sleepPlaceholder'
  | 'notesTitle'
  | 'notesPlaceholder'
  | 'submitCheckIn'
  | 'saving'
  | 'cancel'
  | 'checkInComplete'
  | 'savedSuccess'
  | 'viewMyHealth'
  | 'newCheckIn'
  | 'myHealthSubtitle'
  | 'avgSleep'
  | 'goodMoodDays'
  | 'checkInHistory'
  | 'noCheckinsHistory'
  | 'severity'
  | 'mood'
  | 'sleep'
  | 'symptoms'
  | 'notRecorded'
  | 'noneReported'
  | 'noSymptoms'
  | 'delete'
  | 'nearbySubtitle'
  | 'searchPlaceholder'
  | 'open247'
  | 'facilityFound'
  | 'facilitiesFound'
  | 'noFacilitiesMatch'
  | 'call'
  | 'directions'
  | 'daytime'
  | 'healthInfoSubtitle'
  | 'searchArticles'
  | 'all'
  | 'noArticlesMatch'
  | 'healthInfoDisclaimer'
  | 'explore'
  | 'fever'
  | 'cough'
  | 'headache'
  | 'fatigue'
  | 'soreThroat'
  | 'bodyAche'
  | 'nausea'
  | 'dizziness'
  | 'chestPain'
  | 'shortnessOfBreath'
  | 'stomachPain'
  | 'skinRash'
  | 'great'
  | 'good'
  | 'neutral'
  | 'low'
  | 'stressed'
  | 'multiSpecialty'
  | 'generalHospital'
  | 'specialityClinic'
  | 'pediatricHospital'
  | 'communityClinic'
  | 'cardiacSpeciality'
  | 'cardiology'
  | 'pediatrics'
  | 'radiology'
  | 'generalMedicine'
  | 'orthopedics'
  | 'pharmacy'
  | 'neurology'
  | 'dermatology'
  | 'diagnostics'
  | 'neonatalCare'
  | 'vaccination'
  | 'freeCheckups'
  | 'cardiacSurgery'
  | 'icu'
  | 'generalHealth'
  | 'cardiovascular'
  | 'mentalHealth'
  | 'nutrition'
  | 'fitness'
  | 'wellness'
  | 'chronicConditions'
  | 'emergency';

export type TranslationDict = Record<TranslationKey, string>;

export const english: TranslationDict = {
  aiCompanion: 'AI Companion',
  dashboard: 'Dashboard',
  healthCheckIn: 'Health Check-In',
  myHealth: 'My Health',
  nearbyHealthcare: 'Nearby Healthcare',
  healthInformation: 'Health Information',
  emergencyHelp: 'Emergency Help',
  tapToCall: 'Tap a number to call',
  nationalEmergency: 'National Emergency',
  allInOneEmergencyHelpline: 'All-in-one emergency helpline',
  ambulance: 'Ambulance',
  freeAmbulanceService: 'Free ambulance service',
  womenHelpline: 'Women Helpline',
  womenSupport247: '24/7 women support',
  childHelpline: 'Child Helpline',
  childInDistress: 'Child in distress',
  mentalHealthHelpline: 'Mental Health Helpline',
  kiranFreeSupport: 'Kiran — free support',
  emergencyDisclaimer: 'In a life-threatening emergency, call your local emergency number immediately.',
  openMenu: 'Open menu',
  privacyProtected: 'Privacy Protected',
  privacySidebarDesc: 'Your check-ins are stored securely and never shared without your consent.',
  privacyFooter: 'Your health data is private and secure. HealthSaathi AI is a supportive tool and not a substitute for professional medical advice.',
  yourCompanionInCare: 'Your Companion in Care',
  heroTitle: 'Your Health, Our Priority',
  heroDesc: 'Track your well-being, get AI-powered insights, and find nearby healthcare — all in one caring companion.',
  startHealthCheckIn: 'Start Health Check-In',
  findNearbyCare: 'Find Nearby Care',
  totalCheckIns: 'Total Check-Ins',
  avgSeverity: 'Avg. Severity',
  avgSleepHrs: 'Avg. Sleep (hrs)',
  healthTrend: 'Health Trend',
  active: 'Active',
  new: 'New',
  myHealthDesc: 'View your check-in history and health trends over time.',
  nearbyDesc: 'Find hospitals, clinics, and emergency services near you.',
  healthInfoDesc: 'Browse trusted health articles and wellness tips.',
  recentCheckIns: 'Recent Check-Ins',
  viewAll: 'View all',
  noCheckinsYet: 'No check-ins yet. Start your first health check-in today.',
  startCheckIn: 'Start Check-In',
  noSymptomsReported: 'No symptoms reported',
  aiHealthInsight: 'AI Health Insight',
  checkInSubtitle: "Take a moment to share how you're feeling today.",
  step: 'Step',
  symptomsTitle: 'What symptoms are you experiencing?',
  noSymptomsSelected: "No symptoms selected — that's okay too!",
  severityTitle: 'How severe are your symptoms?',
  mild: 'Mild',
  severe: 'Severe',
  moodTitle: 'How is your mood today?',
  sleepTitle: 'How many hours did you sleep last night?',
  hours: 'hours',
  sleepPlaceholder: 'e.g. 7.5',
  notesTitle: 'Additional notes (optional)',
  notesPlaceholder: "Anything else you'd like to note about how you're feeling...",
  submitCheckIn: 'Submit Check-In',
  saving: 'Saving...',
  cancel: 'Cancel',
  checkInComplete: 'Check-In Complete!',
  savedSuccess: 'Your health check-in has been saved successfully.',
  viewMyHealth: 'View My Health',
  newCheckIn: 'New Check-In',
  myHealthSubtitle: 'Your check-in history and health summary at a glance.',
  avgSleep: 'Avg. Sleep',
  goodMoodDays: 'Good Mood Days',
  checkInHistory: 'Check-In History',
  noCheckinsHistory: 'No check-ins yet. Your health history will appear here.',
  severity: 'Severity',
  mood: 'Mood',
  sleep: 'Sleep',
  symptoms: 'Symptoms',
  notRecorded: 'Not recorded',
  noneReported: 'None reported',
  noSymptoms: 'No symptoms',
  delete: 'Delete',
  nearbySubtitle: 'Find hospitals, clinics, and emergency services close to you.',
  searchPlaceholder: 'Search by name, type, or service...',
  open247: 'Open 24/7',
  facilityFound: 'facility found',
  facilitiesFound: 'facilities found',
  noFacilitiesMatch: 'No facilities match your search. Try a different term.',
  call: 'Call',
  directions: 'Directions',
  daytime: 'Daytime',
  healthInfoSubtitle: 'Trusted, easy-to-read articles to help you stay informed and healthy.',
  searchArticles: 'Search health articles...',
  all: 'All',
  noArticlesMatch: 'No articles match your search.',
  healthInfoDisclaimer: 'This information is for educational purposes only and is not a substitute for professional medical advice. Always consult a qualified healthcare provider for medical concerns.',
  explore: 'Explore',
  fever: 'Fever',
  cough: 'Cough',
  headache: 'Headache',
  fatigue: 'Fatigue',
  soreThroat: 'Sore Throat',
  bodyAche: 'Body Ache',
  nausea: 'Nausea',
  dizziness: 'Dizziness',
  chestPain: 'Chest Pain',
  shortnessOfBreath: 'Shortness of Breath',
  stomachPain: 'Stomach Pain',
  skinRash: 'Skin Rash',
  great: 'Great',
  good: 'Good',
  neutral: 'Neutral',
  low: 'Low',
  stressed: 'Stressed',
  multiSpecialty: 'Multi-Specialty',
  generalHospital: 'General Hospital',
  specialityClinic: 'Speciality Clinic',
  pediatricHospital: 'Pediatric Hospital',
  communityClinic: 'Community Clinic',
  cardiacSpeciality: 'Cardiac Speciality',
  cardiology: 'Cardiology',
  pediatrics: 'Pediatrics',
  radiology: 'Radiology',
  generalMedicine: 'General Medicine',
  orthopedics: 'Orthopedics',
  pharmacy: 'Pharmacy',
  neurology: 'Neurology',
  dermatology: 'Dermatology',
  diagnostics: 'Diagnostics',
  neonatalCare: 'Neonatal Care',
  vaccination: 'Vaccination',
  freeCheckups: 'Free Check-ups',
  cardiacSurgery: 'Cardiac Surgery',
  icu: 'ICU',
  generalHealth: 'General Health',
  cardiovascular: 'Cardiovascular',
  mentalHealth: 'Mental Health',
  nutrition: 'Nutrition',
  fitness: 'Fitness',
  wellness: 'Wellness',
  chronicConditions: 'Chronic Conditions',
  emergency: 'Emergency',
};

export const hindi: TranslationDict = {
  aiCompanion: 'AI साथी',
  dashboard: 'डैशबोर्ड',
  healthCheckIn: 'स्वास्थ्य जांच',
  myHealth: 'मेरा स्वास्थ्य',
  nearbyHealthcare: 'पास की स्वास्थ्य सेवाएं',
  healthInformation: 'स्वास्थ्य जानकारी',
  emergencyHelp: 'आपातकालीन सहायता',
  tapToCall: 'कॉल के लिए नंबर चुनें',
  nationalEmergency: 'राष्ट्रीय आपातकाल',
  allInOneEmergencyHelpline: 'एकीकृत आपातकालीन हेल्पलाइन',
  ambulance: 'एम्बुलेंस',
  freeAmbulanceService: 'मुफ्त एम्बुलेंस सेवा',
  womenHelpline: 'महिला हेल्पलाइन',
  womenSupport247: '24/7 महिला सहायता',
  childHelpline: 'बाल हेल्पलाइन',
  childInDistress: 'संकट में बच्चा',
  mentalHealthHelpline: 'मानसिक स्वास्थ्य हेल्पलाइन',
  kiranFreeSupport: 'किरण — मुफ्त सहायता',
  emergencyDisclaimer: 'जानलेवा आपातकाल में, तुरंत अपनी स्थानीय आपातकालीन नंबर पर कॉल करें।',
  openMenu: 'मेन्यू खोलें',
  privacyProtected: 'निजता सुरक्षित',
  privacySidebarDesc: 'आपकी जांच सुरक्षित रूप से जमा की जाती है और आपकी सहमति के बिना कभी साझा नहीं की जाती।',
  privacyFooter: 'आपका स्वास्थ्य डेटा निजी और सुरक्षित है। HealthSaathi AI एक सहायक उपकरण है, पेशेवर चिकित्सा सलाह का विकल्प नहीं।',
  yourCompanionInCare: 'आपकी देखभाल में साथी',
  heroTitle: 'आपका स्वास्थ्य, हमारी प्राथमिकता',
  heroDesc: 'अपनी भलाई पर नज़र रखें, AI-संचालित जानकारी पाएं, और पास की स्वास्थ्य सेवाएं खोजें — सब एक ही देखभाल साथी में।',
  startHealthCheckIn: 'स्वास्थ्य जांच शुरू करें',
  findNearbyCare: 'पास की सेवा खोजें',
  totalCheckIns: 'कुल जांच',
  avgSeverity: 'औसत गंभीरता',
  avgSleepHrs: 'औसत नींद (घंटे)',
  healthTrend: 'स्वास्थ्य प्रवृत्ति',
  active: 'सक्रिय',
  new: 'नया',
  myHealthDesc: 'अपनी जांच इतिहास और समय के साथ स्वास्थ्य प्रवृत्तियां देखें।',
  nearbyDesc: 'अपने पास अस्पताल, क्लिनिक, और आपातकालीन सेवाएं खोजें।',
  healthInfoDesc: 'भरोसेमंद स्वास्थ्य लेख और कल्याण सुझाव पढ़ें।',
  recentCheckIns: 'हाल की जांच',
  viewAll: 'सभी देखें',
  noCheckinsYet: 'अभी तक कोई जांच नहीं। आज अपनी पहली स्वास्थ्य जांच शुरू करें।',
  startCheckIn: 'जांच शुरू करें',
  noSymptomsReported: 'कोई लक्षण नहीं बताया गया',
  aiHealthInsight: 'AI स्वास्थ्य जानकारी',
  checkInSubtitle: 'आज आप कैसा महसूस कर रहे हैं, यह बताने के लिए कुछ पल लें।',
  step: 'चरण',
  symptomsTitle: 'आपको कौन से लक्षण हैं?',
  noSymptomsSelected: 'कोई लक्षण नहीं चुना — यह भी ठीक है!',
  severityTitle: 'आपके लक्षण कितने गंभीर हैं?',
  mild: 'हल्का',
  severe: 'गंभीर',
  moodTitle: 'आज आपका मूड कैसा है?',
  sleepTitle: 'कल रात आप कितने घंटे सोए?',
  hours: 'घंटे',
  sleepPlaceholder: 'जैसे 7.5',
  notesTitle: 'अतिरिक्त नोट (वैकल्पिक)',
  notesPlaceholder: 'और कुछ जो आप नोट करना चाहें...',
  submitCheckIn: 'जांच जमा करें',
  saving: 'सहेज रहे हैं...',
  cancel: 'रद्द करें',
  checkInComplete: 'जांच पूरी हुई!',
  savedSuccess: 'आपकी स्वास्थ्य जांच सफलतापूर्वक सहेजी गई है।',
  viewMyHealth: 'मेरा स्वास्थ्य देखें',
  newCheckIn: 'नई जांच',
  myHealthSubtitle: 'आपकी जांच इतिहास और स्वास्थ्य सारांश एक नज़र में।',
  avgSleep: 'औसत नींद',
  goodMoodDays: 'अच्छे मूड वाले दिन',
  checkInHistory: 'जांच इतिहास',
  noCheckinsHistory: 'अभी तक कोई जांच नहीं। आपका स्वास्थ्य इतिहास यहां दिखाई देगा।',
  severity: 'गंभीरता',
  mood: 'मूड',
  sleep: 'नींद',
  symptoms: 'लक्षण',
  notRecorded: 'दर्ज नहीं',
  noneReported: 'कोई नहीं बताया',
  noSymptoms: 'कोई लक्षण नहीं',
  delete: 'हटाएं',
  nearbySubtitle: 'अपने पास अस्पताल, क्लिनिक, और आपातकालीन सेवाएं खोजें।',
  searchPlaceholder: 'नाम, प्रकार, या सेवा से खोजें...',
  open247: '24/7 खुला',
  facilityFound: 'सुविधा मिली',
  facilitiesFound: 'सुविधाएं मिलीं',
  noFacilitiesMatch: 'आपकी खोज से कोई सुविधा मेल नहीं खाती। दूसरा शब्द आज़माएं।',
  call: 'कॉल',
  directions: 'दिशा-निर्देश',
  daytime: 'दिन का समय',
  healthInfoSubtitle: 'भरोसेमंद, आसान लेख जो आपको सूचित और स्वस्थ रखें।',
  searchArticles: 'स्वास्थ्य लेख खोजें...',
  all: 'सभी',
  noArticlesMatch: 'आपकी खोज से कोई लेख मेल नहीं खाता।',
  healthInfoDisclaimer: 'यह जानकारी केवल शैक्षिक उद्देश्यों के लिए है और पेशेवर चिकित्सा सलाह का विकल्प नहीं है। चिकित्सीय चिंताओं के लिए हमेशा एक योग्य चिकित्सक से परामर्श लें।',
  explore: 'देखें',
  fever: 'बुखार',
  cough: 'खांसी',
  headache: 'सिरदर्द',
  fatigue: 'थकान',
  soreThroat: 'गले में खराश',
  bodyAche: 'शरीर में दर्द',
  nausea: 'जी मिचलाना',
  dizziness: 'चक्कर आना',
  chestPain: 'छाती में दर्द',
  shortnessOfBreath: 'सांस फूलना',
  stomachPain: 'पेट दर्द',
  skinRash: 'त्वचा पर दाने',
  great: 'बहुत अच्छा',
  good: 'अच्छा',
  neutral: 'सामान्य',
  low: 'उदास',
  stressed: 'तनावग्रस्त',
  multiSpecialty: 'बहु-विशेषता',
  generalHospital: 'सामान्य अस्पताल',
  specialityClinic: 'विशेषता क्लिनिक',
  pediatricHospital: 'बाल अस्पताल',
  communityClinic: 'सामुदायिक क्लिनिक',
  cardiacSpeciality: 'हृदय विशेषता',
  cardiology: 'हृदय रोग',
  pediatrics: 'बाल चिकित्सा',
  radiology: 'रेडियोलॉजी',
  generalMedicine: 'सामान्य चिकित्सा',
  orthopedics: 'ऑर्थोपेडिक्स',
  pharmacy: 'फार्मेसी',
  neurology: 'तंत्रिका विज्ञान',
  dermatology: 'त्वचा विज्ञान',
  diagnostics: 'निदान',
  neonatalCare: 'नवजात देखभाल',
  vaccination: 'टीकाकरण',
  freeCheckups: 'मुफ्त जांच',
  cardiacSurgery: 'हृदय सर्जरी',
  icu: 'ICU',
  generalHealth: 'सामान्य स्वास्थ्य',
  cardiovascular: 'हृदय रोग',
  mentalHealth: 'मानसिक स्वास्थ्य',
  nutrition: 'पोषण',
  fitness: 'फिटनेस',
  wellness: 'कल्याण',
  chronicConditions: 'दीर्घकालिक स्थितियां',
  emergency: 'आपातकाल',
};

export const marathi: TranslationDict = {
  aiCompanion: 'AI सोबती',
  dashboard: 'डॅशबोर्ड',
  healthCheckIn: 'आरोग्य तपासणी',
  myHealth: 'माझे आरोग्य',
  nearbyHealthcare: 'जवळच्या आरोग्य सेवा',
  healthInformation: 'आरोग्य माहिती',
  emergencyHelp: 'आपत्कालीन मदत',
  tapToCall: 'कॉलसाठी नंबर निवडा',
  nationalEmergency: 'राष्ट्रीय आपत्काल',
  allInOneEmergencyHelpline: 'एकत्रित आपत्कालीन हेल्पलाइन',
  ambulance: 'रुग्णवाहिका',
  freeAmbulanceService: 'मोफत रुग्णवाहिका सेवा',
  womenHelpline: 'महिला हेल्पलाइन',
  womenSupport247: '24/7 महिला सहाय्य',
  childHelpline: 'बाल हेल्पलाइन',
  childInDistress: 'संकटात बाळ',
  mentalHealthHelpline: 'मानसिक आरोग्य हेल्पलाइन',
  kiranFreeSupport: 'किरण — मोफत सहाय्य',
  emergencyDisclaimer: 'जीवघेण आपत्काळात, लगेच आपल्या स्थानिक आपत्कालीन नंबरवर कॉल करा.',
  openMenu: 'मेन्यू उघडा',
  privacyProtected: 'गोपनीयता सुरक्षित',
  privacySidebarDesc: 'आपल्या तपासणी सुरक्षितपणे साठवल्या जातात आणि आपल्या संमतीशिवाय कधीही शेअर केल्या जात नाहीत.',
  privacyFooter: 'आपला आरोग्य डेटा खाजगी आणि सुरक्षित आहे. HealthSaathi AI एक सहाय्यक साधन आहे, व्यावसायिक वैद्यकीय सल्ल्याचा पर्याय नाही.',
  yourCompanionInCare: 'आपल्या काळजीतील सोबती',
  heroTitle: 'आपले आरोग्य, आमचे प्राधान्य',
  heroDesc: 'आपले आरोग्य ट्रॅक करा, AI-चालित अंतर्दृष्टी मिळवा, आणि जवळच्या आरोग्य सेवा शोधा — सर्व एकाच काळजी सोबतीत.',
  startHealthCheckIn: 'आरोग्य तपासणी सुरू करा',
  findNearbyCare: 'जवळची सेवा शोधा',
  totalCheckIns: 'एकूण तपासणी',
  avgSeverity: 'सरासरी तीव्रता',
  avgSleepHrs: 'सरासरी झोप (तास)',
  healthTrend: 'आरोग्य ट्रेंड',
  active: 'सक्रिय',
  new: 'नवीन',
  myHealthDesc: 'आपली तपासणी इतिहास आणि आरोग्य ट्रेंड पहा.',
  nearbyDesc: 'आपल्या जवळ रुग्णालये, क्लिनिक, आणि आपत्कालीन सेवा शोधा.',
  healthInfoDesc: 'विश्वासार्ह आरोग्य लेख आणि आरोग्य टिप्स वाचा.',
  recentCheckIns: 'अलीकडील तपासणी',
  viewAll: 'सर्व पहा',
  noCheckinsYet: 'अद्याप कोणतीही तपासणी नाही. आज आपली पहिली आरोग्य तपासणी सुरू करा.',
  startCheckIn: 'तपासणी सुरू करा',
  noSymptomsReported: 'कोणतीही लक्षणे सांगितली नाहीत',
  aiHealthInsight: 'AI आरोग्य अंतर्दृष्टी',
  checkInSubtitle: 'आज तुम्ही कसे वाटत आहात हे सांगण्यासाठी काही क्षण घ्या.',
  step: 'पायरी',
  symptomsTitle: 'तुम्हाला कोणती लक्षणे आहेत?',
  noSymptomsSelected: 'कोणतीही लक्षणे निवडली नाहीत — तेही ठीक आहे!',
  severityTitle: 'तुमची लक्षणे किती तीव्र आहेत?',
  mild: 'सौम्य',
  severe: 'तीव्र',
  moodTitle: 'आज तुमचा मूड कसा आहे?',
  sleepTitle: 'गेल्या रात्री तुम्ही किती तास झोपलात?',
  hours: 'तास',
  sleepPlaceholder: 'उदा. 7.5',
  notesTitle: 'अतिरिक्त नोट्स (पर्यायी)',
  notesPlaceholder: 'आणखी काही नोट करायचे असल्यास...',
  submitCheckIn: 'तपासणी सबमिट करा',
  saving: 'साठवत आहे...',
  cancel: 'रद्द करा',
  checkInComplete: 'तपासणी पूर्ण!',
  savedSuccess: 'तुमची आरोग्य तपासणी यशस्वीरित्या साठवली आहे.',
  viewMyHealth: 'माझे आरोग्य पहा',
  newCheckIn: 'नवीन तपासणी',
  myHealthSubtitle: 'तुमची तपासणी इतिहास आणि आरोग्य सारांश एका नजरेत.',
  avgSleep: 'सरासरी झोप',
  goodMoodDays: 'चांगल्या मूडचे दिवस',
  checkInHistory: 'तपासणी इतिहास',
  noCheckinsHistory: 'अद्याप कोणतीही तपासणी नाही. तुमचा आरोग्य इतिहास येथे दिसेल.',
  severity: 'तीव्रता',
  mood: 'मूड',
  sleep: 'झोप',
  symptoms: 'लक्षणे',
  notRecorded: 'नोंदले नाही',
  noneReported: 'काहीही सांगितले नाही',
  noSymptoms: 'कोणतीही लक्षणे नाहीत',
  delete: 'हटवा',
  nearbySubtitle: 'आपल्या जवळ रुग्णालये, क्लिनिक, आणि आपत्कालीन सेवा शोधा.',
  searchPlaceholder: 'नाव, प्रकार, किंवा सेवानुसार शोधा...',
  open247: '24/7 खुले',
  facilityFound: 'सुविधा सापडली',
  facilitiesFound: 'सुविधा सापडल्या',
  noFacilitiesMatch: 'तुमच्या शोधाशी कोणतीही सुविधा जुळत नाही. दुसरा शब्द वापरून पहा.',
  call: 'कॉल',
  directions: 'दिशा',
  daytime: 'दिवसाचा वेळ',
  healthInfoSubtitle: 'विश्वासार्ह, सोपे लेख जे तुम्हाला माहितीपूर्ण आणि निरोगी ठेवतील.',
  searchArticles: 'आरोग्य लेख शोधा...',
  all: 'सर्व',
  noArticlesMatch: 'तुमच्या शोधाशी कोणताही लेख जुळत नाही.',
  healthInfoDisclaimer: 'ही माहिती केवळ शैक्षणिक उद्देशांसाठी आहे आणि व्यावसायिक वैद्यकीय सल्ल्याचा पर्याय नाही. वैद्यकीय चिंतांसाठी नेहमी एका पात्र डॉक्टरांचा सल्ला घ्या.',
  explore: 'पहा',
  fever: 'ताप',
  cough: 'खोकला',
  headache: 'डोकेदुखी',
  fatigue: 'थकवा',
  soreThroat: 'घशात खवखव',
  bodyAche: 'शरीर दुखणे',
  nausea: 'उलटी येणे',
  dizziness: 'चक्कर येणे',
  chestPain: 'छातीत दुखणे',
  shortnessOfBreath: 'श्वास घोटणे',
  stomachPain: 'पोटदुखी',
  skinRash: 'त्वचेवर तीर येणे',
  great: 'छान',
  good: 'बरे',
  neutral: 'सामान्य',
  low: 'उदास',
  stressed: 'तणावग्रस्त',
  multiSpecialty: 'बहु-विशेषी',
  generalHospital: 'सामान्य रुग्णालय',
  specialityClinic: 'विशेषी क्लिनिक',
  pediatricHospital: 'बाल रुग्णालय',
  communityClinic: 'सामुदायिक क्लिनिक',
  cardiacSpeciality: 'हृदय विशेषी',
  cardiology: 'हृदयरोग',
  pediatrics: 'बालरोग',
  radiology: 'रेडियोलॉजी',
  generalMedicine: 'सामान्य औषध',
  orthopedics: 'अस्थिरोग',
  pharmacy: 'फार्मसी',
  neurology: 'तंत्रिकाशास्त्र',
  dermatology: 'त्वचारोग',
  diagnostics: 'निदान',
  neonatalCare: 'नवजात देखभाल',
  vaccination: 'लसीकरण',
  freeCheckups: 'मोफत तपासणी',
  cardiacSurgery: 'हृदय शस्त्रक्रिया',
  icu: 'ICU',
  generalHealth: 'सामान्य आरोग्य',
  cardiovascular: 'हृदयरोग',
  mentalHealth: 'मानसिक आरोग्य',
  nutrition: 'पोषण',
  fitness: 'तंदुरुस्ती',
  wellness: 'कल्याण',
  chronicConditions: 'दीर्घकालिक स्थिती',
  emergency: 'आपत्काल',
};

export const TRANSLATIONS: Record<Language, TranslationDict> = { en: english, hi: hindi, mr: marathi };
