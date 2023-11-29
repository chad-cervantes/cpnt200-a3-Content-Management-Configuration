import { createClient } from '@supabase/supabase-js';
import { SECRET_SUPABASE_URL,SECRET_SUPABASE_API } from '$env/static/private';
export const supabase = createClient(SECRET_SUPABASE_URL,SECRET_SUPABASE_API)