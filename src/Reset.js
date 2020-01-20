import React, { Component } from 'react';

import {
    Message,
    Dropdown,
    Checkbox,
    Input,
    Button,
    Step,
    Segment,
    Header,
    Icon,
    Form
} from 'semantic-ui-react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

class Reset extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            showMobileMessage: false,
            showEmailMessage: false,
            timerTick: false,
            isPlaying: true,
            stepTitle:'Preference',
            stepCompleted: '',
            otp:null,
            activeItem: 'Manage settings',
            debitCard: '',
            timerTick: true,
            duration: 60,
            digit:'',
            enableNextButton: false,
            inputedOTP: [
                false,
                false,
                false,
                false,
                false,
                false
            ],
            enableBackButon: false,
            selectedDebitCard: null,
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
        this.onDebitCardSelect = this.onDebitCardSelect.bind(this);
        this.handleResendClick = this.handleResendClick.bind(this);
        this.onOTPInput = this.onOTPInput.bind(this);
        this.handleOnSubmitOTP = this.handleOnSubmitOTP.bind(this);
    } 

    handleStepTitleChange = (e, { title }) => this.setState({ stepTitle: title })

    handleResendClick(e) {
        this.sendOTP();
    }

    sendOTP(eventsource) {
        fetch('https://otpreset.azurewebsites.net/OTPResetAPI')
        .then(res => res.json())
        .then((data) => {
            if (!eventsource) {
                this.setState({
                    timerTick: true,
                    isPlaying: true,
                    digit1:'',
                    digit2:'',
                    digit3:'',
                    digit4:'',
                    digit5:'',
                    digit6:'',
                    //enableNextButton: false,
                    otp: data
                });
            }
            else {
                this.setState({
                    timerTick: true,
                    isPlaying: true,
                    stepTitle: "OTP",
                    //enableNextButton: false,
                    stepCompleted: "Debit Card",
                    otp: data,
                    digit1: '',
                    digit2: '',
                    digit3: '',
                    digit4: '',
                    digit5: '',
                    digit6: ''
                });
            }
            console.log(data)
        })
    }

    onOTPInput(e, field) {
        var otp = this.state.otp ? this.state.otp.toString().split("") : [],
            index = parseInt(field.name);
        
        e.preventDefault();
        if (otp.length > 0 && field.value === otp[index - 1]) {
            this.state.inputedOTP[index - 1] = true;

            let hasFalse = this.state.inputedOTP.filter(flag => flag === false);
            if (hasFalse.length === 0) {
                //this.setState({
                //    enableNextButton: true
                //});
            }
            else {
                //this.setState({
                //    enableNextButton: false
                //});
            }
        }
        else {
            this.state.inputedOTP[index - 1] = false
        }
    }

    handleOnSubmitOTP(e, field) {
        e.preventDefault();
        this.setState({
            digit1: '',
            digit2: '',
            digit3: '',
            digit4: '',
            digit5: '',
            digit6: ''
        });
    }

    handleNextStepClick(e) {
        if (this.state.stepTitle === "Preference") {
            this.setState({
                stepTitle: "Debit Card",
                enableNextButton:false,
                stepCompleted: "Preference"
            })
        }
        else if (this.state.stepTitle === "Debit Card") {
            this.sendOTP('debitCardNext');
        }
        else if (this.state.stepTitle === "OTP") {
            this.setState({
                stepTitle: "Reset PIN",
                enableNextButton:true,
                stepCompleted: "OTP"
            })
        }
        else if (this.state.stepTitle === "Reset PIN") {
            this.setState({
                stepTitle: "Complete",
                enableNextButton:false,
                stepCompleted: "Reset PIN"
            })
        }
    }

    handleBackStepClick(e) {
        if (this.state.stepTitle === "Reset PIN") {
            this.setState({ stepTitle: "OTP" })
        }
        else if (this.state.stepTitle === "OTP") {
            this.setState({
                enableNextButton:true,
                stepTitle: "Debit Card"
            })
        }
        else if (this.state.stepTitle === "Debit Card") {
            this.setState({
                enableNextButton:true,
                stepTitle: "Preference"
            })
        }
    }

    handleMobileChange(event) {
        this.setState(oldState => ({
            showMobileMessage: !oldState.showMobileMessage,
            enableNextButton: this.state.showEmailMessage || !oldState.showMobileMessage ? true : false
        }));
    }

    handleEmailChange(event) {
        this.setState(oldState => ({
            showEmailMessage: !oldState.showEmailMessage,
            enableNextButton: this.state.showMobileMessage || !oldState.showEmailMessage ? true : false
        }));
    }

    onDebitCardSelect(event) {
        this.setState({
            enableNextButton:(event.target.innerText !=="")
        });
    }

    render() {
        const cardOptions = [
            {
                key: '4123',
                value: 'FlexAccount XXXX XXXX 4123',
                content: (<Header
                    size='small'
                    icon='credit card'
                    content='FlexAccount'
                    subheader='XXXX XXXX 4123'
                />),
                text: 'FlexAccount XXXX XXXX 4123'
            },
            {
                key: '7921',
                value: 'FlexPlus XXXX XXXX 7921',
                content: (<Header
                    size='small'
                    icon='credit card outline'
                    content='FlexPlus'
                    subheader='XXXX XXXX 7921'
                />),
                text: 'FlexPlus XXXX XXXX 7921'
            },
            {
                key: '5633',
                value: 'FlexDirect XXXX XXXX 5633',
                content: (<Header
                    size='small'
                    icon='cc mastercard'
                    content='FlexDirect'
                    subheader='XXXX XXXX 5633'
                />),
                text: 'FlexDirect XXXX XXXX 5633'
            },
            {
                key: '9011',
                value: 'FlexStudent XXXX XXXX 9011',
                content: (<Header
                    size='small'
                    icon='credit card alternative'
                    content='FlexStudent'
                    subheader='XXXX XXXX 9011'
                />),
                text: 'FlexStudent XXXX XXXX 9011'
            }
        ]

        return (
            <Segment attached={"bottom"}>
                <Message
                    info
                    icon='info circle'
                    header='Reset your debit card PIN, if you have'
                    list={[
                        'mobile number registered with Nationwide.',
                        'email id registered with Nationwide.',
                        'de-registered your mobile number and/or email.',
                        'not registerred, please give us a call on  0800 30 20 11(between 8am - 8pm).',
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
                        description='Select preference'
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
                        description='Select your debit card'
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
                        completed={this.state.stepCompleted === "Reset PIN" ? true : false}
                        icon='key'
                        title='Reset PIN'
                        description='Reset your PIN'
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
                        completed={this.state.stepCompleted === "Complete" ? true : false}
                        icon='check circle outline'
                        title='Complete'
                        description='You have reset your PIN'
                    />
                </Step.Group>

                <br />

                <div  className={this.state.stepTitle === "Preference" ? "" : "hidden"} >
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
                                'Select your debit card to reset PIN',
                                'You can Select only one debit card at a time',
                                'We will send you an OTP on your selected preference to reset your debit card PIN',
                            ]}
                        />
                        <br />
                        <Dropdown
                            placeholder='Select Debit card'
                            fluid
                            search
                            clearable
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
                                'You will receive 6 digit OTP on your preference.',
                                'OTP will be valid till 60 seconds only.',
                                'If OTP not recevied or OTP timed up, click resend link to get new OTP.',
                            ]}
                        />
                        <br />
                        <Form>
                            {
                                this.state.timerTick
                                    ?
                                    <div>
                                        <div className="otpTimer">
                                            <CountdownCircleTimer
                                                isPlaying={this.state.isPlaying ? true : false}
                                                key={this.state.isPlaying ? new Date().getTime() : null }
                                                size={100}
                                                startAt={0}
                                                strokeWidth={5}
                                                durationSeconds={this.state.duration}
                                                colors={[["#004777", 0.33]]}
                                                renderTime={this.state.renderTime}
                                            />
                                        </div>
                                        <div className="floatRight fullWidth">
                                            OTP not received? <a onClick={this.handleResendClick} className="link">Click here to resend</a>.
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            <div className="otp">
                                <Input type="text" name="1" onChange={this.onOTPInput} maxLength={1} width={1} />
                                <Input type="text" name="2" onChange={this.onOTPInput} maxLength={1} width={1} />
                                <Input type="text" name="3" onChange={this.onOTPInput} maxLength={1} width={1} />
                                <Input type="text" name="4" onChange={this.onOTPInput} maxLength={1} width={1} />
                                <Input type="text" name="5" onChange={this.onOTPInput} maxLength={1} width={1} />
                                <Input type="text" name="6" onChange={this.onOTPInput} maxLength={1} width={1} />
                            </div>                   
                        </Form>
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
                                'PIN should be in the range 0000 to 9999'
                            ]}
                        />
                        <br />
                        <Form>
                            <Form.Input
                                label='Enter new PIN'
                                focus
                                type="password"
                                maxLength={4}
                                min={1000}
                                max={9999}
                                placeholder='New PIN'
                            />
                            <Form.Input
                                label='Confirm PIN'
                                type='password'
                                maxLength={4}
                                min={1000}
                                max={9999}
                                //error={{
                                //    content: 'Please enter a valid email address',
                                //    pointing: 'below',
                                //}}
                                placeholder='Confirm PIN' />
                        </Form>
                    </Segment>
                </div>

                <div className={this.state.stepTitle === "Complete" ? "" : "hidden"} >
                    <Segment>
                        <br />
                        <Message
                            positive
                            icon='check circle'
                            header='Congratulations!'
                            list={[
                                'Your Reset PIN service completed successfully, your service reference number is SRN-12345.',
                                'PIN will be activated instalntly and you will get notified with service reference number on your registered mobile and/or registered email.'
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
                                <Button positive disabled={!this.state.enableNextButton} icon labelPosition='right' onClick={this.handleNextStepClick}>
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
        )
    }
}
export default Reset;
