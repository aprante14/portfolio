import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.svg";
import projImg2 from "../assets/img/project-img2.svg";
import projImg3 from "../assets/img/project-img3.svg";
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
      title: "Api",
      description: "Estudando API em JS",
      imgUrl: projImg1
    },
    {
      title: "site de musica",
      description: "Aula de HTML, CSS e Bootstrap",
      imgUrl: projImg2,
    },
    {
      title: "site de noticias",
      description: "Aula de HTML, CSS e JS",
      imgUrl: projImg3,
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
