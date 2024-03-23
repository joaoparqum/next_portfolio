import Link from "next/link";

export default function Navbar() {
    return (
      <>
        <nav className="container-fluid bg-dark text-white">
          <div className="row">
            <div className="col p-3">
                Portfólio
            </div>
            <div className="col p-3 text-end align-self-center">
                <Link href="" className="link">Sobre mim</Link>
                <Link href="/tecnologias" className="link">Tecnologias</Link>
                <Link href="/projeto" className="link">Projetos</Link>
                <Link href="" className="link">Contato</Link>
            </div>
          </div>
        </nav>
      </>
    );
  }