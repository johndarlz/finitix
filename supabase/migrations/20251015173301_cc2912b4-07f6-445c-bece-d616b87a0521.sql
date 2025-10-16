-- Create table for project submissions (Start Your Project form)
CREATE TABLE public.project_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_name TEXT NOT NULL,
  project_description TEXT NOT NULL,
  key_features TEXT NOT NULL,
  project_deadline DATE,
  team_members TEXT,
  contact_details TEXT NOT NULL,
  additional_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for consultation requests (Schedule a Consultation form)
CREATE TABLE public.consultation_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT,
  consultation_type TEXT NOT NULL,
  project_description TEXT NOT NULL,
  main_goal TEXT NOT NULL,
  expected_outcome TEXT NOT NULL,
  preferred_date DATE,
  preferred_time TEXT,
  time_zone TEXT,
  meeting_mode TEXT NOT NULL,
  how_heard TEXT,
  questions_notes TEXT,
  consent_agreed BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for innovation hub applications (Join Innovation Hub form)
CREATE TABLE public.innovation_hub_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company_name TEXT,
  role_position TEXT,
  project_idea TEXT NOT NULL,
  problem_solved TEXT,
  support_needed TEXT NOT NULL,
  project_stage TEXT,
  consultation_mode TEXT,
  preferred_date DATE,
  preferred_time TEXT,
  how_heard TEXT,
  additional_notes TEXT,
  consent_agreed BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for contact messages (Send Us a Message form)
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.project_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultation_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.innovation_hub_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert (public forms)
CREATE POLICY "Anyone can submit projects" 
ON public.project_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit consultation requests" 
ON public.consultation_requests 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit innovation hub applications" 
ON public.innovation_hub_applications 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- Create policies to allow reading all submissions (for admin page)
CREATE POLICY "Anyone can view project submissions" 
ON public.project_submissions 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view consultation requests" 
ON public.consultation_requests 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view innovation hub applications" 
ON public.innovation_hub_applications 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can view contact messages" 
ON public.contact_messages 
FOR SELECT 
USING (true);