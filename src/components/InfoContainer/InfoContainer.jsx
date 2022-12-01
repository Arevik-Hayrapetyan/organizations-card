import React, { useState } from 'react'
import Input from '../Input/Input'
import { Root } from './style'
import { handleChangeInputs } from '../../redux/slices/organizationSlice'
import { useDispatch } from 'react-redux'
import { TextField } from '@mui/material'

const InfoContainer = ({ disabledBorder, props }) => {
  const dispatch = useDispatch()
  const [state, setState] = useState({
    trackingInUse: 0,
    trackingAssigned: 0,
    protectionInUse: 0,
    protectionAssigned: 0,
  })

  function handleInputChange(event) {
    const target = event.target
    const value = value>0?+target.value:0
    const name = target.name
    setState((prev) => ({ ...prev, [name]: value }))
    dispatch(handleChangeInputs({ [name]: value }))
  }

  return (
    <Root>
      <section className="wrapper">
        <h4 className="title">Tracking</h4>
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
          disabledBorder={disabledBorder}
          handleChange={handleInputChange}
        />
      </section>

      <section className="wrapper">
        <h4 className="title">Protection</h4>
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
          disabledBorder={disabledBorder}
          handleChange={handleInputChange}
        />
      </section>
    </Root>
  )
}

export default InfoContainer
