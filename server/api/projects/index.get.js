import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    //fetch all projects' data, including related areas
    const { data, error }= await client.from('project').select('id,title,problem,images,alt,area(id,name))').order('id', { ascending: true })

    //fetch the first image of each project, to be used on the project card
    data.forEach((project,index) => {
        var images_url = [client.storage.from('images').getPublicUrl('projects/project'+project.id+'/'+project.images[0]).data.publicUrl]
        project.images = images_url
    })
    
    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true )console.log(data)
    return data
})