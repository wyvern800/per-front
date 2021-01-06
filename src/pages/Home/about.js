import React from "react";
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <>
      <Container>
        <div className="grid">
          <header>Header</header>

          <aside className="sidebar-left">Left Sidebar</aside>

          <article>Article</article>

          <aside className="sidebar-right">Right Sidebar</aside>

          <footer>Footer</footer>
        </div>
      </Container>
    </>
  );
}
