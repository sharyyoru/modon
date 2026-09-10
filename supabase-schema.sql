-- Modon Avenew Database Schema
-- Run this in your Supabase SQL Editor (using bydre project)

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create modon_leads table
CREATE TABLE IF NOT EXISTS modon_leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  country TEXT NOT NULL DEFAULT 'Not specified',
  preferred_unit TEXT,
  purchase_timeline TEXT,
  lead_source TEXT,
  project_source TEXT DEFAULT 'modon',
  ip_address TEXT,
  user_agent TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_modon_leads_email ON modon_leads(email);
CREATE INDEX IF NOT EXISTS idx_modon_leads_created_at ON modon_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_modon_leads_project_source ON modon_leads(project_source);

-- Enable Row Level Security
ALTER TABLE modon_leads ENABLE ROW LEVEL SECURITY;

-- Create policies for modon_leads table
-- Allow insert from anon users (for form submissions)
CREATE POLICY "Allow insert for all" ON modon_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow select only for authenticated users (admin dashboard)
CREATE POLICY "Allow select for authenticated" ON modon_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a view for lead analytics
CREATE OR REPLACE VIEW modon_lead_analytics AS
SELECT
  DATE(created_at) as date,
  COUNT(*) as total_leads,
  COUNT(DISTINCT country) as unique_countries,
  COUNT(CASE WHEN preferred_unit IS NOT NULL THEN 1 END) as qualified_leads
FROM modon_leads
GROUP BY DATE(created_at)
ORDER BY date DESC;
