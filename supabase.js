
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://acaddsiurylcrygyfyak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjYWRkc2l1cnlsY3J5Z3lmeWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMxMDM5ODQsImV4cCI6MjA2ODY3OTk4NH0.NSXnALYNUqIThw8DU2lKcyeT1U5pykfXdn1MS_zUiWM';
export const supabase = createClient(supabaseUrl, supabaseKey);
