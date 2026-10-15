export interface HealthCheckin {
  id: string;
  symptoms: string[];
  symptom_severity: number;
  mood: string;
  sleep_hours: number | null;
  notes: string;
  ai_advice: string;
  created_at: string;
}

export interface HealthInfo {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  icon_name: string;
  created_at: string;
}

export interface NewCheckin {
  symptoms: string[];
  symptom_severity: number;
  mood: string;
  sleep_hours: number | null;
  notes: string;
  ai_advice: string;
}
