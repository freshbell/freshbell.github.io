import Image from 'next/image'
import tomato from '/public/food0.png'

export default function List() {
    let 상품:Array<String> = ['Tomatoes', 'pasta', 'Coconut']
    
    const rendrItemList = ():JSX.Element[] => {
        const filteredItemList = 상품.map(
            (item:String, idx:number) => {
                return <div className="food"><h4>{상품[idx]}</h4></div>
            }
        )

        return filteredItemList;
    }

    // Return 소괄호 안에는 하나의 Html 태그만 존재해야함.
    return (
        // eslint-disable-next-line react/jsx-key
        <div>
            <h4 className="title">상품목록</h4>
            {/* {rendrItemList()} */}
            {
                상품.map((item:String, idx:number) => {
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <h4 key={idx} className="food"></h4>
                    )
                })
            }
        </div>
    )
}