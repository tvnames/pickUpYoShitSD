import React from "react";
import { Nav } from "react-bootstrap";

<Nav defaultActiveKey="/home" className="flex-column">
  <Nav.Link href="/home">Login</Nav.Link>
  <Nav.Link eventKey="link-1">Sign up</Nav.Link>
  <Nav.Link eventKey="link-2">Events</Nav.Link>
  <Nav.Link eventKey="link-3">join us!</Nav.Link>
</Nav>;

export default Nav;
