import React from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import ApartmentIcon from '@mui/icons-material/Apartment'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import InfoContainer from '../InfoContainer/InfoContainer'
import { Button } from '@mui/material'
import { boxStyle } from './style'
import { btnStyle } from './style'

const StyledModal = ({ open, handleClose }) => {
  function handleChange(event) {
    console.log(event.target.value, 'Input')
  }
  function handleAddCompany(){

  }
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={boxStyle} className="box">
        <TextField
          id="input-with-icon-textfield"
          label="Organization Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ApartmentIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <InfoContainer disabledBorder={false} />
        <Button variant="contained" sx={btnStyle} onClick={() => handleAddCompany() }>
          Add
        </Button>
      </Box>
    </Modal>
  )
}

export default StyledModal
