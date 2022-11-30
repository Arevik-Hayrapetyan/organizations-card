import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { handleSliceData } from '../../redux/slices/organizationSlice'
import { selectFilteredData } from '../../redux/slices/organizationSlice'
import {
  selectSearchedValue,
  selectOrganizations,
} from '../../redux/slices/organizationSlice'
import { selectCount } from '../../redux/slices/organizationSlice'
import { Root } from './style'

const Footer = () => {
  const dispatch = useDispatch()
  const filteredData = useSelector(selectFilteredData)
  const companiesSize = useSelector(selectCount)
  const searchedValue = useSelector(selectSearchedValue)
  const companies = useSelector(selectOrganizations)

  useEffect(() => {
    dispatch(handleSliceData(1))
  }, [])

  const handleChange = (event, value) => {
    dispatch(handleSliceData(value))
  }

  return (
    <Root>
      <div className="paginationContainer">
        {!searchedValue && companies.length > 0 && (
          <Pagination
            count={Math.ceil(companiesSize / 2)}
            color="primary"
            onChange={handleChange}
          />
        )}
      </div>
    </Root>
  )
}

export default Footer
