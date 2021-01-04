import React from "react";

import Form from "react-bootstrap/Form";

// import { Container } from './styles';

export default function Home() {
  return (
    <>
      <div className="arroba">
        <Form>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Large text" />
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
