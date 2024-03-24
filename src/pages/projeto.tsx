import Image from "next/image";

export default function Projetos(){
    return(
        <>
            <section className="section-three">
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <h1>Projetos</h1>
                            <p>Aqui estão alguns dos meus projetos pessoais e outros que eu tive participação</p><br></br>

                            <h2>API SPOTIFY</h2>

                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Eu fiz um projeto em React.JS consumindo a API do Spotify para aumentar minhas habilidades, o próprio Spotify disponibiliza no GitHub um projeto que em você pode usar o Authorization Code, usando ele, sua conta do Spotify será autenticada para consumir a API no Front-end, nesse projeto eu acabei usando 3 endpoints da API que são: GET Artist, GET Artist's Top Track e GET Artist's Albums.</p>

                            <Image
                                src="/assets/images/api-spotify.gif"
                                alt="spotify"
                                width={600}
                                height={300}
                            /><br></br><br></br>

                            <h2>PROJETO MARCAÇÃO</h2>

                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Trabalhei em um projeto de marcação de hospital na empresa Reyo Technologies, onde eu fui um Desenvolvedor FullStack para fazer alterações e adicionar novas funcionalidades no sistema. O sistema é feito em React.Js + API REST Laravel.</p><br></br>

                            <Image
                                src="/assets/images/marcacao.jpg"
                                alt="marcacao"
                                width={600}
                                height={300}
                            /><br></br><br></br>

                            <h2>PROJ. DISPARO DE E-MAILS</h2>

                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Desenvolvi uma aplicação de comunicação entre microserviços com mensageria para envio de emails usando o Spring AMPQ e RabbitMQ.</p><br></br>

                            <Image
                                src="/assets/images/ms-email.gif"
                                alt="email"
                                width={600}
                                height={300}
                            /><br></br><br></br>

                            <h2>CLEAN ARCHITETURE</h2>

                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Elaborei um sistema de gestão escolar utilizando os princípios da Clean Architecture como padrão de projeto.</p><br></br>

                            <Image
                                src="/assets/images/clean-pattern.png"
                                alt="clean"
                                width={600}
                                height={300}
                            /><br></br><br></br>

                            <h2>FORM BACKEND</h2>

                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Participei de um projeto com meu amigo Everton Araújo (Dev Front-end) no qual eu desenvolvi uma API usando o framework Spring para o Front-end.</p><br></br>

                            <Image
                                src="/assets/images/java.jpg"
                                alt="java"
                                width={600}
                                height={300}
                            /><br></br><br></br>

                            <h2>BIO KOBE BRYANT</h2>

                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Projeto em que fiz uma prática usando HTML, CSS e JavaScript para construir um website biografico do jogador Kobe Bryant.</p><br></br>

                            <Image
                                src="/assets/images/projeto_kobe.gif"
                                alt="kobe"
                                width={600}
                                height={300}
                            />    
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}