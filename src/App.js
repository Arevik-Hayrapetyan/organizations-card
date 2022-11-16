import './App.css'
import { Fragment } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import Heading from './components/Heading/Heading'
import AddForm from './components/AddForm/AddForm'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import ListItems from './components/ListItems/ListItems'
import CompanyPage from './components/Company/CompanyPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
          <SearchBar />
          <AddForm />
        </Container>
        <ListItems />
      </Root>
    
    </Fragment>
  )
}

export default App
