import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import counselling_bot from "../../Assets/Projects/counselling_bot.jpg";
import chat_db from "../../Assets/Projects/chat_db.jpg";
import rag from "../../Assets/Projects/rag.jpg";
import anywhere from "../../Assets/Projects/anywhere.jpg";
import melodify from "../../Assets/Projects/molodify.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={counselling_bot}
              isBlog={false}
              title="College Counselling Chatbot"
              description="Developed 'Counselling Chatbot,' a RAG-based Chatbot for QA with LLMs for college counselling. Utilized Langchain, Groq API, RAG, and Web scraping techniques to create an interactive chatbot system."
              ghLink="https://github.com/santosh-gkg/counselliing_chatbot"
              demoLink="https://www.linkedin.com/posts/santosh-gkg_chatbot-for-college-counselling-well-yes-activity-7203761625827340288-S7H2?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={melodify}
              isBlog={false}
              title="Melodify"
              description="A web application that transforms text prompts into personalized songs using OpenAI's GPT-3.5 Turbo for lyric generation and HuggingFace's Bark Model for audio synthesis. Built with Python and Streamlit, Melodify represents a fusion of creativity and AI in music creation."
              ghLink="https://github.com/santosh-gkg/melody-streamlit"
              demoLink="https://www.linkedin.com/posts/santosh-gkg_melodify-aiinmusic-techinnovation-activity-7153258154124804096-HZ4n?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rag}
              isBlog={false}
              title="Advanced RAG Website"
              description="Developed a website using ReactJS and FastAPI backend. Implemented Advanced RAG techniques like Self-query retriever and Multi Query retriever for an enhanced RAG pipeline. Utilized ChromaDB and LLM for improved information retrieval and generation."
              ghLink="https://github.com/santosh-gkg/rag-geeta"
              demoLink="https://www.linkedin.com/posts/santosh-gkg_my-first-full-stack-advanced-rag-project-activity-7218704701100343297-XUpJ?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={anywhere}
              isBlog={false}
              title="AnywhereLLM"
              description="Developed AnywhereLLM, a tool that allows users to harness the power of LLMs anywhere in the system, including WhatsApp and Notepad. This project demonstrates the versatility of LLM integration in various applications."
              ghLink="https://github.com/santosh-gkg/AnywhereLLM"
              demoLink="https://www.linkedin.com/posts/santosh-gkg_use-llms-anywhere-hi-today-i-want-to-activity-7186614580742098944-WTK3?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat_db}
              isBlog={false}
              title="Chat with Databases and Gmail"
              description="Developed LLM Agents to interact with Gmail and Databases, enabling users to send or read emails and chat with their database. This project showcases the integration of LLMs with everyday applications."
              ghLink="https://github.com/yourusername/chat-database-gmail"
              // demoLink="https://sgkg.tech/chat-database-gmail"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;