import { styled } from '@mui/system'

export const Root = styled('div')({
  '.wrapper': {
    width: '50%',
  },
  display: 'flex',
  flexDirection: 'row',
  '& .title':{
    fontSize:"14px"
  }
})
