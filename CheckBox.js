import React,{useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return(
    <Checkbox
    checked={checked}
    onChange={handleChange}
    color="primary"
    inputProps={{ 'aria-label': 'primary checkbox' }}
  />
  );
}