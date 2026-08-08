import { createClient } from '@supabase/supabase-js';

const DEFAULT_URL = 'https://tzyxrssgksbaocbytgka.supabase.co';
const DEFAULT_KEY = 'sb_publishable_1Wzig8LAjhQiCERaTaffeg_9SGz8w7G';

function getValidSupabaseUrl(rawUrl?: string): string {
  if (!rawUrl) return DEFAULT_URL;
  let cleaned = rawUrl.trim().replace(/^["']|["']$/g, '');
  if (!cleaned) return DEFAULT_URL;
  
  if (!cleaned.startsWith('http://') && !cleaned.startsWith('https://')) {
    cleaned = 'https://' + cleaned;
  }
  
  try {
    const parsed = new URL(cleaned);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      return parsed.toString().replace(/\/$/, '');
    }
  } catch {
    // If parsing fails, return default fallback
  }
  return DEFAULT_URL;
}

function getValidSupabaseKey(rawKey?: string): string {
  if (!rawKey) return DEFAULT_KEY;
  const cleaned = rawKey.trim().replace(/^["']|["']$/g, '');
  return cleaned || DEFAULT_KEY;
}

const SUPABASE_URL = getValidSupabaseUrl(import.meta.env.VITE_SUPABASE_URL);
const SUPABASE_ANON_KEY = getValidSupabaseKey(import.meta.env.VITE_SUPABASE_ANON_KEY);

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

