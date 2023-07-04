import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { DiHtml5 } from "react-icons/di";
import { DiReact  } from "react-icons/di";
import { DiJavascript  } from "react-icons/di";     
import { DiCss3 } from "react-icons/di";    
import { DiBootstrap } from "react-icons/di";    
import { DiNpm } from "react-icons/di";       
export const Skills = () => {
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

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Habilidades</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                <DiHtml5 />
                </div>
                <div className="item">
                <DiReact />
                </div>
                <div className="item">
                <DiJavascript />
                </div>
                <div className="item">
                <DiCss3 />
                </div>
                <div className="item">
                <DiBootstrap />
                </div>
                <div className="item">
                <DiNpm />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
