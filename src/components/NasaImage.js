import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';

const NasaImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetchNasaImage();
  }, []);

  const fetchNasaImage = async () => {
    try {
      const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=bKhwWCBclBxVxsB1V6sFegncr7LbZS2rg2IHfYnm');
      setImageData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="nasa-image" id="nasaimage">
      <Container>
        <Row>
        <Col className="mx-auto">
            <div className="nasa-image-container">
              <div className="image-container">
                <img src={imageData.url} alt={imageData.title} className="nasa-image" />
              </div>
              <div className="text-container">
                <h3>{imageData.title}</h3>
                <p>{imageData.explanation}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default NasaImage;
