import { createClient } from '@supabase/supabase-js'

if (!process.env.SUPABASE_KEY) {
    throw new Error('Key for the database is not defined in environment variables.')
}

export const supabase = createClient(
    "https://yhxkqqxlkyrcuupldmha.supabase.co",
    process.env.SUPABASE_KEY
)
