import { defineEventHandler, createError } from 'h3';
import { s as serverSupabaseClient } from './serverSupabaseClient.mjs';
import '@supabase/supabase-js';
import 'defu';
import './nitro/node-server.mjs';
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

const project_get = defineEventHandler(async (event) => {
  const client = serverSupabaseClient(event);
  const { data, error } = await client.from("project").select("title, problem, solution, description, company(name,logo,description)");
  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }
  if (process.env.SUPABASE_LOG == true)
    console.log(data);
  return data;
});

export { project_get as default };
//# sourceMappingURL=project.get.mjs.map
