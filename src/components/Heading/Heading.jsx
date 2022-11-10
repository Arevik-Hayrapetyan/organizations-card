import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../../redux/slices/organizationSlice';

const Heading = () => {
  const count = useSelector(selectCount)
  return (
    <div>
      All organizations ({count})
    </div>
  );
}

export default Heading;
