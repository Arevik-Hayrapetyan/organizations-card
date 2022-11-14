import { styled } from '@mui/material/styles'

export const Root = styled('div')(({ theme }) => ({
  display: 'inline-block',
  marginLeft: 'auto',
  '& .MuiContainer-root':{
    marginLeft: 'auto' 
  },
  '& .MuiButtonBase-root':{
    textTransform: 'none'
  }
}))
