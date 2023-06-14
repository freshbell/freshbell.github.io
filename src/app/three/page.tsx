import Link from "next/link"

export default function List() {
    let 상품:Array<String> = ['Tomatoes', 'pasta', 'Coconut']
    
    return (
        // eslint-disable-next-line react/jsx-key
        <div>
            <ul>
                <li><Link href='/three/01'>01</Link></li>
                <li><Link href='/three/02'>02</Link></li>
                <li><Link href='/three/03'>03</Link></li>
                <li><Link href='/three/04'>04</Link></li>
                <li><Link href='/three/05'>05</Link></li>
                <li><Link href='/three/06'>06</Link></li>
            </ul>
        </div>
    )
}