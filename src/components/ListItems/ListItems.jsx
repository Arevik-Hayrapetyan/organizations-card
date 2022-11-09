import React, {Fragment, useEffect} from 'react';
import ListItem from '../ListItem/ListItem';
import organizationsData  from "../../data/fakeJSONData.json"


const ListItems = () => {
useEffect(() => {
}, []);
  return (
    <Fragment >
    <ul style={{display:'flex', flexWrap:'wrap', listStyle:'none', justifyItems:'center'}}>
      {organizationsData.map(listItem => {
        return <ListItem key={listItem.id} {...listItem}/>
       
      })}
    </ul>
    </Fragment>
  );
}

export default ListItems;
