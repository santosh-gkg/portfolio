import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Santosh Kumar </span>
            from <span className="purple"> Delhi, India.</span>
            <br />
            I am currently doing my MSc in AI & ML from IIIT Lucknow.
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
            <br /> */}
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Smart AI Solutions
            </li>
            <li className="about-activity">
              <ImPointRight /> Social welfare activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Visiting new places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Valuable nuts like almonds, macadamias, walnuts, coconuts, etc. take a long time to fructify. Anything Valuable takes a little time to come into existence. Therefore there is no harm in waiting for the best thing."{" "}
          </p>
          <footer className="blockquote-footer">Sriila Prabhupada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
