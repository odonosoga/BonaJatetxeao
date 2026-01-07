// Contact.js - Traducido a inglés (solo textos visibles)
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import heroImg from "../../img/contact.png";
import "./contact.css";

const HeroReserva = () => (
  <section
    className="hero-reserva"
    style={{ backgroundImage: `url(${heroImg})` }}
  >
    <div className="hero-overlay">
      <Container className="h-100">
        <Row className="h-100 align-items-center justify-content-center">
          <Col md={8} className="text-center text-white">
            <h1 className="display-4 fw-bold mb-3">Make your inquiry</h1>
            <p className="lead mb-0">
              Write your idea, question or request and we will get in touch.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
);

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <HeroReserva />
      <section id="kontaktua" className="pb-2 contact-section">
        <Container>
          <Row className="g-5 justify-content-center">
            <Col lg={8}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4 p-lg-5">
                  <h5 className="fw-bold mb-4">Inquiry</h5>

                  <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group controlId="contactName">
                          <Form.Label className="fw-medium d-flex align-items-start">
                            Name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Your name"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter your name.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Group controlId="contactEmail">
                          <Form.Label className="fw-medium d-flex align-items-start">
                            Email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="email@example.com"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter a valid email.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="contactPhone">
                      <Form.Label className="fw-medium d-flex align-items-start">
                        Phone
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="666 123 456"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="contactReason">
                      <Form.Label className="fw-medium d-flex align-items-start">
                        Subject?
                      </Form.Label>
                      <Form.Select required>
                        <option value="">Choose an option</option>
                        <option>General information</option>
                        <option>Request an appointment</option>
                        <option>Quote or estimate</option>
                        <option>Other</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Please select the inquiry topic.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="contactMessage">
                      <Form.Label className="fw-medium d-flex align-items-start">
                        Message
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Your message..."
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please write the message.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      type="submit"
                      className="w-100 btn-contact py-3 fw-bold"
                    >
                      Send message
                    </Button>

                    <p
                      className="text-center text-muted mt-3 mb-0"
                      style={{ fontSize: "0.9rem" }}
                    >
                      We usually respond within 24-48 hours.
                    </p>
                  </Form>
                </Card.Body>
              </Card>

              <div className="text-center mt-4">
                <p
                  className="text-muted mb-1"
                  style={{ fontSize: "0.95rem" }}
                >
                  If you have any questions, feel free to write: we are here to help.
                </p>
                <p
                  className="text-muted mb-0"
                  style={{ fontSize: "0.85rem" }}
                >
                  Never share passwords or confidential data in this message.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
