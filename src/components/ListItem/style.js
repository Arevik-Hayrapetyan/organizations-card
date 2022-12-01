import { styled } from '@mui/material/styles'

export const Root = styled('div')(() => ({
  position: 'relative',
  '& .MuiCardHeader-root': {
    padding: 'unset',
  },
  '& .MuiCard-root': {
    padding: '20px',
    width: '400px',
  },
  '& .MuiInputBase-root': {
    height: '30px',
    width: '80px !important',
  },
  '.infoContainer': {
    display: 'flex',
    flexDirection: 'row',
  },
  '.protectionContainer': {
    marginLeft: 'auto',
  },
  '.trackingContainer': {
    marginRight: 50,
  },
  '.dropdownContent': {
    display: 'none',
    position: 'absolute',
    marginLeft: 'auto',
    backgroundColor: ' #f9f9f9',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    right: '13%',
  },
  '.dropdownContent li': {
    listStyle: 'none',
    padding: '4px',
  },
  '.show': {
    display: 'block',
  },
  '.licences': {
    fontSize: 18,
    // fontWeight: 500,
    margin: 0,
    marginTop: 15,
  },
  '.heading': {
    color: '#282828',
    fontSize: 15,
    fontWeight: 500,
  },
  '& .MuiTypography-root': {
    fontWeight: 600,
    fontSize: 17,
  },
  '.deleteBtn':{
    cursor:'pointer'
  },
  'a':{
    textDecoration: 'none',
    color:'black'
  }
}))
