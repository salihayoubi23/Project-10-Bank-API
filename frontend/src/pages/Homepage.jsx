import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import "../styles/main.css";
export default function Homepage() {
  return (
    <>
      <Nav isAuthenticated={false}/>
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
}