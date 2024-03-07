
import ClientPage from "./clientPage";


export async function generateStaticParams() {
    let resource = [{id: '1'}]
    for (let i = 1; i < 20; ++i) {
        resource.push({id: i.toString()})
    }
    return resource.map((resource: { id: string; }) => ({
        id: resource.id,
    }))
}

export default function Page({params}) {
    return (
        <ClientPage params={params} />
    );
}