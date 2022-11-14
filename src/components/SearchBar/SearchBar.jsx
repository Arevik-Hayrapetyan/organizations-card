import React from 'react'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'
import { useDispatch } from 'react-redux'
import { filterData } from '../../redux/slices/organizationSlice'
import { Root } from './style'

const SearchBar = () => {
  const dispatch = useDispatch()

  return (
    <Root>
      <TextField
        onChange={(e) =>
          dispatch(filterData(e.target.value.toLowerCase().trim()))
        }
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
