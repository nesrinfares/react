import React from 'react'
import Card from 'react-bootstrap/Card';

function About() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src="nesrine.jpeg"  alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>I'M DEVELOPEUSE</Card.Title>
        <Card.Text>
        Je suis une Actuellement étudiante en deuxième
                    année master commerce électronique à l'institut supérieur de
                    gestion de gabes
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default About
