import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('project').select('*').eq('relevant', true)

    data.forEach ((project,index) => {
        var images_url = []
        /*project.images.forEach((image) => {
            images_url.push(
                client.storage
                .from('images')
                .getPublicUrl('projects/'+image).data.publicUrl
            )
        }) */
        for(var i = 0; i < 3; i++) {
            images_url.push(
                client.storage
                .from('images')
                .getPublicUrl('projects/'+project.images[i]).data.publicUrl
            )
        }
        project.images = images_url
    })
    
    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true )console.log(data)
    return data
})