import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function DayCollapseComponent({ day }) {
  return (
    <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box my-2">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        {day.day}
      </div>
      <div className="collapse-content">
      <ul className="menu bg-base-100 p-2 rounded-box">
        {day.topics.map((topic, index) => 
        <li key={'topic' + index}>
          <a href={topic.url} target='_blank' rel="noreferrer" className='flex justify-between'><span>{topic.name}</span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></a>
        </li>)}
      </ul>
      </div>
    </div>
  )
}

export default DayCollapseComponent