import React, { Fragment, useEffect } from 'react'
import ListItem from '../ListItem/ListItem'
import { useSelector } from 'react-redux'
import {
  selectFilteredData,
  selectOrganizations,
  selectSearchedValue,
} from '../../redux/slices/organizationSlice'

const ListItems = () => {
  const organizations = useSelector(selectOrganizations)
  const searchedValue = useSelector(selectSearchedValue)
  const filteredData = useSelector(selectFilteredData)
  return (
    <Fragment>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          listStyle: 'none',
          justifyItems: 'center',
        }}
      >
        {
        searchedValue.length > 0
          ? filteredData.map((listItem) => {
            return <ListItem key={listItem.id} {...listItem} />
          })
          : 
          organizations.map((listItem) => {
              return <ListItem key={listItem.id} {...listItem} />
            })}
      </ul>
    </Fragment>
  )
}

export default ListItems
