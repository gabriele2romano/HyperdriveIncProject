import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const client = serverSupabaseClient(event)
    const { data, error }= await client
    //get project's data
    .from('project').select('title,problem,solution,description,country,foundation_year,investment_date,person(name,surname,role,picture),company(name,description,icon),area(name,icon)').eq('id', id).single();
    
    //get images
    /* data.image = await client.storage
    .from('images')
    .getPublicUrl('projects/bg-projects.jpg').data.publicUrl */
    data.forEach ((project,index) => {
        var images_url = []
        project.images.forEach((image) => {
            images_url.push(
                client.storage
                .from('images')
                .getPublicUrl('projects/'+image).data.publicUrl
            )
        })
        project.images = images_url
    })

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