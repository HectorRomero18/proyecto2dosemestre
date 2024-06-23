// Importamos dependencias
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

// Componente
export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');


  // Efectos
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Esto creo que no nos va a servir<br></br> Ya me diran si lo borramos o no</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
