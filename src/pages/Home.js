import React from "react";
import { logoPNG } from "../assets";
import './Home.css';

const Home = () => {
    return (

        <div className="container">
            <img src={logoPNG} alt="logo" style={{ width:"120px", maxWidth:"100%", height:"auto", cursor:"pointer", marginTop:"10px" }}/>
            <h4>Faça sua avaliação sobre o atendimento!</h4>
            <div className="inner-container">
                <h4>Pergunta 1</h4>
                <textarea></textarea>

                <h4>Pergunta 2</h4>
                <textarea></textarea>

                <h4>Pergunta 3</h4>
                <textarea></textarea>

                <h4>Pergunta 4</h4>
                <textarea></textarea>

                <h4>Pergunta 5</h4>
                <textarea></textarea>
            </div>
            <h4>Fim da avaliação!</h4>
        </div>
    );
};

export default Home;