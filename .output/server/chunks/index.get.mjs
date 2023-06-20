import { getCookie, defineEventHandler, createError } from 'h3';
import { createClient } from '@supabase/supabase-js';
import { defu } from 'defu';
import { u as useRuntimeConfig } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';

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

const index_get = defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { data, error } = await client.from("person").select("*");
  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }
  if (process.env.SUPABASE_LOG == true)
    console.log(data);
  return data;
});

export { index_get as default };
//# sourceMappingURL=index.get.mjs.map
