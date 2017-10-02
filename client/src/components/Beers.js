import React, { Component } from 'react';
import { Header, Segment, Grid, Divider } from 'semantic-ui-react';
import axios from 'axios';
// import ReactMarkDown from 'react-markdown';


class Beers extends Component {
	state = { d: '' };

  componentDidMount() {
    axios.get('/api/all_beers')
  		.then( res => {
    		this.setState({ d: res.data.items })
  		})
  		.catch( error => {
    		console.log(error.response);
  		});
	}

 //  componentDidMount() {
 //    axios.get('/api/all_glassware')
 //  		.then( res => {
 //    		this.setState({ d: res.data.items })
 //  		})
 //  		.catch( error => {
 //    		console.log(error.response);
 //  		});
	// }

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
                	Beer
                </Header>
                <Divider />
                <p>The names of beers go here.</p>
								<p> This is supposed to be the data from the api => [ {this.state.d} ] </p>
							</Segment>
						</Grid.Column>
						<Grid.Column computer={8} tablet={8} mobile={16}>
							<Segment inverted>
								<Header
	              as='h1'
	              textAlign='center'
	              style={styles.header}>
	              	Glassware
	              </Header>
	              <Divider />
	              <p>The names of breweries go here.</p>
	              <p> This is supposed to be the data from the api => [ {this.state.d} ] </p>

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

export default Beers;