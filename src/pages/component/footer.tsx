import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="container-fluid bg-dark text-white mt-auto">
            <div className="row">
                <div className="col p-3 text-center">
                        <p>JP &copy; 2024 - Feito em <strong>Next.Js</strong></p>
                        <div className="Contato">
                        <Link href="https://github.com/joaoparqum" className="link">
                            <p>GitHub</p>
                        </Link>
                        <Link href="https://linkedin.com/joao-arquim" className="link">
                            <p>LinkedIn</p>
                        </Link>
                        </div>
                </div>
            </div>
        </footer>
    );
}