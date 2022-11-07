import React from 'react';

const Heading = ({companiesCount =15}) => {
  return (
    <div>
      All organizations ({companiesCount})
    </div>
  );
}

export default Heading;
