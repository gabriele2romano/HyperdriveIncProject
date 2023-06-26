import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const project_id = event.context.params.id
    const client = serverSupabaseClient(event)
    const { data, error }= await client
    .from('project').select('area(id,name,icon,previous_accomplishments)').eq('id', project_id).single();
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG) console.log("data",data)
    return data
})