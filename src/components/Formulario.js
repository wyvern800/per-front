import { Button } from "react-bootstrap";
import React from "react";

import Form from 'react-bootstrap/Form'

export default function Formulario() {
  return (
    <>
    <section className="sectionBeco">
      <div className="arroba">
      <Form>
      <Form.Group>
        <Form.Control size="lg" type="text" placeholder="Large text" />
      </Form.Group>
      <Button variant="success">Success</Button>
      </Form>
      </div>
      </section>
    </>
  );
}
