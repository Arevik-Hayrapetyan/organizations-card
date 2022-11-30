import './App.css'
import { Fragment } from 'react'
import Heading from './components/Heading/Heading'
import Navbar from './components/Navbar/Navbar'
import ListItems from './components/ListItems/ListItems'
import Footer from './components/Footer/Footer'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

const Root = styled('div')(() => ({
  width: '100%',
  '& .MuiContainer-root': {
    maxWidth: 'unset',
  },
}))

function App() {
  return (
    <Fragment>
      <Root>
        <Container
          sx={{
            margin: 0,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyItems: 'start',
            alignItems: 'center',
          }}
        >
          <Heading />
          <Navbar />
        </Container>
        <ListItems />
        <Footer />
      </Root>
    </Fragment>
  )
}

export default App
