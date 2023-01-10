import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import styled from 'styled-components';
import axios from 'axios';
import swal from 'sweetalert'
import './Login.css';
import imgFondo from '../../assets/images/fondo.jpg';
  
const View = styled.div`
    background-image: url(${imgFondo});
    color: white;
    background-size: cover;
    height: 929px;
`
const baseUrl="http://localhost:3001/users";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            username: '',
            password: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    iniciarSesion=async()=>{
        await axios.get(baseUrl, {params: {username: this.state.form.username, password: this.state.form.password}})
        .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('username', respuesta.username, {path: "/"});
                window.location.href="./home";
            }else{
                swal('¡ERROR!','El usuario o la contraseña no son correctos','error');
            }
        })
        .catch(error=>{
            console.log(error);
        })

    }
    

    render() {
        return (
        <View>
            <h1>ARCADE GAMES</h1>
            <div class='containerForm'>
                <label>Usuario: </label>
                <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.handleChange}
                />
                <label>Contraseña: </label>
                <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.handleChange}
                />
                <br />
                <button class='buttonLogin' onClick={()=> this.iniciarSesion()}>Login</button>
            </div>
            <a class='buttonInfo' href='/info'>Info</a>
        </View>
        )
    }
  
  }
  
  export default Login;