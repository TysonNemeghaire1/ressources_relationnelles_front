import ActionRessource from "@/components/actionRessource";
import Image from "next/image";

export async function generateStaticParams() {
    //const resource = await fetch('https://.../resource').then((res) => res.json())
    //TODO: faire un vrais appel
    let resource = [{id: '1'}]
    for (let i = 1; i < 20; ++i) {
        resource.push({id: i.toString()})
    }
    return resource.map((resource: { id: string; }) => ({
        id: resource.id,
    }))
}

export default function Page({params}: { params: { id: string } }) {
    return (
        <div style={{backgroundColor: 'white'}} className="h-full px-5 py-5 flex flex-col">
            <div>My Post: {params.id}</div>
            <p className="text-black text-[40px] w-full">
                Nom de la ressource
            </p>
            <div className="flex gap-5 flex-col sm:flex-row">
                <div className="w-full sm:w-4/5 flex flex-col items-center">
                    <Image className="object-cover" width={1000} height={300} src='/corgi.jpeg' alt={"Animal"}/>
                    <p className="text-black text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer gravida tellus a dolor fermentum fermentum. Vestibulum a neque eu ex accumsan dictum.
                        Curabitur nunc felis, cursus et commodo non, eleifend non mi. Pellentesque suscipit posuere
                        varius. Etiam porttitor molestie ipsum, in pellentesque felis ultrices eu. Ut sed ex nunc.
                        Vestibulum viverra ipsum vel sem malesuada maximus tincidunt ut est. In hac habitasse platea
                        dictumst. Maecenas hendrerit pretium massa ut sodales. Aliquam eleifend maximus congue.
                        Pellentesque lacinia malesuada erat. Fusce eu risus molestie, mollis orci eget, porta purus.
                        Donec ex leo, malesuada vitae mollis quis, venenatis vel ligula. Aliquam placerat et ex quis
                        accumsan. Pellentesque eu lobortis urna, sed dictum leo.
                        Duis blandit ultricies metus in luctus. Suspendisse vitae erat ultrices, consequat augue nec,
                        accumsan eros. Duis venenatis quis neque in commodo. Sed non urna eleifend, feugiat nisi ac,
                        sodales diam. Maecenas nec hendrerit justo, nec efficitur quam. Integer velit elit, varius et
                        sagittis ut, consectetur eget ex. In ac semper est, eu molestie neque. Proin ornare, urna sed
                        tincidunt feugiat, nisi urna molestie neque, elementum rutrum ante tellus ac risus. Praesent
                        vitae pretium tellus, vitae commodo urna.
                        Proin et turpis sed augue pellentesque iaculis. Suspendisse potenti. In sodales est at
                        pellentesque dignissim. Aliquam eu est a arcu imperdiet sollicitudin. Sed hendrerit, odio
                        viverra convallis condimentum, lorem est finibus lorem, id varius ligula neque at purus. Nullam
                        tempus purus eros, vel sodales lorem aliquam eu. Proin dictum, libero mollis condimentum
                        aliquet, tellus ipsum porta purus, non sagittis arcu lacus ac nisi. Nunc ac porttitor ligula.
                        Vivamus sapien nisl, sodales eu lectus elementum, rutrum consequat libero. Suspendisse potenti.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Donec dolor justo, tincidunt sed lorem non, eleifend pulvinar enim. Phasellus aliquet fringilla
                        facilisis. Nulla facilisi. Sed pharetra leo vel accumsan pretium. Nulla mattis vel diam a
                        vehicula. Vestibulum ut dolor pellentesque, dignissim sem eget, convallis nisl. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus. Quisque congue nec odio in suscipit. Morbi
                        rhoncus ut nisl vel interdum. Pellentesque id quam iaculis, ornare neque cursus, vehicula nibh.
                        Donec hendrerit nec lectus ut ultrices. Proin hendrerit consequat aliquam. Cras molestie
                        imperdiet scelerisque. Cras lobortis lobortis sapien viverra ullamcorper. Nunc luctus enim eget
                        placerat ornare. Sed placerat, sapien ac suscipit efficitur, enim velit euismod arcu, eget
                        volutpat metus erat pulvinar arcu. Maecenas tincidunt luctus justo, eget rhoncus velit mollis
                        et. Donec rhoncus ligula id convallis gravida. Sed sollicitudin vulputate enim, ultrices
                        facilisis lectus egestas at. Mauris feugiat erat id mauris euismod, vel rutrum augue feugiat.
                        Duis ut sem eget quam semper aliquam. Nulla egestas mollis lacus, tincidunt faucibus augue
                        blandit ut. Pellentesque bibendum diam nec facilisis dignissim. Nullam ut tempor purus, quis
                        bibendum lacus. Nam finibus leo vel tristique vehicula.</p>
                </div>
                <aside>
                    <ActionRessource action={"PARTAGER"} item={"LA RESSOURCE"} handleClick={'handleShare'}/>
                </aside>
            </div>
        </div>
    )
}