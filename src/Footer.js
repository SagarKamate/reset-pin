import React from 'react';
import {
    Container,
    Grid,
    Label
} from 'semantic-ui-react'

const AppHeader = () => (
    <div className="appFooter">
        <Container>
            <Grid>
                <Grid.Row floated={"right"}>
                    <Grid.Column >
                        <Label className="copyright">©2020 Nationwide Building Society</Label>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    </div>
);

export default AppHeader;
