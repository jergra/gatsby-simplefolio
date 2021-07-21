import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, 
                paragraphFour, paragraphFive, paragraphSix, paragraphSeven, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "I'm a web developer based in Vancouver, Canada."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "Here are a few technologies I've been working with recently:"}
                </p>
                <p className="about-wrapper__info-text" style={{visibility: 'hidden'}}>
                  {paragraphThree || 'blank line'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFour || 'WordPress'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphFive || 'JavaScript'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphSix || 'React'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphSeven || 'Node.js'}
                </p>
                {/* {resume && (
                  <span className="mt-3 d-flex">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )} */}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
