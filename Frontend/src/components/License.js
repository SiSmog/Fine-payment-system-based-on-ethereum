import React from 'react';
import "./License.css"
const LicensePlate = (props) => {
    const text=props.text

  return (
    <bdo className='licensePlate'>
        {text}
    </bdo>
  );
};

export default LicensePlate;