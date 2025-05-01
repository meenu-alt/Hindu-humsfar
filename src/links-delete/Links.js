import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Links = () => {
  const links = [
    { path: "/create-account/", label: "Create Account" },
    { path: "/sing-up/", label: "Signup" },
    { path: "/verify-account/", label: "Verify Account" },
    { path: "/success/", label: "Success" },
    { path: "/create-profile/", label: "Create Profile" },
    { path: "/login/", label: "Login" },
    { path: "/fogot-password/", label: "Forgot Password" },
    { path: "/reset-email/", label: "Reset Email" },
    { path: "/reset-password/", label: "Reset Password" },
    { path: "/recently-joined-matches/", label: "Recently Joined" },
    { path: "/search-id", label: "Search by ID" },
    { path: "/custom-search", label: "Custom Search" },
    { path: "/profile-page", label: "Profile Page" },
    { path: "/my-profile", label: "My Profile" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/report-misuse-form", label: "Report Misuse" },
    { path: "/search-partner", label: "Search Partner" },
    { path: "/search-partner-id", label: "Search Partner ID" },
    { path: "/edit-profile-form", label: "Edit Profile" },
    { path: "/chat", label: "Chat" },
    { path: "/notifications", label: "Notifications" },
    { path: "/privacy-policy", label: "Privacy Policy" },
    { path: "/terms-of-use", label: "Terms of Use" },
    { path: "/pricing", label: "pricing" },
    { path: "/how-to-use", label: "How to use" },
    { path: "/blog", label: "blog" },
    { path: "/blog-post", label: "blog-post" },
  ];


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" target="_blank" rel="noopener noreferrer">Hindu Humsafar</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="me-auto flex-wrap">
            {links.map((link, idx) => (
              <Nav.Link
                as="a"
                key={idx}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Links;
