import React from "react";
import { Grid, Card, Image, Icon } from "semantic-ui-react";
import "./views.css";
import avatar from "./avatar.png";

const ThirdProgram3 = () => (
	<div className="third-bg">
		<Grid columns={3} container stackable className="main-wrapper">
			<Grid.Row>
				<Grid.Column>
					<Card id="card-wrapper">
						<Image src={avatar} />
						<Card.Content>
							<Card.Header>Matthew</Card.Header>
							<Card.Meta>
								<span className="date">Joined in 2015</span>
							</Card.Meta>
							<Card.Description>
								Matthew is a musician living in Nashville.
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<a>
								<Icon name="user" />
								22 Friends
							</a>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card id="card-wrapper">
						<Image src={avatar} />
						<Card.Content>
							<Card.Header>Matthew</Card.Header>
							<Card.Meta>
								<span className="date">Joined in 2015</span>
							</Card.Meta>
							<Card.Description>
								Matthew is a musician living in Nashville.
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<a>
								<Icon name="user" />
								22 Friends
							</a>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card id="card-wrapper">
						<Image src={avatar} />
						<Card.Content>
							<Card.Header>Matthew</Card.Header>
							<Card.Meta>
								<span className="date">Joined in 2015</span>
							</Card.Meta>
							<Card.Description>
								Matthew is a musician living in Nashville.
							</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<a>
								<Icon name="user" />
								22 Friends
							</a>
						</Card.Content>
					</Card>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</div>
);

export default ThirdProgram3;
