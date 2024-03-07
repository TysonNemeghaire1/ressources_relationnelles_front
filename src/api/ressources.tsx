import { getContent } from "./fetch";

export async function getRessources() {
    const data = getContent(`resources`)
    return data
}

export async function getRessourcesById(id:string) {
    const data = getContent(`resources/${id}`)
    return data
}