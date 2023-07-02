import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const supervisor_id = event.context.params.supervisor_id
    const client = serverSupabaseClient(event)

    const { data, error }= await client.from('project').select('id,title,problem,images').eq('supervisor_id',supervisor_id)

    data.forEach((project, _) => {
        project.images = client.storage.from('images').getPublicUrl('projects/project'+project.id+'/'+project.images[0]).data.publicUrl
    })

    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true )console.log(data)
    return data
})