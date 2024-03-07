
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
// Définition de l'interface pour params
interface Params {
  id: string;
}

// Application du type à la fonction Page
export default function Page({ params }: { params: Params }) {
    return <ClientPage params={params} />;
}