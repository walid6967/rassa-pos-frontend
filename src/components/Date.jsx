import {React , useState} from 'react'

import DatePicker from "react-multi-date-picker"
const Date = () => {
    const [value, setValue] = useState(new Date())
  return (
    <DatePicker 
    value={value}
    onChange={setValue}
  />
  )
}

export default Date