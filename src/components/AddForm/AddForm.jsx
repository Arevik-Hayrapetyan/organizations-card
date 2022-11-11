import React, { useState } from 'react'
import Button from '@mui/material/Button'
import styles from './AddForm.module.css'
import { Container } from '@mui/system'
import { styled } from '@mui/material/styles'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ApartmentIcon from '@mui/icons-material/Apartment'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import { inputNames } from '../../constants'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
  },
});
const Root = styled('div')(({ theme }) => ({
  display: 'inline-block',
  marginLeft: 'auto',
  '.wrapper':{
    backgroundColor: 'yellow',
  },
  '& .MuiInputBase-root': {
    height: '30px',
    width: '80px !important',
  },
  
}))

const style = {
  position: 'absolute',

  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
}

const AddForm = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // function handleAddOrganization() {
  //   handleOpen()
  // }

  return (
    <Root>
      <Container sx={{ marginLeft: 'auto' }}>
        <Button
          sx={{ textTransform: 'none' }}
          variant="contained"
          onClick={() => handleOpen()}
        >
          Add New Organization
        </Button>
        <Modal
          open={open}
          onClose={() => handleClose()}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
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
            <div>
              <section>
                
                <h4>Tracking</h4>
                <div style={{display:'flex', alignItems:'center'}}>
                  <span>In Use:</span>
                  <TextField
                 
                    id="outlined-number"
                    label=""
                    type="number"
                    value={1254}
                  />
                </div>
                <div>
                  <span>Assigned:</span>
                  <TextField
                    id="outlined-number"
                    label=""
                    type="number"
                    value={1254}
                  />
                </div>
              </section>

              <section>
                <h4>Protection</h4>
                <div>
                  <span>In Use:</span>
                  <TextField
                    id="outlined-number"
                    label=""
                    type="number"
                    value={1254}
                  />
                </div>
                <div>
                  <span>Assigned:</span>
                  <TextField
                    id="outlined-number"
                    label=""
                    type="number"
                    value={1254}
                  />
                </div>
              </section>
            </div>
          </Box>
        </Modal>
      </Container>
    </Root>
  )
}

export default AddForm
