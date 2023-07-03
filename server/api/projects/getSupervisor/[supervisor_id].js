import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supervisor_id = event.context.params.supervisor_id
    const client = serverSupabaseClient(event)

    //get project supervisor's data
    const { data, error }= await client
    .from('person').select('*').eq('id', supervisor_id).single();
    
    //get supervisor's picture's url
    data.picture = client.storage.from('images').getPublicUrl('people/'+data.picture).data.publicUrl

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG) console.log("data",data)
    return data
})