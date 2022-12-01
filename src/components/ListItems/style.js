import { styled } from '@mui/material/styles'

export const Root = styled('div')(() => ({
  '& .listContainer': {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    justifyContent: 'center',
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
