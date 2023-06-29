import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const company_id = event.context.params.company_id
    const client = serverSupabaseClient(event)
    const { data, error }= await client
    .from('company').select('*').eq('id', company_id).single();
    
    //get icon url
    data.icon = client.storage.from('images').getPublicUrl('companies/'+data.icon).data.publicUrl

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG) console.log("data",data)
    return data
})