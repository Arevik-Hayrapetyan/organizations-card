import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handleChangeInputs } from '../../redux/slices/organizationSlice'
import { handleAddCompany } from '../../redux/slices/organizationSlice'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import ApartmentIcon from '@mui/icons-material/Apartment'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import InfoContainer from '../InfoContainer/InfoContainer'
import { Button } from '@mui/material'
import { boxStyle } from './style'
import { btnStyle } from './style'

const StyledModal = ({ open, handleClose, setMessage, message }) => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')

  function handleAdd() {
    const value = name.trim()
    
    if (!value.length > 0 ||!/^[A-Za-z\s]*$/.test(value)) {
      setMessage('Name input cant be empty and must be include only letters!!!!!!!')
      return
    }
    dispatch(handleChangeInputs({ name }))
    dispatch(handleAddCompany())
    setMessage('')
    setName('')
    handleClose()
  }

  function handleAddCompanyName(event) {
    const name = event.target.value
    setName(name)
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
          onChange={(e) => handleAddCompanyName(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ApartmentIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <span style={{ color: 'red', fontSize: '12px' }}>{message}</span>
        <InfoContainer disabledBorder={false} />

        <Button variant="contained" sx={btnStyle} onClick={() => handleAdd()}>
          Add
        </Button>
      </Box>
    </Modal>
  )
}

export default StyledModal
