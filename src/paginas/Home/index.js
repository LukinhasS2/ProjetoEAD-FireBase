import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "../../estilos/estilos.css";
import firebase from '../../Firebase';

class Home extends Component{
    constructor(props){
      super(props);
      this.state = {
        nome: "",
        sobrenome: "",
        dataNascimento: ""

      }
    }

    async componentDidMount(){

      await firebase.auth().onAuthStateChanged( async (usuario)=>{
        if(usuario){
          var uid = usuario.uid;

          await firebase.firestore().collection("usuario").doc(uid).get()
          .then((retorno)=>{

            this.setState({
              nome: retorno.data().nome,
              sobrenome: retorno.data().sobrenome,
              dataNascimento: retorno.data().dataNascimento

            });


          });
          
        }

      });

    }

    render(){
      return(
        <div>
            <h1>Home</h1>
            Nome: { this.state.nome } <br/>
            Sobrenome: { this.state.sobrenome } <br/>
            Data de Nascimento: { this.state.dataNascimento} <br/><br/><br/><br/>
            <Link to="/Contato"><button>Contato</button></Link> <br/>
            <Link to="/Cadastro"><button>Cadastro</button></Link> <br/>
            <Link to="/Login"><button>Login</button></Link> <br/>
            <Link to="/Sobre"><button>Sobre</button></Link> 
        </div>
      )
    }
}

export default Home;