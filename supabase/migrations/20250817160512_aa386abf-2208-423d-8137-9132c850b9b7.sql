-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for work with us form submissions
CREATE TABLE public.work_with_us_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  project_idea TEXT NOT NULL,
  budget_range TEXT,
  timeline TEXT,
  product_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.work_with_us_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (forms can be submitted by anyone)
CREATE POLICY "Anyone can submit contact form" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit work with us form" 
ON public.work_with_us_submissions 
FOR INSERT 
WITH CHECK (true);

-- Admin can view all submissions (will add auth later)
CREATE POLICY "Admin can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (true);

CREATE POLICY "Admin can view work with us submissions" 
ON public.work_with_us_submissions 
FOR SELECT 
USING (true);