import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { red } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material/styles'

const Root = styled('div')(({ theme }) => ({
  position: 'relative',
  '& .MuiCardHeader-root': {
    padding: 'unset',
  },
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
  '.trackingContainer': {
    marginRight: 50,
  },
  '.dropdownContent': {
    display: 'none',
    position: 'absolute',
    marginLeft: 'auto',
    backgroundColor: ' #f9f9f9',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1,
    right: '13%',
  },
  '.dropdownContent li': {
    listStyle: 'none',
    padding: '4px',
  },
  '.show': {
    display: 'block',
  },
  '.licences': {
    color: '#282828',
    fontSize: 17,
    fontWeight: 500,
    margin: 0,
    marginTop: 15,
  },
  '.heading': {
    color: '#282828',
    fontSize: 15,
    fontWeight: 500,
  },
  '& .MuiTypography-root': {
    fontWeight: 600,
    fontSize: 17,
  },
  
}))

const ListItem = ({id, name, tracking, protection}) => {
  const [show, setShow] = useState(false)



  function handleDropdown() {
    setShow(!show)
  }
  return (
    <Root>
      <Card sx={{ maxWidth: 400, margin: '40px' }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {name.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={() => handleDropdown()}>
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
        />

        <div className={`dropdownContent ${show ? 'show' : null}`}>
          <li>Edit</li>
          <li>Go to Organization</li>
          <li>Delete Organization</li>
        </div>

        <h3 className="licences">Licenses</h3>
        <section className="infoContainer">
          <div className="trackingContainer ">
            <h4 className="heading">Tracking:</h4>
            <p>
              In use: <span>{tracking.used}</span>
            </p>
            <div>
              Assigned:
              <TextField id="outlined-number" label="" type="number" value={tracking.assigned} />
            </div>
          </div>

          <div className="protectionContainer">
            <h4 className="heading">Protection:</h4>
            <p>
              In use: <span>{protection.used}</span>
            </p>
            <div>
              Assigned:
              <TextField id="outlined-number" label="" type="number" value={protection.assigned}/>
            </div>
          </div>
        </section>
      </Card>
    </Root>
  )
}

export default ListItem
