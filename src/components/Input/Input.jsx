import React from 'react'
import TextField from '@mui/material/TextField'
import { Root } from './style'

const Input = ({ label, name, value, disabledBorder, handleChange }) => {
  return (
    <Root>
      <p>{label}</p>
      <TextField
        InputProps={
          disabledBorder
            ? { sx: { height: 30, width: 80 }, readOnly: true}
            : { sx: { height: 30, width: 80 },  }
        }
        sx={
          disabledBorder
            ? { '& fieldset': { border: 'none' }, color: 'black' }
            : {}
        }
        id="outlined-number"
        label=""
        type="number"
        value={value}
        name={name}
      
        onChange={(e) => handleChange(e)}
      />
    </Root>
  )
}

export default Input
