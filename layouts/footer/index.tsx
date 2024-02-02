// Libs
import Link from 'next/link'

import "./styles.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <h1 className="name">aliblackeye</h1>
            <div className="socials">
                <Link href={"https://instagram.com/aliblackeye"}>instagram</Link>
                <Link href={"https://github.com/aliblackeye"}>github</Link>
                <Link href={"https://linkedin.com/in/aliblackeye"}>linkedin</Link>
                <Link href={"https://youtube.com/aliblackeye"}>youtube</Link>
            </div>
        </footer>
    )
}
