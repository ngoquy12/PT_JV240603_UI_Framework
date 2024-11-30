import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

export default function DemoReactBootstrap() {
  return (
    <div className="d-flex gap-2">
      <Button variant="primary">Primary</Button>

      <Dropdown>
        <Dropdown.Toggle variant="Success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button type="button" className="btn btn-warning">
        Warning
      </button>

      <Spinner animation="grow" />
    </div>
  );
}
