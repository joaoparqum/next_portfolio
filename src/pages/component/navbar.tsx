import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
      <>
        <nav className="container-fluid bg-dark text-white">
          <div className="row">
            <div className="col p-3">
                <Image
                    src="/assets/images/icons8-berserk-96.png"
                    alt="guts"
                    width={50}
                    height={50}
                />
                <strong>HARDWORK ALWAYS PAYS</strong>
            </div>
            <div className="col p-3 text-end align-self-center">
                <Link href="/home" className="link">Sobre mim</Link>
                <Link href="/tecnologias" className="link">Tecnologias</Link>
                <Link href="/projeto" className="link">Projetos</Link>
            </div>
          </div>
        </nav>
      </>
    );
  }