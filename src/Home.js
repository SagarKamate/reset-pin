import React, { Component } from 'react';

import {
    Container,
    Message,
    Dropdown,
    Menu,
    Label,
    Checkbox,
    Input,
    Button,
    Step,
    Segment,
    Form,
} from 'semantic-ui-react'

class Home extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            showMobileMessage: false,
            showEmailMessage: false,
            activeItem: 'View Acccounts' 
        }
        this.handleMobileChange = this.handleMobileChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleMobileChange(event) {
        this.setState(oldState => ({ showMobileMessage: !oldState.showMobileMessage }));
    }
    handleEmailChange(event) {
        this.setState(oldState => ({ showEmailMessage: !oldState.showEmailMessage }));
    }

    render() {
        const { activeItem } = this.state

        const cardOptions = [
            { key: '4123', value: '4123', flag: 'af', text: 'XXXX XXXX 4123 <br/> FlexAccount' },
            { key: '7921', value: '7921', flag: 'ax', text: 'XXXX XXXX 7921' },
            { key: '5633', value: '5633', flag: 'al', text: 'XXXX XXXX 5633' },
            { key: '9011', value: '9011', flag: 'dz', text: 'XXXX XXXX 9011' },
            { key: '2952', value: '2952', flag: 'as', text: 'XXXX XXXX 2952' }
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
                        <Message
                            info
                            icon='info circle'
                            header='Reset your debit card now easily'
                            list={[
                                'If you have mobile number registerred with Nationwide',
                                'If you have email id number registerred with Nationwide',
                                'If you do not have registered your mobile number or telephone number please Give us a call on  0800 30 20 11 (between 8am - 8pm).',
                            ]}
                        />
                        <br />

                        <Step.Group attached='top' widths={4}>
                            <Step link active icon='options' title='Preference' description='Choose preference' />
                            <Step link icon='credit card' title='Debit Card' description='Choose your debit card' />
                            <Step link icon='mobile alternate' title='OTP' description='Enter OTP' />
                            <Step link icon='check circle outline' title='Confirm Password' description='Reset your password' />
                        </Step.Group>

                        <br />

                        <Segment>
                            <Checkbox
                                toggle
                                onChange={this.handleMobileChange}
                                label='Mobile'
                            />
                            <br />
                            <br />
                            <div className={this.state.showMobileMessage ? "" : "hidden"} >
                                <Message positive >
                                    <Message.Header>You have enabled mobile notification</Message.Header>
                                    <p>
                                        You will start receiving mobile notifications on your registered mobile number 07XXXX X3951. If you want to change your mobile number please <a href="https://www.nationwide.co.uk/support/support-articles/how-to/view-or-change-your-email-address-online" >click here</a>.
                                    </p>
                                </Message>
                                <br />
                            </div>
                            <Checkbox
                                toggle
                                onChange={this.handleEmailChange}
                                label='Email'
                            />
                            <br />
                            <br />
                            <div className={this.state.showEmailMessage ? "" : "hidden"}>
                                <Message positive>
                                    <Message.Header>You have enabled email notification</Message.Header>
                                    <p>
                                        You will start receiving email notifications on your registered email id saXXXXXXXXXX17@gmail.com. If you want to change your email id please <a href="https://www.nationwide.co.uk/support/support-articles/how-to/view-or-change-your-email-address-online" >click here</a>.
                                    </p>
                                </Message>
                            </div>
                        </Segment>

                        <Segment>
                            <Dropdown
                                placeholder='Select Debit card'
                                fluid
                                search
                                selection
                                options={cardOptions}
                                noResultsMessage={"No debit card details found"}
                            />
                            <Message info>
                                <Message.Header>OTP notification</Message.Header>
                                <p>
                                    OPT will be send on your selected preference
                                </p>
                            </Message>
                        </Segment>

                        <Segment>
                            <Message
                                info
                                icon='info circle'
                                header='One Time Passwprd(OTP)'
                                list={[
                                    'You will receive 6 digit OTP on your preferred sources.',
                                    'OTP will be valid till 5 minutes only.',
                                    'If OTP not recevied, click Resend link to get new OTP.',
                                ]}
                            />
                            <br />
                            <div className="otp">
                                <Input maxLength={1} width={1} />
                                <Input maxLength={1} width={1} />
                                <Input maxLength={1} width={1} />
                                <Input maxLength={1} width={1} />
                                <Input maxLength={1} width={1} />
                                <Input maxLength={1} width={1} />
                            </div>
                        </Segment>

                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Label basic >
                                        Enter new PIN
                                </Label>
                                    <input type='number' maxLength={4} min={1000} max={9999} placeholder='New PIN' />
                                </Form.Field>
                                <Form.Field>
                                    <Label basic >
                                        Confirm PIN
                                </Label>
                                    <input type='number' maxLength={4} min={1000} max={9999} placeholder='Confirm PIN' />
                                </Form.Field>
                                <div>
                                    <Button primary>Submit</Button>
                                    <Button secondary>cancel</Button>
                                </div>
                            </Form>
                        </Segment>

                    </Segment>
                    <br/>
                    <br />
                </Container>
            </div> 
        )
    }

}
export default Home;
