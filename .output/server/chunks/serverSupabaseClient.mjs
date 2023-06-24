import { createClient } from '@supabase/supabase-js';
import { getCookie } from 'h3';
import { defu } from 'defu';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';

const serverSupabaseClient = (event) => {
  const { supabase: { url, key, client: clientOptions, cookies: cookieOptions } } = useRuntimeConfig().public;
  if (!event.context._supabaseClient) {
    const token = getCookie(event, `${cookieOptions.name}-access-token`);
    const auth = {
      detectSessionInUrl: false,
      persistSession: false,
      autoRefreshToken: false
    };
    const options = token ? defu({ auth, global: { headers: { Authorization: `Bearer ${token}` } } }, clientOptions) : defu({ auth }, clientOptions);
    const supabaseClient = createClient(url, key, options);
    event.context._supabaseClient = supabaseClient;
    event.context._token = token;
  }
  return event.context._supabaseClient;
};

export { serverSupabaseClient as s };
//# sourceMappingURL=serverSupabaseClient.mjs.map
