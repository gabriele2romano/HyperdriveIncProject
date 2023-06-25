import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const image_name = event.context.params.image_name
    const client = serverSupabaseClient(event)

    //fetch url
    const {data,error}  = client.storage
    .from('images')
    .getPublicUrl('/'+image_name)

    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG) console.log("data",data)
    return data
})