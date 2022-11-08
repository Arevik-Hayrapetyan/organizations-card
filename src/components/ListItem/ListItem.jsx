import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { red } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const Root = styled('div')(({ theme }) => ({
  '& .MuiCard-root': {
    padding: '20px',
  },
  '& .MuiInputBase-root': {
    height: '30px',
    width: '80px !important',
  },
  '.infoContainer': {
    display: 'flex',
    flexDirection: 'row',
  },
  '.protectionContainer': {
    marginLeft: 'auto',
  },
  '.trackingContainer': {},
  '.dropdownContent': {
    display: 'none',
    width: '40%',
    marginLeft: 'auto',
    marginTop: '20px',
    backgroundColor: ' #f9f9f9',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
  },
  '.dropdownContent li': {
    listStyle: 'none',
    padding: '4px',
  },
  '.show':{
    display:'block'
  }
}))

const ListItem = () => {
  const [show, setShow] = useState(false)

  function handleDropdown() {
    setShow(!show)
    if(show){

    }
  }
  return (
    <Root>
      <Card sx={{ maxWidth: 400, marginTop: '50px' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => handleDropdown()}>
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
        />

        <div className={`dropdownContent ${show?'show':null}`}>
          <li>Edit</li>
          <li>Go to Organization</li>
          <li>Delete Organization</li>
        </div>

        <h3>Licenses</h3>
        <section className="infoContainer">
          <div className="trackingContainer">
            <h4>Tracking:</h4>
            <p>
              In use: <span>{1245}</span>
            </p>
            <div>
              Assigned:
              <TextField id="outlined-number" label="" type="number" />
            </div>
          </div>

          <div className="protectionContainer">
            <h4>protection:</h4>
            <p>
              In use: <span>{1245}</span>
            </p>
            <div>
              Assigned:
              <TextField id="outlined-number" label="" type="number" />\
            </div>
          </div>
        </section>
      </Card>
    </Root>
  )
}

export default ListItem
