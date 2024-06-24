// Importamos las dependencias
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Blog.jfif";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Componente
export const Banner = () => {
  // Efectos

  // Definimos un bucle y la psoicion para los efectos
  const [loopNum, setLoopNum] = useState(0);
  // Definimos las variables que indican si el efecto termino
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  // Definimos la ubicacion de estas palabras
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  // Establecemos el array de palabras
  const toRotate = [ "Diviertete", "Descubre", "Disfruta" ];
  // Definimos el tiempo entre cada palabra
  const period = 2000;


  // Funcion que se encarga de los efectos de las palabras
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
     
    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    // Definimos una variable que contendra el residuo de loopNum % toRotate
    let i = loopNum % toRotate.length;
    // Creamos una variable que tendra la posicion del texto segun el indice
    let fullText = toRotate[i];
    // Creamos una variable para actualizar las palabras
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    // Actualizamos el texto
    setText(updatedText);

    // Si el bucle termina devolvemos la posicion de las palabras a la mitad
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    // Si el bucle no ha terminado
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      // Sumamos una posicion al bucle
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          {/* Texto que ira al lado de la imagen */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenido a nuestro Blog!</span>
                <h1>{`Somos Unemi`} <span className="txt-rotate" data-period="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  Explora artículos fascinantes, descubre consejos útiles y mantente al día con las últimas tendencias en nuestro blog. Sumérgete en contenidos que inspiran, educan y entretienen mientras te acompañamos en tu viaje de conocimiento y descubrimiento. Únete a nuestra comunidad y haz del aprendizaje una experiencia emocionante y enriquecedora.
                  </p>
                  <button onClick={() => console.log('connect')}>Conectar <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          {/* Imagen del Blog */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
