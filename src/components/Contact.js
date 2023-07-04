import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const detalhesIniciaisDoFormulario = {
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    mensagem: ''
  };
  const [detalhesDoFormulario, setDetalhesDoFormulario] = useState(detalhesIniciaisDoFormulario);
  const [textoBotao, setTextoBotao] = useState('Enviar');
  const [status, setStatus] = useState({});

  const atualizarFormulario = (categoria, valor) => {
    setDetalhesDoFormulario({
      ...detalhesDoFormulario,
      [categoria]: valor
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTextoBotao("Enviando...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(detalhesDoFormulario),
    });
    setTextoBotao("Enviar");
    let result = await response.json();
    setDetalhesDoFormulario(detalhesIniciaisDoFormulario);
    if (result.code === 200) {
      setStatus({ sucesso: true, mensagem: 'Mensagem enviada com sucesso' });
    } else {
      setStatus({ sucesso: false, mensagem: 'Ocorreu um erro, por favor tente novamente mais tarde.' });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Fale Conosco" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Entre em Contato</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={detalhesDoFormulario.nome} placeholder="Nome" onChange={(e) => atualizarFormulario('nome', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={detalhesDoFormulario.sobrenome} placeholder="Sobrenome" onChange={(e) => atualizarFormulario('sobrenome', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={detalhesDoFormulario.email} placeholder="Endereço de Email" onChange={(e) => atualizarFormulario('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={detalhesDoFormulario.telefone} placeholder="Telefone" onChange={(e) => atualizarFormulario('telefone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={detalhesDoFormulario.mensagem} placeholder="Mensagem" onChange={(e) => atualizarFormulario('mensagem', e.target.value)}></textarea>
                        <button type="submit"><span>{textoBotao}</span></button>
                      </Col>
                      {
                        status.mensagem &&
                        <Col>
                          <p className={status.sucesso === false ? "danger" : "success"}>{status.mensagem}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
