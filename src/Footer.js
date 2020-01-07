import React from 'react';
import {
    Container,
    List,
    Icon
} from 'semantic-ui-react'

const AppHeader = () => (
    <div className="appFooter">
        <Container>
            <br />
            <div className="centerText">
                <List horizontal>
                    <List.Item href='#'>
                        Explore Nationwide
                        <Icon name='window restore outline' /></List.Item>
                    <List.Item href='#'>
                        Member's Zone
                        <Icon name='window restore outline' /></List.Item>
                    <List.Item href='#'>
                        Privacy
                        <Icon name='window restore outline' /></List.Item>
                    <List.Item href='#'>
                        Accessibility
                        <Icon name='window restore outline' /></List.Item>
                </List>
            </div>
            <div className="dottedHairLine"></div>
            <div className="footer__regulatory">
                <p>Nationwide Building Society is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority under registration number 106078. You can confirm our registration on the FCA&&apos;s website <a href="http://www.fca.org.uk" title="" className="new-window-link" target="_blank">www.fca.gov.uk</a>. Nationwide is not responsible for the content of external websites.</p>
            </div>
            <br />
        </Container>
    </div>
);

export default AppHeader;
