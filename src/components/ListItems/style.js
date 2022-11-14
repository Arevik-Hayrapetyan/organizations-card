import { styled } from '@mui/material/styles'

export const Root = styled('div')(() => ({
  '& .listContainer': {
    display: 'flex',
    flexWrap: 'wrap',
    listStyle: 'none',
    justifyItems: 'center',
  },
}))
