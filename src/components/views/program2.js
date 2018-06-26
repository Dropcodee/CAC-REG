import React from "react";
import { Grid, Card, Feed } from "semantic-ui-react";
import "./views.css";

const SecondProgram = () => (
	<div className="second-bg">
		<Grid columns={3} container stackable className="main-wrapper">
			<Grid.Row>
				<Grid.Column>
					<Card id="card-wrapper">
						<Card.Content>
							<Card.Header>Thursday Activity</Card.Header>
						</Card.Content>
						<Card.Content>
							<Feed>
								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/jenny.jpg" />
									<Feed.Content>
										<Feed.Date content="Hour Of Mercy" />
										<Feed.Summary>
											Join Us from the hour of <a> 6:00AM - 7:30AM</a>
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>

								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/molly.png" />
									<Feed.Content>
										<Feed.Date content="Councelling Hour" />
										<Feed.Summary>
											Meet our father for councelling from the hour of{" "}
											<a> 10:00AM - 3:00PM</a>
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>

								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/elliot.jpg" />
									<Feed.Content>
										<Feed.Date content="Choir Practice" />
										<Feed.Summary>
											Choir practice holds from the hour of <a> 5:00PM</a>
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>

								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/elliot.jpg" />
									<Feed.Content>
										<Feed.Date content="Night Vigil" />
										<Feed.Summary>
											Night with the King, breakthrough prayer every 2nd friday
											of the month from the hour of <a> 11PM </a>
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
							<Card.Header>Saturday Activity</Card.Header>
						</Card.Content>
						<Card.Content>
							<Feed>
								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/jenny.jpg" />
									<Feed.Content>
										<Feed.Date content=" Choir Practice" />
										<Feed.Summary>
											Youth Choir practice comes up every 3rd saturday, Choir
											practice involves all members on every other Saturday.
											<a> Time:5:00PM </a>
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>

								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/molly.png" />
									<Feed.Content>
										<Feed.Date content="Usher's Meeting" />
										<Feed.Summary>
											Ushers meeting comes up every today
											<a> 5:00PM - 6:00PM </a>
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
							<Card.Header>Sunday Activity</Card.Header>
						</Card.Content>
						<Card.Content>
							<Feed>
								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/jenny.jpg" />
									<Feed.Content>
										<Feed.Date content="BreakFast Prayer" />
										<Feed.Summary>
											Our BreakFast prayer comes up on Sundays <a> 7:00AM</a>
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>

								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/molly.png" />
									<Feed.Content>
										<Feed.Date content="Sunday School Class" />
										<Feed.Summary>
											Starting from <a> 8:00AM - 9:00AM</a>
										</Feed.Summary>
									</Feed.Content>
								</Feed.Event>

								<Feed.Event>
									<Feed.Label image="/assets/images/avatar/small/elliot.jpg" />
									<Feed.Content>
										<Feed.Date content="Divine Sunday Service" />
										<Feed.Summary>
											Come and worship him in truth and in spirit, Time:{" "}
											<a>9:00AM - 11:30AM</a>
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

export default SecondProgram;
