import Link from "next/link";

export default function Home(){
    return(
        <>
            <section className="section-one">
                <div className="container">
                    <div className="row">
                        <div className="col py-5">
                            <h1>João Paulo Arquim</h1>

                            <p>Desenvolvedor de Software &#x1F4BB;</p>

                            <p className="section-one-title"><strong>Seja Bem-vindo ao meu portólio!</strong> Esse website contém os meus projetos e minhas habilidades</p>

                            <p className="section-one-text bg-dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eu me chamo João Paulo e sou um profissional de desenvolvimento de software com uma paixão marcante por música, filmes da cultura pop, basquete e musculação. Iniciei minha trajetória na carreira de programador em 2019, ao ingressar no curso de Análise e Desenvolvimento de Sistemas. Apesar de ter crescido em um ambiente voltado para o universo atlético, também nutro um forte interesse pelo campo da tecnologia. Atualmente tenho foco na área Back-end, eu domino Java (POO) e atualmente estou focado em aprender <strong>RabbitMQ, Next.Js, Docker</strong>.</p>

                            <br></br>
                            <section className="section-two bg-dark">
                                <h2>Experiência</h2><br></br>

                                <h4>REYO TECHNOLOGIES | Jun/2023 - Hoje</h4><br></br>

                                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A Reyo é uma empresa de consultoria em TI sediada em Irecê - BA, dedicada a fornecer soluções inovadoras e eficientes para empresas de todos os tamanhos | Site: <Link href="https://reyo.mydurable.com/pt" target="blank" className="link-exp">https://reyo.mydurable.com/pt</Link></p>

                                <p>Tecnologias: <strong>Laravel, React.Js, Git, Docker e RabbitMQ</strong></p>
                                <p>Sou responsável por fazer melhorias no sistema e adicionar novas funcionalidades.</p>
                                <ul>
                                    <li>Desenvolvimento Back-End para gerenciamento de arquivos</li>
                                    <li>Desenvolvimento Front-End para upload de documentos</li>
                                    <li>Aprimoramento e desenvolvimento dos níveis de acesso ao sistema</li>
                                    <li>Desenvolvimento backend e frontend para gerenciamento de protocolos</li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}