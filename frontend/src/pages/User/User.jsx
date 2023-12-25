import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "../../styles/Homepage.css";
import UserHeader from "../../components/UserHeader";
import AccountsOverview from "../../components/AccountsOverview";
export default function User() {
  return (
    <>
      <Nav isAuthenticated={true} />
      <main className="main bg-dark">
        <UserHeader />
      <AccountsOverview />
      </main>
      <Footer />
    </>
  );
}
