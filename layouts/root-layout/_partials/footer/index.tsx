// Libs
import Link from 'next/link'

import "./styles.scss";
import { socials } from '../../../../data';

export default function Footer() {
    return (
        <footer className="footer">
            <h1 className="name">aliblackeye</h1>
            <div className="socials">
                {socials.map((social, index) => (
                    <Link target='_blank' href
                        ={social.href} key={index}>{social.label}</Link>
                )
                )}
            </div>
        </footer>
    )
}
