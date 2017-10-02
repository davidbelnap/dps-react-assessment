import React, { Component } from 'react';
import { Header, Segment, Grid, Divider } from 'semantic-ui-react';
import axios from 'axios';

class Breweries extends Component {
		render() {
		return(
			<Segment basic>
				<Segment basic>
					<Header
						as='h1'
						textAlign='center'
						style={styles.header}>
							Beers
					</Header>
				</Segment>
				<Segment inverted>
		      <Grid>
		        <Grid.Column computer={8} tablet={8} mobile={16}>
							<Segment inverted>
								<Header
                as='h1'
                textAlign='center'
                style={styles.header}>
                	Brewery
                </Header>
                <Divider />
                <p>The names of breweries go here.</p>
							</Segment>
						</Grid.Column>
						<Grid.Column computer={8} tablet={8} mobile={16}>
							<Segment inverted>
								<Header
	              as='h1'
	              textAlign='center'
	              style={styles.header}>
	              	Location
	              </Header>
	              <Divider />
	              <p>The loactions of breweries go here.</p>
              </Segment>
            </Grid.Column>
					</Grid>
				</Segment>
			</Segment>
		)
	}
}

const styles = {
  iframe: {
    width: '100%',
    height: '100vh',
  },
  centered: {
    margin: '0 auto',
  },
  header: {
    color: '#01abff',
  }
}

export default Breweries;