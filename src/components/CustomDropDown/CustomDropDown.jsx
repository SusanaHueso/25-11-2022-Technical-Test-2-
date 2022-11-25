import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import "./CustomDropDown.css";
export const CustomDropdown = (props) => {
  return (
    <Container>
      <Dropdown as={ButtonGroup}>
        <Button href="/" variant="success" className="dropDownDesign">
          {props.title}
        </Button>
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item href="/">{props.option1}</Dropdown.Item>
          <Dropdown.Item href="/Body">{props.option2}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};
