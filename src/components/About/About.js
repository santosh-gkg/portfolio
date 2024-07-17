import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          Work <strong className="purple">Experience </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ExperienceCard
              title="LLMOPs Internship"
              company="Startup"
              duration="( Apr 2024 - Present): "
              description="Leading a team of LLM developers to build an LLM Agent for automating bookkeeping in Accounting."
              techStack="LLM Agents, LLM Finetuning, RAG pipelines, FastAPI, Accounting"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              title="MLOps Intern"
              company="Ayudh AI "
              duration="( Mar 2024 - Apr 2024): "
              description="Developed and deployed a RAG-based system for enterprises. Implemented UI, authentication, and managed the development process."
              techStack="Frontend development, ChromaDB, Database management, Ngrok servers, Git, LLM Inference server, Hugging Face, LLMs"
            />
          </Col>
          <Col md={4} className="project-card">
            <ExperienceCard
              title="Backend Developer"
              company="Natureof3Laws"
              duration=" (Oct 2021 - Oct 2022): "
              description="Built an end-to-end website with WordPress hosted on AWS server. Worked as both frontend and backend developer."
              techStack="AWS (EC2, S3), Cloudflare, WordPress, Linux command-line"
            />
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">Achievements</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={12}>
            <ul>
              <li>Secured 35th Rank in the All India Hackathon AI ARENA 2.0</li>
              <li>IIT JAM All India Rank: 804</li>
              <li>Solved 300+ coding questions on various platforms, including Coding Ninja and Leetcode</li>
            </ul>
          </Col>
        </Row>

        <Github />
      </Container>
    </Container>
  );
}

export default About;