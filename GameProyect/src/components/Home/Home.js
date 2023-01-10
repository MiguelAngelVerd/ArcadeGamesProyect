import { Component } from 'react';
import Cookies from 'universal-cookie';
import styled from 'styled-components';
import './Home.css';
import imgFondo from '../../assets/images/fondo.jpg';

const View = styled.div`
    background-image: url(${imgFondo});
    color: white;
    background-size: cover;
    height: 929px;
`
const cookies = new Cookies();
const username = cookies.get('username');

class Home extends Component {

    cerrarSesion=()=>{
        cookies.remove('username', {path: "/"});
        window.location.href='./login';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./login";
        }
    }

    render() {
        return (
        <View>
            <div class='containerHeader'>
                <h1>GAMES</h1>
                <div class='userData'>
                    <p class='username'>{username}</p>
                    <a class='logout' onClick={()=>this.cerrarSesion()}>Cerrar sesión</a>
                </div>
            </div>
            <div class='containerGames marginTateti'>
                <div>
                    <h2>3 EN RAYA</h2>
                    <div class="logoTateti"></div>
                </div>
                <div class='containerButton'>
                    <a class='button' href='/tateti'>START</a>
                </div>
            </div>
            <div class='containerGames'>
                <div>
                    <h2>MEMORAMA</h2>
                    <div class="logoMemory"></div>
                </div>
                <div class='containerButton'>
                    <a class='button' href='/memory'>START</a>
                </div>
            </div>
        </View>
        )
    }
  
  }
  
  export default Home;