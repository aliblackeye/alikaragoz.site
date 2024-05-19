// Libs
import Link from 'next/link';

import data from '@db/user-details.json';

import './styles.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <h1 className="name">aliblackeye</h1>
      <div className="socials">
        {data?.socials.map((social, index) => (
          <Link target="_blank" href={social.href} key={index}>
            {social.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
