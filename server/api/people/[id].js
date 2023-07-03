import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const client = serverSupabaseClient(event)

    //get person's data. It includes next and previous people's full names
    const { data, error } = await client.from('person_data').select('*').eq('id', id).single()

    //get the picture url
    data.picture = await client.storage.from('images').getPublicUrl('people/'+data.picture).data.publicUrl

    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true )console.log(data)
    return data
})