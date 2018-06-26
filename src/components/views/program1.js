import React from "react";
import { Grid, Card, Feed, Header } from "semantic-ui-react";

const FirstProgram = () => (
	<div className="first-bg">
		<Grid columns={3} container stackable className="main-wrapper">
			<Header as="h1" textAlign="center" id="header">
				Our Programs
			</Header>
			<Grid.Row>
				<Grid.Column>
					<Card id="card-wrapper">
						<Card.Content>
							<Card.Header>Monday Activity</Card.Header>
						</Card.Content>
						<Card.Content>
							<Feed>
								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/jenny.jpg" />
									<Feed.Content>
										<Feed.Date content="Faith Clinic" />
										<Feed.Summary>
											<a>Pregnant/Expectant</a> Mother, programs starts from
											9:00AM - 12 NOON
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>

								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/molly.png" />
									<Feed.Content>
										<Feed.Date content="Youth Felloship" />
										<Feed.Summary>
											<a>Champions Gathering.</a> Join us and Worship Him in
											truth
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>
							</Feed>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card id="card-wrapper">
						<Card.Content>
							<Card.Header>Tuesday Activity</Card.Header>
						</Card.Content>
						<Card.Content>
							<Feed>
								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/elliot.jpg" />
									<Feed.Content>
										<Feed.Date content="Total Victory" />
										<Feed.Summary>
											Join us for our early morning prayer from the hour of
											6:00AM - 7:30AM, Jesus is lord.
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>

								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/molly.png" />
									<Feed.Content>
										<Feed.Date content="Bible Study" />
										<Feed.Summary>
											Join us every evening for more of his word{" "}
											<a> digging deep in the word of God</a>.
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>
							</Feed>
						</Card.Content>
					</Card>
				</Grid.Column>

				<Grid.Column>
					<Card id="card-wrapper">
						<Card.Content>
							<Card.Header>Wednesday Activity</Card.Header>
						</Card.Content>
						<Card.Content>
							<Feed>
								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/jenny.jpg" />
									<Feed.Content>
										<Feed.Date content="Great Achievers" />
										<Feed.Summary>
											Women signs & wonders prayer program from the hour of
											9:00AM - 12:00 NOON
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>

								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/molly.png" />
									<Feed.Content>
										<Feed.Date content="Gboromiro" />
										<Feed.Summary>
											Men of great valour prayer program from the hour of 6:00PM
											- 8:00PM
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>
							</Feed>
						</Card.Content>
					</Card>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	</div>
);

FirstProgram.propTypes = {};

export default FirstProgram;
