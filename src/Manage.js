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

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showMobileMessage: false,
            showEmailMessage: false,
            stepTitle: "Preference",
            stepCompleted: "",
            activeItem: "Manage settings",
            timerTick: false,
            resetTimer: 60,
            restartTimer: 100000,
            renderTime: value => {
                if (value === 0) {
                    return (
                        <div className="timer">
                            Time up
                        </div>
                    );
                }

                return (
                    <div className="timer">
                        <div className="otpValue">{value}</div>
                    </div>
                )
            }
        }
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleStepTitleChange = this.handleStepTitleChange.bind(this);
        this.handleNextStepClick = this.handleNextStepClick.bind(this);
        this.handleBackStepClick = this.handleBackStepClick.bind(this);
        this.timerTickComplete = this.timerTickComplete.bind(this);
        this.handleResendClick = this.handleResendClick.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleStepTitleChange = (e, { title }) => this.setState({ stepTitle: title })

    timerTickComplete = () => {
        return [
            true,
            this.state.restartTimer
        ];
    }

    handleResendClick(e) {
        this.setState({
            timerTick: true,
            resetTimer: 60,
            restartTimer: 0
        });
    }

    handleNextStepClick(e) {
        if (this.state.stepTitle === "Preference") {
            this.setState({
                stepTitle: "Debit Card",
                stepCompleted: "Preference"
            })
        }
        else if (this.state.stepTitle === "Debit Card") {
            this.setState({
                stepTitle: "OTP",
                timerTick: true,
                stepCompleted: "Debit Card"
            })
        }
        else if (this.state.stepTitle === "OTP") {
            this.setState({
                stepTitle: "Reset PIN",
                stepCompleted: "OTP"
            })
        }
        else if (this.state.stepTitle === "Reset PIN") {
            this.setState({
                stepTitle: "Complete",
                stepCompleted: "Reset PIN"
            })
        }
    }

    handleBackStepClick(e) {
        if (this.state.stepTitle === "Reset PIN") {
            this.setState({ stepTitle: "OTP" })
        }
        else if (this.state.stepTitle === "OTP") {
            this.setState({ stepTitle: "Debit Card" })
        }
        else if (this.state.stepTitle === "Debit Card") {
            this.setState({ stepTitle: "Preference" })
        }
    }

    handleMobileChange(event) {
        this.setState(oldState => ({ showMobileMessage: !oldState.showMobileMessage }));
    }

    handleEmailChange(event) {
        this.setState(oldState => ({ showEmailMessage: !oldState.showEmailMessage }));
    }

    render() {
        const { activeItem } = this.state

        const cardOptions = [
            { key: '4123', value: '4123', flag: 'af', text: 'XXXX XXXX 4123 FlexAccount' },
            { key: '7921', value: '7921', flag: 'ax', text: 'XXXX XXXX 7921 FlexPlus' },
            { key: '5633', value: '5633', flag: 'al', text: 'XXXX XXXX 5633 FlexDirect' },
            { key: '9011', value: '9011', flag: 'dz', text: 'XXXX XXXX 9011 FlexStudent' },
            { key: '2952', value: '2952', flag: 'as', text: 'XXXX XXXX 2952 FlexOne' }
        ]

        return (
            <div className="appContent">
                <br />
                <br />
                <Container>
                    <Menu tabular attached={"top"}>
                        <Menu.Item
                            name='View Acccounts'
                            active={activeItem === 'View Acccounts'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Move money'
                            active={activeItem === 'Move money'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Manage settings'
                            active={activeItem === 'Manage settings'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Browse Products'
                            active={activeItem === 'Browse Products'}
                            onClick={this.handleItemClick}
                        />
                    </Menu>

                    <Segment attached={"bottom"}>
                        <div style={{marginTop:'10px' }}>
                            <Header as='h2'>My details and settings</Header>
                        </div>
                        <Divider inverted style={{ borderWidth: '2px' }}/>
                        <div style={{ marginTop: '10px' }}>
                            <Header as='h4'>Review or update your personal information</Header>
                        </div>
                        <br/>
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
                                            <List.Item as='li'>Reset PIN</List.Item>
                                        </List>
                                        <a href="/reset" style={{ color: '#1169c4' }}>View or change my security settings</a>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Card.Group>
                        <br />
                    </Segment>
                    <br />
                </Container>
            </div>
        )
    }

}
export default Home;
