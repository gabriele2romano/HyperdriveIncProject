import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = serverSupabaseClient(event)

    //fetch all companies data
    const { data, error }= await client.from('company').select('id,name,icon').order('id', { ascending: true })

    //for each company, get the icon
    data.forEach ((c,index) => {
        c.icon = client.storage.from('images').getPublicUrl('companies/'+c.icon).data.publicUrl
    })
    
    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG) console.log(data)
    return data
})