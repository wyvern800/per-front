import React from "react";

// import { Container } from './styles';

export default function Header({ name, children }) {
  return (
    <header>
      <h1>{name}</h1>
      {children}
    </header>
  );
}
