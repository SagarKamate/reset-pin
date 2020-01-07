import React, { Component } from 'react';
import {
    Button,
    Icon
} from 'semantic-ui-react'

class FooterButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stepTitle: "Preference",
        }
        
    }

    render() {
        return (
            <div>
                <Button negative icon labelPosition='left'>
                    <Icon name='left arrow' />
                    Back
            </Button>
                <Button positive icon labelPosition='right'>
                    Next
                <Icon name='right arrow' />
                </Button>
            </div>
        )
    }
}

export default FooterButton;
