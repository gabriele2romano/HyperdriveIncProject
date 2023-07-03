import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const client = serverSupabaseClient(event)

    //get the area's data. It includes previous and next areas' names and icons
    const { data, error }= await client.from('area_data').select('*').eq('id', id).single();

    //get banner picture for the area
    data.image = await client.storage.from('images').getPublicUrl('areas/' + data.banner)

    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true ) console.log(data)
    return data
})