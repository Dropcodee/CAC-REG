import React from "react";
import { Form, Button, Card, Container } from "semantic-ui-react";
import Validator from "validator";
import ErrorMsg from "../errorMsg";
import Navbar from "../navbar";
import "../views.css";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        firstName: "",
        lastName: "",
        email: "",
        Address: "",
        dateOfBirth: ""
      },
      errors: {},
      loading: false
    };
  }
  onInputChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
  };

  validate = data => {
    const errors = {};
    if (data.firstName === "") {
      errors.firstName = "First Name cant be blank";
    }
    if (data.lastName === "") {
      errors.lastName = "Last Name cant be blank";
    }
    if (!Validator.isEmail(data.email)) {
      errors.email = "Sorry Email is Invalid";
    }
    if (data.Address === "") {
      errors.Address = "Please address cant be blank";
    }

    return errors;
  };
  render() {
    const { data, errors } = this.state;
    return (
      <div className="register-wrapper">
        <Navbar />
        <Container className="form-wrapper">
          <Card id="card-wrapper" className="form-edit">
            <Card.Content>
              <Form onSubmit={this.onSubmit}>
                <Form.Field error={!!errors.firstName}>
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    placeholder="Enter First Name"
                    name="firstName"
                    value={data.firstName}
                    onChange={this.onInputChange}
                  />
                  {errors.firstName && <ErrorMsg text={errors.firstName} />}
                </Form.Field>

                <Form.Field error={!!errors.lastName}>
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    placeholder="Enter Your Last Name"
                    name="lastName"
                    value={data.lastName}
                    onChange={this.onInputChange}
                  />
                  {errors.lastName && <ErrorMsg text={errors.lastName} />}
                </Form.Field>

                <Form.Field error={errors.email}>
                  <label htmlFor="email">Email:</label>
                  <input
                    placeholder="JohnDoe@example.com"
                    name="email"
                    value={data.email}
                    onChange={this.onInputChange}
                  />
                  {errors.email && <ErrorMsg text={errors.email} />}
                </Form.Field>

                <Form.Field error={!!errors.Address}>
                  <label htmlFor="Address">Address:</label>
                  <input
                    placeholder="Enter Address"
                    name="Address"
                    value={data.Address}
                    onChange={this.onInputChange}
                  />
                  {errors.Address && <ErrorMsg text={errors.Address} />}
                </Form.Field>

                <Form.Field>
                  <label htmlFor="dateOfBirth">Date Of Birth</label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={data.dateOfBirth}
                  />
                </Form.Field>
                <Button type="submit" className="btn-style">
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Container>
      </div>
    );
  }
}
export default Register;
