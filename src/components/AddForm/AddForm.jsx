import React, { useState } from 'react'
import Button from '@mui/material/Button'
import { Container } from '@mui/system'
import StyledModal from '../Modal/Modal'
import { Root } from './style'

const AddForm = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const handleOpen = () => setOpen(true)
  
  const handleClose = () => {
    setOpen(false)
    setMessage('')
  }

  return (
    <Root>
      <Container>
        <Button variant="contained" onClick={() => handleOpen()}>
          Add New Organization
        </Button>
        <StyledModal
          open={open}
          handleClose={handleClose}
          setMessage={setMessage}
          message={message}
        />
      </Container>
    </Root>
  )
}

export default AddForm
