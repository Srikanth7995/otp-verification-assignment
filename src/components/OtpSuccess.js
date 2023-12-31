import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function OtpSuccess(props) {
  return (
    <Container className="mycontainer" fluid>
      <Row className="myrow" noGutters>
        <Col className="mycolumn" lg={3}></Col>
        <Col className="mycolumn midcolumn" lg={6}>
          <div id="innerBoxContainer">
            <div id="imagecontainer2">
              <img
                src="https://d33wubrfki0l68.cloudfront.net/e2fda0d48029d151397839e5b97b141fa5cecdc0/59961/assets/img/understand-technology.webp"
                style={{ height: "310px", width: "350px" }}
                alt="otp Success"
                id="imagepart1"
              />
             
            </div>

            <span id="welcome-text2">Welcome to AdmitKard</span>

            <span id="line-text1"> In order to provide you with </span>
            <span id="line-text2">a custom experience,</span>
            <span id="line-text3">we need to ask you a few questions.</span>

            <button id="getstartedbutton">Get Started</button>
            <div id="last-text">*This will only take 5 min.</div>
          </div>
        </Col>
        <Col className="mycolumn" lg={3}></Col>
      </Row>
    </Container>
  );
}

export default OtpSuccess;
