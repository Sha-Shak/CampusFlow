import React from 'react'

function Toggle() {
  return (
    <div><input type="checkbox" className="toggle"  onChange={()=>{
      console.log('toggle')
    }}/></div>
  )
}

export default Toggle