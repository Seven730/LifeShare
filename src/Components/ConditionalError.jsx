import React from "react";
import { Alert } from "react-bootstrap";


export default function ConditionalError(props) {
    if(props.errorMessage === undefined || props.errorMessage === "") return null
    return <Alert variant="danger">{props.errorMessage}</Alert>
}