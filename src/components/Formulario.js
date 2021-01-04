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
      </Form>
      </div>
      </section>
    </>
  );
}
