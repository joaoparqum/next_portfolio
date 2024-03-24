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
                            <Image 
                                src="/assets/images/gitcolor.png"
                                alt="github"
                                width={40}
                                height={40}
                            />
                            <p>GitHub</p>
                        </Link>
                        <Link href="https://linkedin.com/joao-arquim" className="link">
                            <Image 
                                src="/assets/images/linkedin.png"
                                alt="github"
                                width={40}
                                height={40}
                            />
                            <p>LinkedIn</p>
                        </Link>
                        </div>
                </div>
            </div>
        </footer>
    );
}