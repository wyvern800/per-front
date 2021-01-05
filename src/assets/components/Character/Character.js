import React from "react";

// import { Container } from './styles';

export default function Character({ name, children }) {
  return (
    <header>
      <h1>{name}</h1>
      {children}
    </header>
  );
}
