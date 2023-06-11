import Link from "next/link";
import Image from "next/image";

export default function DatabaseItem({data}:any) {

    const title = data.properties.이름.title[0].plain_text;
    const url = data.properties.URL.url==null?'':data.properties.URL.url;
    const imgSrc = data.cover.external.url;
    const tags = data.properties.태그.multi_select;

    return (
        <div className="flex flex-col m-3 bg-slate-700 rounded-t-xl w-full">
            <Image 
                className="rounded-t-xl"
                src={imgSrc} 
                width={30} 
                height={30}
                layout='responsive' 
                style={{objectFit:'cover'}} 
                loading='lazy'
                alt='cover image'
                />
            <div className="p-4 flex flex-col">
                <h1>{title}</h1>
                <p>url : <Link href={url}>{url}</Link></p>
                <div className="flex items-start mt-2">
                    {
                        tags.map((tag) => {
                            return <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={tag.id}>{tag.name}</h1>
                        })
                    }
                </div>
            </div>
        </div>
    )
}