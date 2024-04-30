import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../../estilos/estilos.css";

class Contato extends Component{
    constructor(props){
      super(props);
    }

    render(){
      return(
        <div>
            <h1>Contato</h1>
            <Link to="/"><button>Página Inicial</button></Link>
        </div>
      )
    }
}

export default Contato;