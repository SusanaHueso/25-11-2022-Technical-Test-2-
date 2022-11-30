import React from "react";
import "./Home.css";
import Card from "react-bootstrap/Card";
import image from "../../images/image.jpg";

import { Table } from "react-bootstrap";
export const Home = () => {
  return (
    <div className="homeDesign" style={{ backgroundImage: `url(${image})` }}>
      <Table>
        <Card className="homeCard">
          <Card.Body>
            <Card.Title>
              <h1>
                <b>Tasty Recipes</b>
              </h1>
            </Card.Title>
          </Card.Body>
        </Card>
      </Table>
    </div>
  );
};
