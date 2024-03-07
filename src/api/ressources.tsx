import { getContent } from "./fetch";

export async function getRessources(filter:string) {
    const data = await getContent(`resources?filter=${filter}`)
    return data
}

export async function getRessourcesById(id:string) {
    const data = getContent(`resources/${id}`)
    return data
}