-- Remove existing tables
DROP TABLE IF EXISTS public.contact_submissions CASCADE;
DROP TABLE IF EXISTS public.work_with_us_submissions CASCADE;

-- Create new separate tables for each form type
CREATE TABLE public.contact_messages (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.product_interests (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    product_name TEXT NOT NULL,
    message TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.idea_submissions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    idea_title TEXT NOT NULL,
    problem_statement TEXT NOT NULL,
    solution_description TEXT NOT NULL,
    target_audience TEXT,
    additional_info TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.team_applications (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    position TEXT NOT NULL,
    experience TEXT NOT NULL,
    portfolio_url TEXT,
    motivation TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create products table for admin management
CREATE TABLE public.products (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    tagline TEXT NOT NULL,
    description TEXT NOT NULL,
    icon_url TEXT,
    features TEXT[] NOT NULL DEFAULT '{}',
    impact TEXT NOT NULL,
    color TEXT NOT NULL DEFAULT 'text-primary',
    bg_color TEXT NOT NULL DEFAULT 'bg-primary/5',
    is_active BOOLEAN NOT NULL DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create team members table for admin management
CREATE TABLE public.team_members (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    position TEXT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT,
    is_active BOOLEAN NOT NULL DEFAULT true,
    display_order INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create admin profiles table
CREATE TABLE public.admin_profiles (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'admin',
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_interests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.idea_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_profiles ENABLE ROW LEVEL SECURITY;

-- Public form submission policies
CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_messages FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit product interests" 
ON public.product_interests FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit ideas" 
ON public.idea_submissions FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit team applications" 
ON public.team_applications FOR INSERT 
WITH CHECK (true);

-- Public read policies for products and team
CREATE POLICY "Anyone can view active products" 
ON public.products FOR SELECT 
USING (is_active = true);

CREATE POLICY "Anyone can view active team members" 
ON public.team_members FOR SELECT 
USING (is_active = true);

-- Admin policies for form submissions (view only)
CREATE POLICY "Admins can view contact messages" 
ON public.contact_messages FOR SELECT 
USING (EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() AND is_active = true
));

CREATE POLICY "Admins can view product interests" 
ON public.product_interests FOR SELECT 
USING (EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() AND is_active = true
));

CREATE POLICY "Admins can view idea submissions" 
ON public.idea_submissions FOR SELECT 
USING (EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() AND is_active = true
));

CREATE POLICY "Admins can view team applications" 
ON public.team_applications FOR SELECT 
USING (EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() AND is_active = true
));

-- Admin CRUD policies for products
CREATE POLICY "Admins can manage products" 
ON public.products FOR ALL 
USING (EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() AND is_active = true
));

-- Admin CRUD policies for team members  
CREATE POLICY "Admins can manage team members" 
ON public.team_members FOR ALL 
USING (EXISTS (
    SELECT 1 FROM public.admin_profiles 
    WHERE user_id = auth.uid() AND is_active = true
));

-- Admin profile policies
CREATE POLICY "Admins can view their own profile" 
ON public.admin_profiles FOR SELECT 
USING (user_id = auth.uid());

CREATE POLICY "Admins can update their own profile" 
ON public.admin_profiles FOR UPDATE 
USING (user_id = auth.uid());

-- Insert default products
INSERT INTO public.products (name, tagline, description, features, impact, color, bg_color, display_order) VALUES
(
    'FINITIXHUB',
    'Learn, Earn, Teach, and Showcase on One Unified Platform',
    'An all-in-one micro-freelancing, learning, and collaboration ecosystem where users can learn new skills, earn money via micro-projects, teach courses, and showcase portfolios to attract global clients.',
    ARRAY[
        'Skill Bartering: Exchange skills without money',
        'Micro-Freelancing: Short projects with instant payouts', 
        'Global Access: Connect worldwide',
        'Portfolio Hub: Professional project showcase'
    ],
    'Breaks down geographical and financial barriers to skill development and earning',
    'text-blue-500',
    'bg-blue-50',
    1
),
(
    'LifeosFinitiix',
    'Clarity, Control, Consistency in a Distracted World',
    'An AI-powered, all-in-one personal operating system that integrates productivity, wellness, financial tracking, lifelong learning, and digital companionship into a single secure ecosystem.',
    ARRAY[
        'Productivity Suite: AI task management & smart reminders',
        'Wellness Tracker: Mental health & habit building',
        'Financial Dashboard: Expense tracking & budgeting',
        'Digital Companion: Private AI assistant'
    ],
    'Complete autonomy over data, routines, and goals with AI efficiency and privacy protection',
    'text-purple-500',
    'bg-purple-50',
    2
),
(
    'SyncBeats',
    'One Beat. Many Devices',
    'Multi-Device Music & Audio Sync App that lets you sync audio playback across multiple smartphones, turning them into one giant speaker system—perfect for hostels, group travel, or parties.',
    ARRAY[
        'Host-Guest System: One phone controls, others join easily',
        'Perfect Sync: Exact time alignment across devices',
        'Offline Mode: Works without internet',
        'Custom Playlists: Host controls group playlist'
    ],
    'No need for expensive speakers—turns any gathering into shared audio experience',
    'text-green-500',
    'bg-green-50',
    3
),
(
    'MediSnap+',
    'Know Your Pills. Take Them Safely',
    'Pill Identifier & Medication Safety Coach that uses AI and image recognition to identify pills instantly and provide real-time dosage guidance, safety checks, and medication reminders.',
    ARRAY[
        'Pill Identification: Snap picture to identify medication',
        'Safety Alerts: Warns about dangerous interactions',
        'Habit Tracker: Medicine reminders on time',
        'Medical History: Tracks prescriptions for accuracy'
    ],
    'Improves medication safety and prevents mistakes, especially for elderly or chronically ill',
    'text-orange-500',
    'bg-orange-50',
    4
);

-- Insert default team members
INSERT INTO public.team_members (name, position, description, display_order) VALUES
(
    'Thejaswi Boppidi',
    'Founder & CEO',
    'Visionary leader driving innovation in technology solutions. Expert in strategic planning and business development with a passion for creating impactful products.',
    1
),
(
    'Chandu Sai',
    'Co-Founder & CTO',
    'Technical architect and innovation strategist. Leads our development teams with expertise in cutting-edge technologies and scalable solutions.',
    2
),
(
    'Rajesh Kumar',
    'Lead Developer',
    'Full-stack development expert specializing in React, Node.js, and cloud technologies. Passionate about creating seamless user experiences.',
    3
);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_products_updated_at
    BEFORE UPDATE ON public.products
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_team_members_updated_at
    BEFORE UPDATE ON public.team_members
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_admin_profiles_updated_at
    BEFORE UPDATE ON public.admin_profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();