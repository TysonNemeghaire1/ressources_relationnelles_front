import { getContent } from "./fetch";

export async function getRessources(page=1) {
    const data = getContent(`resources?page=${page}`)
    return data
}