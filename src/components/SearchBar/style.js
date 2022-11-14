import { styled } from '@mui/material/styles'

export const Root = styled('div')(({ theme }) => ({
  '& .MuiFormControl-root':{
     marginLeft:'20px'
  },
  '& .MuiInputBase-root': {
    height:'46px',
  },
}))
