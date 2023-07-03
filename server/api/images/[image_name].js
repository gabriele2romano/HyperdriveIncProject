import { serverSupabaseClient } from '#supabase/server'

//this endpoint is sometimes used to fetch a single image from the DB storage

export default defineEventHandler(async (event) => {
    const image_name = event.context.params.image_name
    const client = serverSupabaseClient(event)

    //fetch image url
    const {data,error} = client.storage.from('images').getPublicUrl('/'+image_name)

    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(!process.env.SUPABASE_LOG) console.log("data",data)
    return data
})