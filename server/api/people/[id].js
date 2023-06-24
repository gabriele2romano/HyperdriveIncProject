import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const client = serverSupabaseClient(event)
    const { data, error }= await client.from('person').select('*').eq('id', id).single();
    
    data.picture = await client.storage
    .from('images')
    .getPublicUrl('people/'+data.picture).data.publicUrl

    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true )console.log(data)
    return data
})