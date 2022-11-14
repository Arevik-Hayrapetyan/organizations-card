import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { red } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import InfoContainer from '../InfoContainer/InfoContainer'
import { Root } from './style'

const ListItem = (props) => {
  const [show, setShow] = useState(false)

  function handleChange(event) {
    console.log(event.target.value, 'Input')
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
              {props.name.charAt(0).toUpperCase()}
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
          <li>Edit</li>
          <li>Go to Organization</li>
          <li>Delete Organization</li>
        </div>

        <h3 className="licences">Licenses</h3>
        <InfoContainer disabledBorder={true} props={props}/>
      </Card>
    </Root>
  )
}

export default ListItem
