import React from "react";

// Importa as imagens
import capa1 from '../imagens/capas/9788575228142.jpg';
import capa2 from '../imagens/capas/9788575228074.jpg';

const Home = () => {
    return (
        <>
            <h2>Últimos lançamentos</h2>
            <div className="card">
                <div className="thumb">
                    <img src={capa1} alt="" />
                </div>
                <div className="detalhes">
                    <h3>Padrões para Kubernetes</h3>
                    <p>O modo como os...</p>
                    <a href="#">Leia mais &gt;</a>
                </div>
            </div>
            <div className="card">
                <div className="thumb">
                    <img src={capa2} alt="" />
                </div>
                <div className="detalhes">
                    <h3>Introdução ao Pentest - 2&ordf; Edição</h3>
                    <p>Introdução ao Pentest...</p>
                    <a href="#">Leia mais &gt;</a>
                </div>
            </div>
        </>
    );
};

export default Home;