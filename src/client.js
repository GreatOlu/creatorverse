import { createClient } from '@supabase/supabase-js';

const URL = 'https://piippewwmdxkwikpmlhp.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpaXBwZXd3bWR4a3dpa3BtbGhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyODQ4MjQsImV4cCI6MjAzOTg2MDgyNH0.dL4uEGNVYN-48KHKG1ve7uKiDXVuWjkYuOC3toMRTKM';

export const supabase = createClient(URL, API_KEY);