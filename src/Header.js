import React from 'react';
import {
    Container,
    Grid,
    Button,
    Header
} from 'semantic-ui-react'

const AppFooter = () => (
    <div className="appHeader">
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column floated='left' width={3}>
                        <div className="logo"></div>
                    </Grid.Column>
                    <Grid.Column className="appTitle" textAlign={"center"} width={10}>
                        <Header as='h2'>Internet Banking</Header>
                    </Grid.Column>
                    <Grid.Column floated='right' className="appLogout" width={3}>
                        <Button color='purple'><b>Logout</b></Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </Container>
    </div>
);

export default AppFooter;
