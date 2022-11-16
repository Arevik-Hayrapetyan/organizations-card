import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleDeleteCompany } from '../../redux/slices/organizationSlice'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { red } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import InfoContainer from '../InfoContainer/InfoContainer'
import { Root } from './style'

const ListItem = (props) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  function handleDelete() {
    const id = props.id
    dispatch(handleDeleteCompany(id))
  }

  function handleDropdown() {
    setShow(!show)
  }
  return (
    <Root>
      <Card sx={{ maxWidth: 400, margin: '40px' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {props.name.trim().charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => handleDropdown()}>
              <MoreVertIcon />
            </IconButton>
          }
          title={props.name}
        />

        <div className={`dropdownContent ${show ? 'show' : null}`}>
          {/* <li>Edit</li> */}
          <li>
            <Link to={`company/${props.id}`}> Go to Organization</Link>
          </li>
          <li className="deleteBtn" onClick={() => handleDelete()}>
            Delete Organization
          </li>
        </div>

        <h3 className="licences">Licenses</h3>
        <InfoContainer disabledBorder={true} props={props} />
      </Card>
    </Root>
  )
}

export default ListItem
