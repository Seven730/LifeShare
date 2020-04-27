import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'


export default function UpdateForm(props) {

  const [value, setValue] = useState({ value: props.value, auxValue: props.auxValue, password: "" })
  return (
    <Form onSubmit={props.submitCallback}>
      <Form.Control
        id="primary"
        value={value.value}
        onChange={(e) => setValue({ value: e.target.value })}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.auxPlaceholder ? <Form.Control
        id="secondary"
        value={value.auxValue}
        onChange={(e) => setValue({ auxValue: e.target.value })}
        type={props.type}
        placeholder={props.auxPlaceholder}
      /> : null}
      <Button variant="primary" type="submit">
        Submit
          </Button>
    </Form>
  )
}
