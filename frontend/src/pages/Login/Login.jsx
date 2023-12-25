import React from "react";
import Nav from "../../components/Nav";
import ConnectionForm from "../../components/ConnectionForm";
import Footer from "../../components/Footer";
import "../../styles/Homepage.css";
export default function Login() {
  return (
    <>
      <Nav isAuthenticated = {false}/>
      <ConnectionForm />
      <Footer />
    </>
  );
}
