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
    Icon,
    Form
} from 'semantic-ui-react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

class Manage extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            showMobileMessage: false,
            showEmailMessage: false,
            stepTitle:"Preference",
            stepCompleted:"",
            activeItem: "Manage settings",
            timerTick: false,
            debitCard:'',
            resetTimer: 60,
            restartTimer: 100000,
            renderTime : value => {
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
        this.onDebitCardSelect = this.onDebitCardSelect.bind(this);
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

    onDebitCardSelect(event) {
        this.setState({ debitCard: event.target.event.target.innerText  });
    }

    render() {
        const { activeItem } = this.state

        const cardOptions = [
            { key: '4123', value: 'XXXX XXXX 4123 FlexAccount', flag: 'af', text: 'XXXX XXXX 4123 FlexAccount' },
            { key: '7921', value: 'XXXX XXXX 7921 FlexPlus', flag: 'ax', text: 'XXXX XXXX 7921 FlexPlus' },
            { key: '5633', value: 'XXXX XXXX 5633 FlexDirect', flag: 'al', text: 'XXXX XXXX 5633 FlexDirect' },
            { key: '9011', value: 'XXXX XXXX 9011 FlexStudent', flag: 'dz', text: 'XXXX XXXX 9011 FlexStudent' },
            { key: '2952', value: 'XXXX XXXX 2952 FlexOne', flag: 'as', text: 'XXXX XXXX 2952 FlexOne' }
        ]

        return (
            <div className="appContent">
                <br />
                <br />
                <Container>
                    <Menu tabular attached={"top"}>
                        <Menu.Item
                            name='View Acccounts'
                            //active={activeItem === 'View Acccounts'}
                            //onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Move money'
                            //active={activeItem === 'Move money'}
                            //onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Manage settings'
                            active={activeItem === 'Manage settings'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='Browse Products'
                            //active={activeItem === 'Browse Products'}
                            //onClick={this.handleItemClick}
                        />
                    </Menu>        

                    <Segment attached={"bottom"}>
                        <Message
                            info
                            icon='info circle'
                            header='Reset your debit card now easily'
                            list={[
                                'If you have mobile number registered with Nationwide',
                                'If you have email id number registered with Nationwide',
                                'If you do not have registered your mobile number or telephone number please Give us a call on  0800 30 20 11 (between 8am - 8pm).',
                            ]}
                        />
                        <br />

                        <Step.Group attached='top' widths={5}>
                            <Step
                                link
                                active={this.state.stepTitle === "Preference" ? true : false}
                                completed={
                                    (this.state.stepCompleted === "Preference"
                                        || this.state.stepCompleted === "Debit Card"
                                        || this.state.stepCompleted === "OTP"
                                        || this.state.stepCompleted === "Reset PIN")
                                    ?
                                    true
                                    :
                                    false
                                }
                                icon='options'
                                title='Preference'
                                description='Choose preference'
                                //onClick={this.handleStepTitleChange}
                            />
                            <Step
                                link
                                active={this.state.stepTitle === "Debit Card" ? true : false}
                                disabled={
                                    (
                                        this.state.stepTitle === "Preference"
                                    )
                                    ?
                                        true
                                    :
                                        false
                                }
                                completed={
                                    (this.state.stepCompleted === "Debit Card"
                                        || this.state.stepCompleted === "OTP"
                                        || this.state.stepCompleted === "Reset PIN")
                                    ?
                                    true
                                    :
                                    false
                                }
                                icon='credit card'
                                title='Debit Card'
                                description='Choose your debit card'
                                //onClick={this.handleStepTitleChange}
                            />
                            <Step
                                link
                                active={this.state.stepTitle === "OTP" ? true : false}
                                disabled={
                                    (
                                        this.state.stepTitle === "Preference"
                                        || this.state.stepTitle === "Debit Card"
                                    )
                                        ?
                                        true
                                        :
                                        false
                                }
                                completed={
                                    (this.state.stepCompleted === "OTP"
                                        || this.state.stepCompleted === "Reset PIN"
                                    )
                                        ?
                                        true
                                        :
                                        false
                                }
                                icon='mobile alternate'
                                title='OTP'
                                description='Enter OTP'
                                //onClick={this.handleStepTitleChange}
                            />
                            <Step
                                link
                                active={this.state.stepTitle === "Reset PIN" ? true : false}
                                disabled={
                                    (
                                        this.state.stepTitle === "Preference"
                                        || this.state.stepTitle === "Debit Card"
                                        || this.state.stepTitle === "OTP"
                                    )
                                        ?
                                        true
                                        :
                                        false
                                }
                                completed={this.state.stepCompleted === "Reset PIN" ? true : false }
                                icon='key'
                                title='Reset PIN'
                                description='Reset your PIN'
                                //onClick={this.handleStepTitleChange}
                            />
                            <Step
                                link
                                active={this.state.stepTitle === "Complete" ? true : false}
                                disabled={
                                    (
                                        this.state.stepTitle === "Preference"
                                        || this.state.stepTitle === "Debit Card"
                                        || this.state.stepTitle === "OTP"
                                        || this.state.stepTitle === "Reset PIN"
                                    )
                                        ?
                                        true
                                        :
                                        false
                                }
                                completed={ this.state.stepCompleted === "Complete" ? true : false}
                                icon='check circle outline'
                                title='Complete'
                                description='You have reset your PIN'
                                //onClick={this.handleStepTitleChange}
                            />
                        </Step.Group>

                        <br />

                        <div className={this.state.stepTitle === "Preference" ? "" : "hidden"} >
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
                                            You will start receiving mobile notifications on your registered mobile number 07XXXX X3951. If you want to change your mobile number please <a href="https://www.nationwide.co.uk/support/support-articles/how-to/view-or-change-your-email-address-online" target="_blank">click here</a>.
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
                                            You will start receiving email notifications on your registered email id saXXXXXXXXXX17@gmail.com. If you want to change your email id please <a href="https://www.nationwide.co.uk/support/support-articles/how-to/view-or-change-your-email-address-online" target="_blank">click here</a>.
                                        </p>
                                    </Message>
                                </div>
                            </Segment>
                        </div>

                        <div className={this.state.stepTitle === "Debit Card" ? "" : "hidden"} >
                            <Segment>
                                <Message
                                    info
                                    icon='info circle'
                                    header='Debit Card'
                                    list={[
                                        'Select debit card to reset PIN instantly',
                                        'You can select only one debit card at a time',
                                    ]}
                                />
                                <br />
                                <Dropdown
                                    placeholder='Select Debit card'
                                    fluid
                                    search
                                    selection
                                    options={cardOptions}
                                    onChange={this.onDebitCardSelect}
                                    noResultsMessage={"No debit card details found"}
                                />
                        </Segment>
                        </div>

                        <div className={this.state.stepTitle === "OTP" ? "" : "hidden"} >
                            <Segment>
                                <Message
                                    info
                                    icon='info circle'
                                    header='One Time Passwprd(OTP)'
                                    list={[
                                        'You will receive 6 digit OTP on your preferred sources.',
                                        'OTP will be valid till 60 seconds only.',
                                        'If OTP not recevied or OTP timed up, click resend link to get new OTP.',
                                    ]}
                                />
                                <br />
                                <div className="otpTimer">
                                    <CountdownCircleTimer
                                        isPlaying={this.state.timerTick ? true : false}
                                        size={125}
                                        durationSeconds={this.state.resetTimer}
                                        colors={[["#004777", 0.33]]}
                                        renderTime={this.state.renderTime}
                                        onComplete={this.timerTickComplete}
                                    />
                                </div>

                                <div className="floatRight fullWidth">
                                    OTP not received? <a onClick={this.handleResendClick} className="link">Click here to resend</a>.
                                </div>
                                <div className="otp">
                                    <Input focus maxLength={1} width={1} />
                                    <Input maxLength={1} width={1} />
                                    <Input maxLength={1} width={1} />
                                    <Input maxLength={1} width={1} />
                                    <Input maxLength={1} width={1} />
                                    <Input maxLength={1} width={1} />
                                </div>
                            </Segment>
                        </div>

                        <div className={this.state.stepTitle === "Reset PIN" ? "" : "hidden"} >
                            <Segment>
                                <Message
                                    info
                                    icon='info circle'
                                    header='Personal Identification Number (PIN)'
                                    list={[
                                        'PIN should be 4 digits only',
                                        'PIN should be in the range 0000 to 9999',
                                    ]}
                                />
                                <br />
                                <Form>
                                    <Form.Field>
                                        <Label >
                                            Enter new PIN
                                        </Label>
                                        <Input focus type="password" maxLength={4} min={1000} max={9999} placeholder='New PIN' />
                                        
                                    </Form.Field>
                                    <Form.Field >
                                        <Label >
                                            Confirm PIN
                                        </Label>
                                        <Input type="password" maxLength={4} min={1000} max={9999} placeholder='Confirm PIN' />
                                    </Form.Field>
                                </Form>
                            </Segment>
                        </div>

                        <div className={this.state.stepTitle === "Complete" ? "" : "hidden"} >
                            <Segment>
                                <br/>
                                <Message
                                    positive
                                    icon='check circle'
                                    header='Congratulations!'
                                    list={[
                                        'You have reset debit card PIN successfully for your selected card number XXXX XXXX 4123 FlexAccount.',
                                        'PIN will be activated instalntly and you will get notification for the same on your registered mobile and registered email.'
                                    ]}
                                />
                                <br />

                            </Segment>
                        </div>
                        {this.state.stepTitle !== "Complete"
                            ?
                            <Segment className="footer" attached={"bottom"}>
                                <div className="floatLeft">
                                    {this.state.stepTitle !== "Preference"
                                        ?
                                        <Button negative icon labelPosition='left' onClick={this.handleBackStepClick}>
                                            <Icon name='left arrow' />
                                            Back
                                    </Button>
                                        :
                                        null
                                    }
                                </div>
                                <div className="floatRight">
                                    {this.state.stepTitle !== "Reset PIN"
                                        ?
                                        <Button positive icon labelPosition='right' onClick={this.handleNextStepClick}>
                                            Next
                                        <Icon name='right arrow' />
                                        </Button>
                                        : null
                                    }
                                    {this.state.stepTitle === "Reset PIN"
                                        ?
                                        <Button positive icon labelPosition='right' onClick={this.handleNextStepClick}>
                                            Complete
                                        <Icon name='check circle outline' />
                                        </Button>
                                        : null
                                    }
                                </div>
                            </Segment>
                            :
                            null
                        }
                        
                    </Segment>
                    <br/>
                    <br />
                </Container>
            </div> 
        )
    }

}
export default Manage;
