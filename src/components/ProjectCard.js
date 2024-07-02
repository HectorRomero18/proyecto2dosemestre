import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <Link to={link}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Link>
    </Col>
  )
}

