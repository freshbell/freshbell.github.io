// Client Component에서 JavaScript 기능을 사용하기 위해서, 없으면 Server Component
// useEffect 등을 사용할 수 있음

import CartItem from "@/components/cartitem";
import axios from "axios";
import Image from "next/image";
import DatabaseItem
 from "./database-item";
 
export async function getData() {
    const options = {
        method:'POST',
        url:`https://api.notion.com/v1/databases/${process.env.NOTION_DATABASE}/query`,
        headers:{
            accept:'application/json',
            'Notion-version' : '2022-06-28',
            'authorization':process.env.NOTION_API_KEY,
            'content-type':'application/json'
        }
    };

    const response = await axios.request(options);
    return response.data
};

export default async function Cart() {
    const data = await getData();
    // console.log(data);

    return (
        <div>
            {/* <p>{data.properties.태그.multi_select.options[0].name}</p> */}
            <div className="grid grid-cols-l md:grid-col-2 py-10 m-6 gap-8 sm:w-full">
            {

                data.results.map((item) => {
                    return (
                        <div>
                            <DatabaseItem key={item.id} data={item} />
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

