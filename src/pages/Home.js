import React from "react";
import "../pages/Home.css"

const Home = () => {
    return (
        <section>
            <div className="geral">
                <div className="cachorrinho">
                    <img src="https://img.freepik.com/fotos-gratis/cachorro-sorridente-fofo-usando-oculos-escuros_23-2148865714.jpg" />
                </div>
                <div className="text">
                    <h1>Doguinho</h1>
                    <p className="biografia">Esse doguinho é programador full stack júnior e pós graduando em Blockchain</p>
                </div>
            </div>

            <div className="blog">
                <h2>Últimas do blog</h2>
                <h5>5 dicas para sua carreira profissional</h5>
                <p>Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end</p>
            </div>
            <div className="blog">
                <h5>5 dicas para sua carreira profissional</h5>
                <p>Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end</p>
               
            </div>
            <div className="blog">
                <h5>5 dicas para sua carreira profissional</h5>
                <p>Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end</p>
                <p className="ver-tudo">Ver tudo</p>

            </div>
        </section>
    )
};

export default Home