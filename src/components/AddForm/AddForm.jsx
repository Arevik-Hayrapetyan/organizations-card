import React from 'react'
import Button from '@mui/material/Button'
import styles from './AddForm.module.css'
import { Container } from '@mui/system'
import { styled } from '@mui/material/styles'


const Root = styled('div')(({ theme }) => ({
  display:'inline-block',
  marginLeft:'auto',
}))

const AddForm = () => {
  function handleAddOrganization() {
    console.log('barev')
  }

  return (
    <Root>
    <Container sx={{ marginLeft: 'auto' }}>
      <Button
        sx={{ textTransform: 'none' }}
        variant="contained"
        onClick={() => handleAddOrganization()}
      >
        Add New Organization
      </Button>
    </Container>
    </Root>
  )
}

export default AddForm
