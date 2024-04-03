import Image from "next/image";
import Link from "next/link";

export default function Projeto(){
    return(
        <>
            <section className="section-projeto bg-dark">
                <h2>API SPOTIFY - 
                    <div className="btn mx-2 bg-black text-white">
                        <Link 
                            href={"https://api-spotify-9lzk.vercel.app/"} 
                            target="_blank" 
                            className="link-dep">
                                Acesse o projeto
                        </Link>
                    </div>
                </h2>
                    
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Eu fiz um projeto em React.JS consumindo a API do Spotify para aumentar minhas habilidades, o próprio Spotify disponibiliza no GitHub um projeto que em você pode usar o Authorization Code, usando ele, sua conta do Spotify será autenticada para consumir a API no Front-end, nesse projeto eu acabei usando 3 endpoints da API que são: GET Artist, GET Artist&apos;s Top Track e GET Artist&apos;s Albums.</p>

                <Image
                    src="/assets/images/api-spotify.gif"
                    alt="spotify"
                    width={600}
                    height={330}
                />
            </section>
        </>
    );
}