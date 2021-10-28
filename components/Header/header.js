import Image from "next/image";
import clubLogo from "../../assets/Logo.png";
import styles from "./Header.module.css";
import { navLinks } from "./navLinks";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Image src={clubLogo} width={75} height={75} responsive="true" />
        <h1 className={styles.title}>Robotics Club, WRC</h1>
      </div>

      <nav className={styles.navbar}>
        {navLinks.map((link, index) => (
          <ul  key={index} className={styles.rightContainer}>
            <Link href={link.path} >
              <li key={index}>{link.name}</li>
            </Link>
          </ul>
        ))}
      </nav>
    </div>
  );
}
