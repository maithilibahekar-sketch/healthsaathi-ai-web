/*
# HealthSaathi AI - Core Tables

## Overview
Creates the database tables for the HealthSaathi AI health companion app.
This is a single-tenant app (no sign-in), so all policies allow anon + authenticated access.

## New Tables

### health_checkins
Stores user's health check-in submissions including symptoms, mood, and notes.
- id (uuid, PK)
- symptoms (text[], selected symptom tags)
- symptom_severity (integer 1-5, user-rated severity)
- mood (text, current mood)
- sleep_hours (numeric, hours slept last night)
- notes (text, free-form notes)
- ai_advice (text, AI-generated advice based on check-in)
- created_at (timestamptz, when submitted)

### health_info
Static health education articles stored in the database for the Health Information page.
- id (uuid, PK)
- title (text, article title)
- category (text, e.g. "Nutrition", "Mental Health", "Fitness")
- summary (text, short summary)
- content (text, full article content)
- icon_name (text, lucide icon name for display)
- created_at (timestamptz)

## Security
- RLS enabled on both tables.
- All CRUD open to anon + authenticated (intentionally shared, single-tenant app).
*/

CREATE TABLE IF NOT EXISTS health_checkins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  symptoms text[] NOT NULL DEFAULT '{}',
  symptom_severity integer DEFAULT 1,
  mood text DEFAULT 'neutral',
  sleep_hours numeric DEFAULT NULL,
  notes text DEFAULT '',
  ai_advice text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE health_checkins ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_checkins" ON health_checkins;
CREATE POLICY "anon_select_checkins" ON health_checkins FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_checkins" ON health_checkins;
CREATE POLICY "anon_insert_checkins" ON health_checkins FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_checkins" ON health_checkins;
CREATE POLICY "anon_update_checkins" ON health_checkins FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_checkins" ON health_checkins;
CREATE POLICY "anon_delete_checkins" ON health_checkins FOR DELETE
  TO anon, authenticated USING (true);

CREATE TABLE IF NOT EXISTS health_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  summary text NOT NULL,
  content text NOT NULL,
  icon_name text NOT NULL DEFAULT 'HeartPulse',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE health_info ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_health_info" ON health_info;
CREATE POLICY "anon_select_health_info" ON health_info FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_health_info" ON health_info;
CREATE POLICY "anon_insert_health_info" ON health_info FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_health_info" ON health_info;
CREATE POLICY "anon_update_health_info" ON health_info FOR UPDATE
  TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_health_info" ON health_info;
CREATE POLICY "anon_delete_health_info" ON health_info FOR DELETE
  TO anon, authenticated USING (true);

INSERT INTO health_info (title, category, summary, content, icon_name) VALUES
('Understanding Common Cold & Flu', 'General Health', 'Learn to identify symptoms and manage seasonal illnesses effectively.', 'The common cold and flu are viral infections of the upper respiratory tract. Symptoms include runny nose, sore throat, cough, and mild fever. Rest, hydration, and over-the-counter medications can help manage symptoms. Most people recover within 7-10 days. If symptoms persist or worsen, consult a healthcare provider.', 'Thermometer'),
('Heart Health Basics', 'Cardiovascular', 'Tips for maintaining a healthy heart and recognizing warning signs.', 'Heart disease is the leading cause of death globally. Key prevention strategies include regular exercise (150 min/week), a balanced diet low in saturated fats, avoiding smoking, and managing stress. Watch for warning signs like chest pain, shortness of breath, and irregular heartbeat. Regular check-ups are essential for early detection.', 'HeartPulse'),
('Mental Wellness & Stress Management', 'Mental Health', 'Practical strategies for managing stress and maintaining mental well-being.', 'Mental health is just as important as physical health. Practice mindfulness, maintain social connections, get adequate sleep (7-9 hours), and exercise regularly. If you experience persistent sadness, anxiety, or loss of interest in activities for more than two weeks, consider speaking with a mental health professional. You are not alone.', 'Brain'),
('Nutrition Essentials', 'Nutrition', 'A balanced diet guide covering key nutrients and healthy eating habits.', 'A balanced diet includes fruits, vegetables, whole grains, lean proteins, and healthy fats. Aim for 5 servings of fruits and vegetables daily. Limit processed foods, added sugars, and excessive sodium. Stay hydrated with 6-8 glasses of water per day. Portion control and mindful eating are key to maintaining a healthy weight.', 'Apple'),
('Staying Active: Exercise for All Ages', 'Fitness', 'Find the right exercise routine for your age and fitness level.', 'Regular physical activity reduces the risk of chronic diseases and improves mental health. Start with 30 minutes of moderate activity 5 days a week. Walking, swimming, cycling, and yoga are excellent low-impact options. Always warm up before exercising and cool down afterward. Listen to your body and gradually increase intensity.', 'Activity'),
('Sleep Hygiene Fundamentals', 'Wellness', 'Improve your sleep quality with these evidence-based tips.', 'Quality sleep is essential for physical and mental health. Maintain a consistent sleep schedule, create a dark and cool sleeping environment, avoid screens 1 hour before bed, and limit caffeine in the afternoon. Adults need 7-9 hours of sleep per night. Chronic sleep deprivation is linked to obesity, diabetes, and heart disease.', 'Moon'),
('Diabetes Awareness', 'Chronic Conditions', 'Understand diabetes types, symptoms, and management strategies.', 'Diabetes affects how your body processes blood sugar. Type 1 requires insulin therapy, while Type 2 can often be managed with diet, exercise, and medication. Common symptoms include increased thirst, frequent urination, fatigue, and blurred vision. Regular blood sugar monitoring and HbA1c tests are crucial. A healthy lifestyle can prevent or delay Type 2 diabetes.', 'Droplet'),
('Child Health & Immunization', 'Pediatrics', 'Essential information on child health, growth milestones, and vaccines.', 'Regular check-ups and timely immunizations are vital for child health. Follow the recommended vaccination schedule from birth through adolescence. Monitor growth milestones, ensure proper nutrition, and encourage physical activity. Common childhood illnesses include ear infections, chickenpox, and asthma. Always consult a pediatrician for concerns.', 'Baby')
ON CONFLICT DO NOTHING;