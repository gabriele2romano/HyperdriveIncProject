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
import 'http-graceful-shutdown';

const _id_ = defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const client = serverSupabaseClient(event);
  const { data, error } = await client.from("project").select("title,problem,solution,description,country,foundation_year,investment_date,person(name,surname,role,picture),company(name,description,icon),area(name,icon)").eq("id", id).single();
  data.image = await client.storage.from("images").getPublicUrl("projects/bg-projects.jpg").data.publicUrl;
  if (error) {
    throw createError({ statusCode: 400, statusMessage: error.message });
  }
  if (process.env.SUPABASE_LOG == true)
    console.log(data);
  return data;
});

export { _id_ as default };
//# sourceMappingURL=_id_.mjs.map
