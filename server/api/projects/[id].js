import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const client = serverSupabaseClient(event)
    const { data, error }= await client
    .from('project').select('title,problem,solution,description,country,foundation_year,investment_date,person(name,surname,role,picture),company(name,description,icon),area(name,icon)').eq('id', id).single();
    
    data.image = await client.storage
    .from('images')
    .getPublicUrl('projects/bg-projects.jpg').data.publicUrl
    //console.log("data", data)
    if(error) {
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true ) console.log(data)
    return data
})