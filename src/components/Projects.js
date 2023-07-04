import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const projects = [
    {
      title: "Api de MakeUP",
      description: "Estudando API em JS",
      imgUrl: projImg1,
      url:"https://github.com/larissa-bonasina/apimakeup"
    },
    {
      title: "Calculadora",
      description: "Aula de HTML e CSS",
      imgUrl: projImg2,
      url:"https://github.com/larissa-bonasina/calculadora"
    },
    {
      title: "Jogo da Velha",
      description: "Ambientação do CodePen",
      imgUrl: projImg3,
      url:"https://github.com/larissa-bonasina/jogo-da-velha"
    },
    {
      title: "Ghibli site",
      description: "Primeiro site completo feito",
      imgUrl: projImg4,
      url:"https://github.com/larissa-bonasina/ghibli"
    },
  ]
  
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projetos</h2>
                  <p>Nessa parte do meu portfólio, dediquei para os meus projetos pessoais e profissionais, você terá acesso ao conteúdo e caso queira dar uma dica sobre algum projeto ou queira pedir como eu utilizei alguma ferramenta, entre em contato.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Terminados</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Em progresso</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Futuros</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Carousel responsive={responsive}>
                          {projects.map((project, index) => (
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <ProjectCard key={index} {...project} />
                            </a>
                          ))}
                        </Carousel>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Aqui você encontrará meus projetos em andamento e alguns comentários referentes ao modo de aplicação das ferramentas e referências que estou utilizando.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Nessa parte, estará meus projetos futuros, protótipos e etc.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
