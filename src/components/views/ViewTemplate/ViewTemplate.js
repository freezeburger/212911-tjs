import React from 'react';
import PropTypes from 'prop-types';
import './ViewTemplate.css';

import { Container, Navbar, Image, Nav } from '../../base';
import { Link } from "react-router-dom";

const ViewTemplate = props => (
  <div className="ViewTemplate" data-testid="ViewTemplate">

    <Navbar bg="dark">
      <Container>
        <Image src="https://www.neo-soft.fr/assets/front/logo-neo-soft-groupe-bleu.png" roundedCircle />
        <Navbar.Brand className="text-white">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>

    <Navbar bg="info">
      <Container>
        <Nav defaultActiveKey="/home" as="ul">
          
          <Nav.Item as="li">
            <Link to="/home">Home</Link>
          </Nav.Item>

          <Nav.Item as="li"> |  </Nav.Item>

          <Nav.Item as="li">
            <Link to="/list">List</Link>
          </Nav.Item>

          <Nav.Item as="li"> |  </Nav.Item>

          <Nav.Item as="li">
            <Link to="/detail">Detail</Link>
          </Nav.Item>
          
        </Nav>
      </Container>
    </Navbar>
    <br />
    <Container>
      <main>
        {props.children}
      </main>
    </Container>

    <Navbar bg="dark" fixed="bottom">
      <Container>
        Footer
      </Container>
    </Navbar>

  </div>
);

ViewTemplate.propTypes = {};

ViewTemplate.defaultProps = {};

export default ViewTemplate;
