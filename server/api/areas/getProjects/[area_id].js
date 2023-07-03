import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)
    const area_id = event.context.params.area_id

    //get all projects related to the area
    const { data, error } = await client.from('area').select('project(id,title,problem,images)').eq('id', area_id,{inner: true})

    var projects = data[0].project

    //get the card image for each project
    projects.forEach((project, _) => {
        project.images = client.storage.from('images').getPublicUrl('projects/project' + project.id +'/'+ project.images[0]).data.publicUrl
    })

    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG)console.log(data)
    return projects
})