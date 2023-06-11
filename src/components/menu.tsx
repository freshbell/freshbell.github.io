import Link from "next/link";

export default function Menu() {
    return (
        <div className="navbar">
            <Link href="/">홈</Link>  {/* html의 a tag와 동일 */}
            <Link href="/list">List</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/notion">Notion</Link>
        </div>
    )
}