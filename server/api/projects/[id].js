import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const client = serverSupabaseClient(event)
    const { data, error }= await client
    //get project's data
    .from('project').select('title,problem,solution,description,country,foundation_year,investment_date,supervisor_id,company_id,area(name,icon),images').eq('id', id).single();
    
    //get images
    var images_url = []
    data.images.forEach ((image) => {
        images_url
        .push(client.storage.from('images').getPublicUrl('projects/project'+id+'/'+image).data.publicUrl)
    }) 
    data.images = images_url
    
    //get the number of projects
    const { _, count } = await client
    .from('project')
    .select('*', { count: 'exact', head: true })
    
    const intId = parseInt(id)
    //compute the ids of the previous and next members
    data.prevProjId = ((intId==1) ? count : intId-1).toString();
    data.nextProjId = ((intId==parseInt(count)) ? 1 : intId+1).toString();
    
    
    //console.log("data", data)
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG) console.log(data)
    return data
})