// ============================================
// Configuration Supabase
// Remplace SUPABASE_URL et SUPABASE_ANON_KEY par tes valeurs
// (Dashboard Supabase > Project Settings > API)
// ============================================
const SUPABASE_URL = "https://nchzwhfaydfdpqtbifsg.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jaHp3aGZheWRmZHBxdGJpZnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMDM0NzEsImV4cCI6MjEwMjU3OTQ3MX0.ZewoHhUq5J03AjBEERx70nY2TY1oIDRXiMoL4_Cdy5c";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
