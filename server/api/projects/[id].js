import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const client = serverSupabaseClient(event)

    //get project's data
    const { data, error }= await client
    .from('project').select('title,problem,solution,description,country,foundation_year,investment_date,supervisor_id,company_id,area(id,name,icon),images, alt').eq('id', id).single();
    
    //get project images
    var images_url = []
    data.images.forEach ((image) => {
        images_url
        .push(client.storage.from('images').getPublicUrl('projects/project'+id+'/'+image).data.publicUrl)
    }) 
    data.images = images_url
    
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG) console.log(data)
    return data
})