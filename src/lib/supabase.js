import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yjxgihufqwpuznbocfrx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqeGdpaHVmcXdwdXpuYm9jZnJ4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjgzMjc3NSwiZXhwIjoyMDMyNDA4Nzc1fQ.y6MKN_qWo3H0xUIWwK6HhmT-MJq1aIdtRYJZU9TWDIY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
