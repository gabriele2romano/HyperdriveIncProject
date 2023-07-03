import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    //fetch all people data
    const { data, error }= await client.from('person').select('id, name, surname, role, picture').order('id', { ascending: true })

    //for each person, get the picture
    data.forEach((person, _) => {
        person.image = client.storage.from('images').getPublicUrl('people/' + person.picture).data.publicUrl
    })
    
    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true )console.log(data)
    return data
})