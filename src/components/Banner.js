import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Lily.jfif";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useTranslation } from 'react-i18next';

// Componente funcional 'Banner'
export const Banner = () => {
  const { t } = useTranslation(); // Hook para la traducción
  const [text, setText] = useState(''); // Estado para el texto que se muestra en el banner
  const [loopNum, setLoopNum] = useState(0); // Estado para llevar el conteo de los ciclos de texto
  const [isDeleting, setIsDeleting] = useState(false); // Estado para determinar si el texto está siendo eliminado
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Estado para el intervalo de tiempo entre cada letra
  const [index, setIndex] = useState(1); // Estado para el índice de la letra actual
  const toRotate = t('roles', { returnObjects: true }); // Roles a rotar en el banner, obtenidos de las traducciones
  const period = 2000; // Tiempo de espera antes de cambiar de palabra

  // Hook useEffect para manejar el ciclo de texto
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  // Función que actualiza el texto en el banner
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);

    // Ajusta la velocidad de eliminación de texto
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    // Maneja la transición entre palabras y eliminación de texto
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
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
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{t('welcome')}</span>
                  <h1>{t('tagline')} <span className="txt-rotate" data-period="1000" data-rotate={JSON.stringify(t('roles'))}><span className="wrap">{text}</span></span></h1>
                  <p>{t('explore')}</p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
