import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SliderCards = ({ title, Rating, button, months, courseType }: any) => {
  return (
    <>
 
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Title>{courseType}</Card.Title>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{months}</Card.Text>
          <div className="">
            <Button variant="primary">{button}</Button>
            <p>{Rating}</p>
          </div>
        </Card.Body>
      </Card>
      
    </>
  );
};

export default SliderCards;
