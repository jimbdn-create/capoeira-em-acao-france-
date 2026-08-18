// ============================================
// Configuration Supabase
// Remplace SUPABASE_URL et SUPABASE_ANON_KEY par tes valeurs
// (Dashboard Supabase > Project Settings > API)
// ============================================
const SUPABASE_URL = "https://nchzwhfaydfdpqtbifsg.supabase.co";
const SUPABASE_ANON_KEY = "REMPLACER_PAR_LA_CLE_ANON_PUBLIQUE";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
