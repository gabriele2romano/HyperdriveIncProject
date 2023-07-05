export default defineEventHandler(async (event) => {
    const form = await readBody(event)
    const company = form.company
    const project = form.project

    return (
        company.sender_name !== '' &&
        company.company_name !== '' &&
        company.email !== '' &&
        project.title !== '' &&
        project.description !== '' &&
        (project.selected_areas.length > 0 && project.selected_areas.length <= 3) &&
        project.budget !== ''
    ) ? 'valid' : 'invalid'
})