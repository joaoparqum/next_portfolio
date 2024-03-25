import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return(
        <footer className="container-fluid bg-dark text-white mt-auto">
            <div className="row">
                <div className="col p-3 text-center">
                        <p>JP &copy; 2024 - Feito em <strong>Next.Js</strong></p>
                        <div className="Contato">
                            <Link href="https://github.com/joaoparqum" className="link" target="_blank">
                                <Image 
                                    src="/assets/images/github (1).png"
                                    alt="github"
                                    width={40}
                                    height={40}
                                />
                                <p>GitHub</p>
                            </Link>
                            <Link href="https://www.linkedin.com/in/joao-arquim/" className="link" target="_blank">
                                <Image 
                                    src="/assets/images/linkedin (1).png"
                                    alt="github"
                                    width={40}
                                    height={40}
                                />
                                <p>LinkedIn</p>
                            </Link>
                            <Link href="mailto:costajoaopaulo113@gmail.com" className="link" target="_blank">
                                <Image 
                                    src="/assets/images/logotipo-do-gmail.png"
                                    alt="gmail"
                                    width={40}
                                    height={40}
                                />
                                <p>Gmail</p>
                            </Link>
                        </div>
                </div>
            </div>
        </footer>
    );
}