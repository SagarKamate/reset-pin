import React, { Component } from 'react';

import {
    Container,
    Menu,
    Segment,
    Card,
    Header,
    Icon,
    List,
    Divider,
} from 'semantic-ui-react'
import Reset from './Reset.js';

class Manage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeItem: "Manage settings"
        }
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name, showResetPIN: false })

    handleResetPINClick = (e) => this.setState({ showResetPIN: true })

    render() {
        const { activeItem } = this.state

        return (
            <div className="appContent">
                <br />
                <br />
                <Container>
                    <Menu tabular attached={"top"}>
                        <Menu.Item
                            name='View Acccounts'
                            active={activeItem === 'View Acccounts'}
                        />
                        <Menu.Item
                            name='Move money'
                            active={activeItem === 'Move money'}
                        />
                        <Menu.Item
                            name='Manage settings'
                            active={activeItem === 'Manage settings'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Browse Products'
                            active={activeItem === 'Browse Products'}
                            //onClick={this.handleItemClick}
                        />
                    </Menu>

                    {
                        !this.state.showResetPIN
                            ?
                            <Segment attached={"bottom"}>
                                <div style={{ marginTop: '10px' }}>
                                    <Header as='h2'>My details and settings</Header>
                                </div>
                                <Divider inverted style={{ borderWidth: '2px' }} />
                                <div style={{ marginTop: '10px' }}>
                                    <Header as='h4'>Review or update your personal information</Header>
                                </div>
                                <br />
                                <Card.Group>
                                    <Card fluid>
                                        <Card.Content>
                                            <Header as='h2'>
                                                <Icon name='user' />
                                                <Header.Content style={{ color: '#dc291e' }}>My personal details</Header.Content>
                                            </Header>
                                            <Card.Header>View or change the following</Card.Header>
                                            <Card.Description>
                                                <List as='ul'>
                                                    <List.Item as='li'>Name</List.Item>
                                                    <List.Item as='li'>Address and phone numbers</List.Item>
                                                    <List.Item as='li'>Email address</List.Item>
                                                    <List.Item as='li'>Managing preferences</List.Item>
                                                </List>
                                                <a >View or change personal details</a>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Group>
                                <Card.Group itemsPerRow={2}>
                                    <Card>
                                        <Card.Content>
                                            <Header as='h2'>
                                                <Icon name='setting' />
                                                <Header.Content style={{ color: '#dc291e' }}>My site settings</Header.Content>
                                            </Header>
                                            <Card.Header>View or change the following</Card.Header>
                                            <Card.Description>
                                                <List as='ul'>
                                                    <List.Item as='li'>Statement settings</List.Item>
                                                    <List.Item as='li'>Start page</List.Item>
                                                    <List.Item as='li'>Color theme</List.Item>
                                                    <List.Item as='li'>Greeting</List.Item>
                                                    <List.Item as='li'>Account descriptions</List.Item>
                                                </List>
                                                <a style={{ color: '#1169c4' }}>View or change my site details</a>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                    <Card>
                                        <Card.Content>
                                            <Header as='h2'>
                                                <Icon name='setting' />
                                                <Header.Content style={{ color: '#dc291e' }}>My security</Header.Content>
                                            </Header>
                                            <Card.Header>Manage your security settings</Card.Header>
                                            <Card.Description>
                                                <List as='ul'>
                                                    <List.Item as='li'>Change your passnumber</List.Item>
                                                    <List.Item as='li'>Change your memorable data</List.Item>
                                                    <List.Item as='li'>Order a new card reader</List.Item>
                                                    <List.Item as='li'>Report a lost or stolen card, passbook or checkbook</List.Item>
                                                    <List.Item as='li'><a onClick={this.handleResetPINClick} style={{ color: '#1169c4' }}>Reset PIN</a></List.Item>
                                                </List>
                                                <a style={{ color: '#1169c4' }}>View or change my security settings</a>
                                            </Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Group>
                            </Segment>
                            : 
                            <Reset/>
                    }
                    
                    <br />
                </Container>
            </div>
        )
    }

}
export default Manage;
