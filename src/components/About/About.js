import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import image from '../../images/pic of me (2).jpeg'
import './About.css'

export default function About() {
  return (
    <section className="about">
      <article className="bg-purple p-4 mb-5 text-white">
        <h1 className='text-center'>About the Developer</h1>
      </article>
      <Container>
        <Row>
          <Col lg={6} className='mt-5'>
            <img src={image} alt='Spencer Pearson, React Web Developer' className='profilePic' />
          </Col>
          <Col lg={6} className='about-text mt-5'>
            <h3>Welcome to my app!</h3>
            <p>
              Hey, I'm Will March. This ReactJS ToDo Site is one of many projects I've created during my time at Centriq training. To see other projects I've created, please see  <a href="github.com/willmarch1" target="_blank" rel="noreferrer" alt='My GitHub'>my github.</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
