import Link from "next/link";
import styles from "./NavMenu.module.css";
import Image from "next/image";
import { SignIn, Signout } from "@/components/button";
import { AuthCheck } from "@/components/AuthCheck";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image src='./logo.svg' width={216} height={30} alt='logo' />
      </Link>
      <ul className={styles.links}>
        <Link href='/'>
          <li>Home</li>
        </Link>
        <Link href='/blog'>
          <li>Blog</li>
        </Link>
        <Link href='/about'>
          <li>About</li>
        </Link>
        <SignIn />

        <AuthCheck>
          <Signout />
        </AuthCheck>
      </ul>
    </nav>
  );
}
