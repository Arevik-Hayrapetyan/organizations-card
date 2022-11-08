import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import Heading from './components/Heading/Heading'
import AddForm from './components/AddForm/AddForm'
import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'
import ListItems from './components/ListItems/ListItems'

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  '& .MuiContainer-root': {
    maxWidth: 'unset',
  },
}))

function App() {
  return (
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
      <ListItems/>
    </Root>
  )
}

export default App
