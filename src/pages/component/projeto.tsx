import Image from "next/image";
import Link from "next/link";

export default function Projeto(){
    return(
        <>
            <section className="section-projeto bg-dark">
                <h2>API SPOTIFY - <Link href="https://github.com/joaoparqum/api-spotify" target="_blank"><Image src="/assets/images/github (1).png" alt="link" width={40} height={40}/></Link>
                </h2>
                    
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Eu fiz um projeto em React.JS consumindo a API do Spotify para aumentar minhas habilidades, o próprio Spotify disponibiliza no GitHub um projeto que em você pode usar o Authorization Code, usando ele, sua conta do Spotify será autenticada para consumir a API no Front-end, nesse projeto eu acabei usando 3 endpoints da API que são: GET Artist, GET Artist's Top Track e GET Artist's Albums.</p>

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