import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import Topo from "./components/Topo";
import Home from "./components/Home";
import Frontend from "./components/Frontend";
import Programacao from "./components/Programacao";
import Design from "./components/Design";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Livro from "./components/Livro";
import Rodape from "./components/Rodape";
import axios from "axios";
import "./index.css";

class App extends Component {

    // Dados dos livros
    state = {
        livros: []
    };

    // Requisição dos dados, utilizando Axios
    async componentDidMount() {
        try {
            const {data: livros} = await axios.get("../api/todosOsLivros.json");
            this.setState({livros});
        } catch (error) {
            console.log(error);
            document
                .querySelectorAll(".principal")[0]
                .insertAdjacentHTML(
                    "beforeend",
                    "<p class='erro'>Mensagem de erro</p>"
                );
        }
    }    

    // Wrapper para selecionar os dados do livro, de acordo com seu slug
    LivroWrapper = () => {

        // Obtém os parâmetros da URL, no caso, o slug do livro
        const params = useParams();
        console.log("params:", params.livroSlug);

        // Filtra os dados do livro, utilizando o slug
        const livro = this.state.livros.find((livro) => livro.slug == params.livroSlug);
        console.log("Livro:", livro);

        // Retorna o componente que será renderizado
        if (livro) return <Livro livro={livro} />;
        else return <NotFound />;

    }

    // Renderiza os componentes
    render() {
        return (
            <Router>
                <>
                    <Topo />
                    <Routes>
                        <Route exact path="/" element={<Home livros={this.state.livros} />} />
                        <Route exact path="/frontend" element={<Frontend livros={this.state.livros} />} />
                        <Route exact path="/programacao" element={<Programacao livros={this.state.livros} />} />
                        <Route exact path="/design" element={<Design livros={this.state.livros} />} />
                        <Route exact path="/catalogo" element={<Catalogo livros={this.state.livros} />} />

                        <Route exact path="/livro/:livroSlug" element={<this.LivroWrapper />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Rodape />
                </>
            </Router>
        );
    }
}

export default App;
