import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../Firebase";

class Cadastro extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            nome: "",
            sobrenome: "",
            dataNascimento: "",
            dados:[]
        }
    
        this.gravar = this.gravar.bind(this);
        this.listar = this.listar.bind(this);
      }
    
    
      async gravar(){

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.senha)
        .then( async (retorno) => {

            await firebase.firestore().collection("usuario").doc(retorno.user.uid).set({
                nome: this.state.nome,
                sobrenome: this.state.sobrenome,
                dataNascimento: this.state.dataNascimento
            });
            

        });




       /* firebase.firestore().collection("usuario").add({
          nome: this.state.nome,
          sobrenome: this.state.sobrenome
        });*/
      }
    
      listar(){
        firebase.firestore().collection("usuario").get().then((retorno) => {
          var state = this.state;
          retorno.forEach((item) => {
        
            state.dados.push({
              id: item.id,
              nome: item.data().nome,
              sobrenome: item.data().sobrenome,
              dataNascimento: item.data().dataNascimento
            });
    
          });
          this.setState(state);
        });
      }
    
    
    
      render(){
        return(
          <div>
    
            <h1> Tela de Cadastro </h1>
            <input type="text" placeholder="E-mail" onChange={(e) => this.setState({email: e.target.value})} /> 
            <br/>
            <input type="password" placeholder="Senha" onChange={(e) => this.setState({senha: e.target.value})} /> 
            <br/>
            <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} /> 
            <br/>
            <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} /> 
            <br/>
            <input type="date" placeholder="Data de Nascimento" onChange={(e) => this.setState({dataNascimento: e.target.value})} /> 
            <br/>
            <button onClick={this.gravar}>Gravar</button> <br/><br/><br/>
    
            <button onClick={this.listar}>Listar</button> <br/>
    
            <ul>
                {this.state.dados.map((item)=>{
                  return(
                    <li> {item.nome + " " + item.sobrenome} - Data de Nascimento: {item.dataNascimento}{" "}</li> 
                  )
                })}
            </ul>
            <Link to="/">
          <button>Voltar para a Página Inicial</button>
        </Link>
    
          </div>
        )
      }
    }
    /*constructor(props){
        super(props);
        this.state = {
            nome: "",
            sobrenome: ""

        }

        this.gravar = this.gravar.bind(this);
    }

    async gravar(){
        /*firebase.firestore().collection("usuario").add({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
        });

        await firebase.firestore().collection("usuario").doc('1').set({
            nome: this.state.nome,
            sobrenome: this.state.sobrenome
        });
    }

    render(){
        return(
            <div>
                <h1>Pagina de cadastro</h1>
                <input type="text" placeholder="Nome" onChange={(e) => this.setState({nome: e.target.value})} />
                <br/>
                <input type="text" placeholder="Sobrenome" onChange={(e) => this.setState({sobrenome: e.target.value})} />
                <br/>
                <button onClick={this.gravar}>Gravar</button>
                <br/>
                <Link to="/"> {}
                    <button>Página Inicial</button>
                </Link>
            </div>
        )
    }
}
*/

export default Cadastro;