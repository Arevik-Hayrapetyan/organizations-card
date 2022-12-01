import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import {
  handleSliceData,
  handleChangePageNumber,
} from '../../redux/slices/organizationSlice'
import { selectFilteredData } from '../../redux/slices/organizationSlice'
import {
  selectSearchedValue,
  selectOrganizations,
  selectCurrentPage,
} from '../../redux/slices/organizationSlice'
import { selectCount } from '../../redux/slices/organizationSlice'
import { Root } from './style'

const Footer = () => {
  const dispatch = useDispatch()
  const companiesSize = useSelector(selectCount)
  const searchedValue = useSelector(selectSearchedValue)
  const companies = useSelector(selectOrganizations)
  const currentPage = useSelector(selectCurrentPage)

  useEffect(() => {
    dispatch(handleSliceData(1))
    dispatch(handleChangePageNumber(1))
  }, [])

  const handleChange = (event, page) => {
    console.log(page, 'pageeeee')
    dispatch(handleChangePageNumber(page))
    dispatch(handleSliceData(page))
  }

  return (
    <Root>
      <div className="paginationContainer">
        {!searchedValue && companies.length > 0 && (
          <Pagination
            count={Math.ceil(companiesSize / 2)}
            color="primary"
            onChange={handleChange}
            page={currentPage}
          />
        )}
      </div>
    </Root>
  )
}

export default Footer
