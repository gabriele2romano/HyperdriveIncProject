import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const id = event.context.params.id
    const client = serverSupabaseClient(event)

    //get person's data
    const { data, error }= await client.from('person').select('*').eq('id', id).single();
    
    //add picture url
    data.picture = await client.storage
    .from('images')
    .getPublicUrl('people/'+data.picture).data.publicUrl

    //get the number of people
    const { _, count } = await client
    .from('person')
    .select('*', { count: 'exact', head: true })

    const intId = parseInt(id)
    //compute the ids of the previous and next members
    data.prevMemberId = ((intId==1) ? count : intId-1).toString();
    data.nextMemberId = ((intId==parseInt(count)) ? 1 : intId+1).toString();

    if(error) {
        console.log(error.message)
        throw createError({statusCode: 400, statusMessage: error.message})
    }
    if(process.env.SUPABASE_LOG == true )console.log(data)
    return data
})