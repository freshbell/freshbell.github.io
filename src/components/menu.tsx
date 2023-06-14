import Link from "next/link";

export default function Menu() {
    return (
        <div className="navbar">
            <ul>
                <li><Link href="/">홈</Link>  {/* html의 a tag와 동일 */}</li>
                <li><Link href="/notion">Notion</Link></li>
                <li><Link href="/three">Three</Link></li>
            </ul>
        </div>
    )
}