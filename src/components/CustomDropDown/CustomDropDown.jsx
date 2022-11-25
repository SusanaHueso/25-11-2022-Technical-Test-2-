import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Dropdown, Button, ButtonGroup } from "react-bootstrap";
import "./CustomDropDown.css";
export const CustomDropdown = (props) => {
  return (
    <Container>
      <Dropdown as={ButtonGroup}>
        <Button variant="success" className="dropDownDesign">
          {props.title}
        </Button>
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">{props.option1}</Dropdown.Item>
          <Dropdown.Item href="#/action-2">{props.option2}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
};
