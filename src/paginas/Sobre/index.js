import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "../../estilos/estilos.css";

class Sobre extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Sobre</h1>
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Sobre;