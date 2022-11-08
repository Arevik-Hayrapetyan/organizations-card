import React from 'react'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'

const Root = styled('div')(({ theme }) => ({
  '& .MuiFormControl-root':{
     marginLeft:'20px'
  },
  '& .MuiInputBase-root': {
    height:'46px',
  },
}))

const SearchBar = () => {
  return (
    <Root>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Root>
  )
}

export default SearchBar
