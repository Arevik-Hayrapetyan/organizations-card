import React from 'react'
import TextField from '@mui/material/TextField'
import { InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { styled } from '@mui/material/styles'
import { useSelector,useDispatch } from 'react-redux'
import { selectOrganizations } from '../../redux/slices/organizationSlice'
import { filterData } from '../../redux/slices/organizationSlice'

const Root = styled('div')(({ theme }) => ({
  '& .MuiFormControl-root':{
     marginLeft:'20px'
  },
  '& .MuiInputBase-root': {
    height:'46px',
  },
}))

const SearchBar = () => {
  const dispatch = useDispatch();
// const organizations  = useSelector(selectOrganizations)

  return (
    <Root>
      <TextField
        onChange={(e) =>  dispatch(filterData(e.target.value))}
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
