import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";


export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/todo">Ir para a Lista de Carros</Link>
        </div>


    )};