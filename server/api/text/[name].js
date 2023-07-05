import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const name = event.context.params.name
    const client = serverSupabaseClient(event)

    //fetch textual data stored as a JSON object
    const { data, error } = await client.from('text_data').select('data').eq('id', name).single();

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    
    return data.data
})