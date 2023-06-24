import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const client = serverSupabaseClient(event)
    const { data, error }= await client
    .from('area').select('*').eq('id', id).single();

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true ) console.log(data)
    return data
})