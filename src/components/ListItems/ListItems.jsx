import React from 'react'
import ListItem from '../ListItem/ListItem'
import { useSelector } from 'react-redux'
import {
  selectFilteredData,
  selectOrganizations,
  selectSearchedValue,
} from '../../redux/slices/organizationSlice'
import { Root } from './style'

const ListItems = () => {
  const organizations = useSelector(selectOrganizations)
  const searchedValue = useSelector(selectSearchedValue)
  const filteredData = useSelector(selectFilteredData)
  return (
    <Root>
      <ul className="listContainer">
        {searchedValue.length > 0 && organizations.length>0
          ? filteredData.map((listItem) => {
              return <ListItem key={listItem.id} {...listItem} />
            })
          : organizations.map((listItem) => {
              return <ListItem key={listItem.id} {...listItem} />
            })}
      </ul>
    </Root>
  )
}

export default ListItems
