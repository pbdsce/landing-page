import {createClient} from '@supabase/supabase-js';

const supabaseUrl = "https://zrqthmvuigrisuvfwzrl.supabase.co";
const supabaseAnon = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpycXRobXZ1aWdyaXN1dmZ3enJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3NzAzNzksImV4cCI6MjAxNjM0NjM3OX0.3N1wnp2gURw4_Jf95lLz2zIuN1N8jvA-VU5_tC9FFqM";

export const supabase = createClient(supabaseUrl,supabaseAnon);