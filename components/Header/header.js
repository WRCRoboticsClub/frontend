import Image from "next/image";
import clubLogo from "../../assets/club_logo.png";
import "./Header.module.css";
export default function Header() {
  return (
    <div className="container">
      <Image src={clubLogo} width={100} height={100} responsive="true" />
      <h1>Robotics Club, WRC</h1>
    </div>
  );
}
