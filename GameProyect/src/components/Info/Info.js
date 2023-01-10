import styled from 'styled-components';
import './Info.css';
import imgFondo from '../../assets/images/fondo.jpg';
  
const View = styled.div`
    background-image: url(${imgFondo});
    color: white;
    background-size: cover;
    height: 929px;
`

const Info = () => {
        return (
        <View>
            <h1>ARCADE GAMES</h1>
            <div class='containerInfo'>
                <h2>Información general</h2>
                <p class='textInfo'>Bienvenidos a ARCADE GAMES, una plataforma de juegos de la que podrás disfrutar de forma gratuita de videojuegos retro clásicos y originales, solo o con tus amigos. 

                </p>
                <p class='textInfo'>
                    Esta plataforma nace como proyecto final del Grado Superior de Desarrollo de Aplicaciones Multiplataforma para el centro de estudio Cesur.
                </p>
                <p class='textInfo'>
                    Su creador, Miguel Ángel Verdugo Verdugo, espera que disfruteis de la experiencia de volver a jugar a los juegos de toda la vida.
                </p>
            </div>
            <a class='buttonHome' href='/login'>Volver</a>
        </View>
        )
    }
  
  export default Info;