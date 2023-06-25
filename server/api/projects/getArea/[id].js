import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const project_id = event.context.params.id
    const client = serverSupabaseClient(event)
    const { data, error }= await client
    .from('project_area').select('area(id,name,description,icon,previous_accomplishments)').eq('project_id', project_id);
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true ) console.log(data)
    return data
})