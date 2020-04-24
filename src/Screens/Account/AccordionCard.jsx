import React from 'react'
import { Card, Button, Accordion } from 'react-bootstrap'

export default function AccordionCard(props) {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={props.eventKey}>
                    {props.header}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.eventKey}>
                <Card.Body>
                    {props.children}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}
