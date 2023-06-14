import Link from "next/link"

export default function List() {
    let 상품:Array<String> = ['Tomatoes', 'pasta', 'Coconut']
    
    return (
        // eslint-disable-next-line react/jsx-key
        <div className="container">
            <ul className="threeList">
                <li className="threeList"><Link href='/three/01'>01</Link></li>
                <li className="threeList"><Link href='/three/02'>02</Link></li>
                <li className="threeList"><Link href='/three/03'>03</Link></li>
                <li className="threeList"><Link href='/three/04'>04</Link></li>
                <li className="threeList"><Link href='/three/05'>05. Group / Rotate</Link></li>
                <li className="threeList"><Link href='/three/06'>06. Control</Link></li>
                <li className="threeList"><Link href='/three/07'>07. Mesh</Link></li>
            </ul>
        </div>
    )
}