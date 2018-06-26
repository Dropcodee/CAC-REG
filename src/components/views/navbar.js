import React from "react";
import { Segment, Menu, Responsive } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "name"
    };
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <Responsive>
          <Segment inverted>
            <Menu inverted>
              <Menu.Item
                position="right"
                as={Link}
                to="/"
                name="Home"
                active={activeItem === "Home"}
                onClick={this.handleClick}
              />

              <Menu.Item
                as={Link}
                to="/Register"
                name="Register"
                active={activeItem === "Register"}
                onClick={this.handleClick}
              />
            </Menu>
          </Segment>
        </Responsive>
      </div>
    );
  }
}

export default Navbar;
