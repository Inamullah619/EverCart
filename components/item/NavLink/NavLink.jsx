import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../Header/header.css';

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const isActive = pathname === href;
  return (
    <Link href={href} className={`${isActive ? 'active' : ''}`}>
      {children}
    </Link>
  );
}
