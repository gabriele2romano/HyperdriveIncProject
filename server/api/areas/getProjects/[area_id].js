import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)
    const area_id = event.context.params.area_id
    const { data, error }= await client.from('area').select('project(id,title,problem,images)').eq('id', area_id,{inner: true})
    
   /*  data.forEach ((project,index) => {
        var images_url = [client.storage.from('images').getPublicUrl('projects/'+project.images[0]).data.publicUrl]
        project.images = images_url
    }) */
    
    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG)console.log(data)
    return data
})