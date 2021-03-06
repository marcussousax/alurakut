// Everything inside API folder, nextJS will convert it to a BFF file that runs only on server side.
// @ts-ignore
import { SiteClient } from 'datocms-client'

const TOKEN = process.env.DATOCMS_TOKEN
const client = new SiteClient(TOKEN)

export default async function createCommunity(request: { method: string; body: any }, response: { json: (arg0: { record: any }) => void; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string }): void; new(): any } } }): Promise<void> {

    if (request.method === 'POST') {
        // TODO: We need to validate this before
        const record = await client.item.create({
            itemType: '977062', // model ID
            ...request.body
        })

        response.json({
            record
        })

        return
    }

    response.status(404).json({
        message: 'Only POST for now.'
    })
}
