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

  function debounce(func, timeout = 300) {
    console.log('gnacccc')
    let timer
    return (e) => {
      const searchedValue = e.target.value.toLowerCase().trim()
      if (!timer) {
        dispatch(func(searchedValue))
      }
      clearTimeout(timer)
      timer = setTimeout(() => {
        timer = undefined
      }, timeout)
    }
  }
  return (
    <Root>
      <TextField
        onChange={(e) => debounce(filterData)(e)}
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
