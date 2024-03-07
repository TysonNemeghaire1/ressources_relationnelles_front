import { getContent } from "./fetch";

export async function getRessources(page=1) {
    const data = getContent(`resources?page=${page}`)
    return data
}

export async function getRessourcesById(id:string) {
    const data = getContent(`resources/${id}`)
    return data
}