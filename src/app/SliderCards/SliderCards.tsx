import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const SliderCards = ({ title, Rating, button, months, courseType }: any) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Title style={{ color: "black" }}>{courseType}</Card.Title>
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{title}</Card.Title>
          <Card.Text>{months}</Card.Text>
          <div className="">
            <Button variant="primary">{button}</Button>
            <p style={{ color: "black" }}>{Rating}</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SliderCards;
