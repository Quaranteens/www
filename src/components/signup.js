import React, {useState} from "react";
import swal from "sweetalert";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FaQuestionCircle } from 'react-icons/fa';
import serialize from "../util/serialize";

const SignupForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      const postURL = `https://docs.google.com/forms/d/e/1FAIpQLScTKQ9YHAMJqLxgVztjnmp5b3kfaoSgKl_KwaF4VeFj2-tRhw/formResponse?${serialize(form)}`;
      const config = {
        method: 'GET',
        mode: 'no-cors',
      };

      const formRequest = new Request(postURL, config);
      fetch(formRequest).then(res => {
        if (res.status === 0 || res.status === 200) {
          swal("Success!", "You're signed up!", "success");
        } else {
          throw new Error("Request failed!")
        }
      }).catch(error => {
        swal("Oh no!", error, "error");
        console.error(error);
      });
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="entry.1677400286"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="entry.993248599"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>School Email</Form.Label>
          <InputGroup>
            <Form.Control
              type="email"
              placeholder="someone@school.edu"
              pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:edu)\b"
              name="entry.1555601280"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid school email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>How would you like to participate?</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Graduate"
            name="entry.1806088227"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please select at least one option.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>
            Timezone <OverlayTrigger
              placement="right"
              overlay={
                <Tooltip>
                  Why are we asking for this? Knowing your timezone will let us batch you with other graduates to make the ceremony as seamless as possible!
                </Tooltip>
              }
            >
              <FaQuestionCircle />
            </OverlayTrigger>
          </Form.Label>
          <Form.Control 
            as="select"
            placeholder="GMT - 5"
            name="entry.1538936380"
            required 
          >
            <option value="">-- Select a timezone --</option>
            <option>GMT-11:00 (Midway Islands Time)</option>
            <option>GMT-10:00 (Hawaii Standard Time)</option>
            <option>GMT-9:00 (Alaska Standard Time)</option>
            <option>GMT-8:00 (Pacific Standard Time)</option>
            <option>GMT-7:00 (Phoenix Standard Time)</option>
            <option>GMT-7:00 (Mountain Standard Time)</option>
            <option>GMT-6:00 (Central Standard Time)</option>
            <option>GMT-5:00 (Eastern Standard Time)</option>
            <option>GMT-5:00 (Indiana Eastern Standard Time)</option>
            <option>GMT-4:00 (Puerto Rico and US Virgin Islands Time)</option>
            <option>GMT-3:30 (Canada Newfoundland Time)</option>
            <option>GMT-3:00 (Argentina Standard Time)</option>
            <option>GMT-3:00 (Brazil Eastern Time)</option>
            <option>GMT-1:00 (Central African Time)</option>
            <option>GMT+0:00 (Greenwich Mean Time)</option>
            <option>GMT+1:00 (European Central Time)</option>
            <option>GMT+2:00 (Eastern European Time)</option>
            <option>GMT+2:00 (Egypt Standard Time)</option>
            <option>GMT+3:00 (Eastern African Time)</option>
            <option>GMT+3:30 (Middle East Time)</option>
            <option>GMT+4:00 (Near East Time)</option>
            <option>GMT+5:00 (Pakistan Lahore Time)</option>
            <option>GMT+5:30 (India Standard Time)</option>
            <option>GMT+6:00 (Bangladesh Standard Time)</option>
            <option>GMT+7:00 (Vietnam Standard Time)</option>
            <option>GMT+8:00 (China Taiwan Time)</option>
            <option>GMT+9:00 (Japan Standard Time)</option>
            <option>GMT+9:30 (Australia Central Time)</option>
            <option>GMT+10:00 (Australia Eastern Time)</option>
            <option>GMT+11:00 (Solomon Standard Time)</option>
            <option>GMT+12:00 (New Zealand Standard Time)</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select a timezone.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">I'm Down!</Button>
    </Form>
  );
};

export default SignupForm;