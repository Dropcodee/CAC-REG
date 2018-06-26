import React from "react";
import { Header, Card } from "semantic-ui-react";
import "./views.css";

const Welcome = () => (
	<div className="word-wrapper">
		<Card stackable fluid color="orange" style={{ padding: "5em" }}>
			<Header as="h3" icon>
				<Header.Content style={{ padding: "1em" }}>Welcome Note</Header.Content>
				<p>
					{" "}
					Here, We love one another, as Jesus loves us, we make Aquaintances and
					exchange pleasantries with one another
				</p>
				<p>
					If you are worshiping with us for the first time, we welcome you in
					the name of our Lord and Saviour <a> JESUS CHRIST</a>. Please wait
					after the service for {"pastor's"} greeting and brief discussion.
					Thank you and God Bless You.
				</p>
			</Header>
		</Card>
	</div>
);
export default Welcome;
