import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Team = () => {
  const teamMembers = [
    {
      name: 'Full Name',
      designation: 'Designation',
      imgSrc: 'img/team-1.jpg',
    },
    {
      name: 'Full Name',
      designation: 'Designation',
      imgSrc: 'img/team-2.jpg',
    },
    {
      name: 'Full Name',
      designation: 'Designation',
      imgSrc: 'img/team-3.jpg',
    },
    {
      name: 'Full Name',
      designation: 'Designation',
      imgSrc: 'img/team-4.jpg',
    },
  ];

  const renderTeamMember = (member, index) => (
    <Col key={index} lg={3} md={6} className="wow fadeInUp" data-wow-delay={`${index * 0.3}s`}>
      <div className="rounded shadow overflow-hidden">
        <div className="position-relative">
          <img className="img-fluid" src={member.imgSrc} alt="" />
          <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
            <a className="btn btn-square btn-primary mx-1" href="#"><FaFacebookF /></a>
            <a className="btn btn-square btn-primary mx-1" href="#"><FaTwitter /></a>
            <a className="btn btn-square btn-primary mx-1" href="#"><FaInstagram /></a>
          </div>
        </div>
        <div className="text-center p-4 mt-3">
          <h5 className="fw-bold mb-0">{member.name}</h5>
          <small>{member.designation}</small>
        </div>
      </div>
    </Col>
  );

  return (
    <section className="bg-light py-5">
      <Container>
        <Row>
          {teamMembers.map((member, index) => renderTeamMember(member, index))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;