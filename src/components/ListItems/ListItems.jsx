import React, { useEffect } from 'react'
import ListItem from '../ListItem/ListItem'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectFilteredData,
  selectSearchedValue,
  selectSlicedData,
} from '../../redux/slices/organizationSlice'
import { handleSliceData } from '../../redux/slices/organizationSlice'
import { Root } from './style'

const ListItems = () => {
  const dispatch = useDispatch()
  const slicedData = useSelector(selectSlicedData)
  const filteredData = useSelector(selectFilteredData)
  const searchedValue = useSelector(selectSearchedValue)

  useEffect(() => {
    dispatch(handleSliceData(0))
  }, [])

  return (
    <Root>
      <ul className="listContainer">
        {searchedValue.length > 0
          ? filteredData.map((listItem) => {
              return <ListItem key={listItem.id} {...listItem} />
            })
          : slicedData.map((listItem) => {
              return <ListItem key={listItem.id} {...listItem} />
            })}
      </ul>
    </Root>
  )
}

export default ListItems
