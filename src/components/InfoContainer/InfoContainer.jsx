import React, { useState } from 'react'
import Input from '../Input/Input'
import { Root } from './style'

const InfoContainer = ({ disabledBorder, props }) => {
  const [state, setState] = useState({
    trackingInUse: 0,
    trackingAssigned: 0,
    protectionInUse: 0,
    protectionAssigned: 0,
  })

  function handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    console.log(name, "namemememmemem")
    setState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Root>
      <section className="wrapper">
        <h4>Tracking</h4>
        <Input
          label="In Use:"
          name="trackingInUse"
          value={props ? props.trackingInUse : state.trackingInUse}
          disabledBorder={disabledBorder}
          handleChange={handleInputChange}
        />
        <Input
          label="Assigned:"
          name="trackingAssigned"
          value={props ? props.trackingAssigned : state.trackingAssigned}
          handleChange={handleInputChange}
        />
      </section>

      <section className="wrapper">
        <h4>Protection</h4>
        <Input
          label="In Use:"
          name="protectionInUse"
          value={props ? props.protectionInUse : state.protectionInUse}
          disabledBorder={disabledBorder}
          handleChange={handleInputChange}
        />
        <Input
          label="Assigned:"
          name="protectionAssigned"
          value={props ? props.protectionAssigned : state.protectionAssigned}
          handleChange={handleInputChange}
        />
      </section>
    </Root>
  )
}

export default InfoContainer
