import React from 'react'
import  './TodoIcon.css'
import { ReactComponent as CheckmarkSVG } from './checkmark.svg'
import { ReactComponent as TrashSVG } from './trash.svg';
import { ReactComponent as DisablekSVG } from './disable.svg';
const TodoIcon = ({ type,onClick,color }) => {
    const iconTypes = {
    "check": color =>(<CheckmarkSVG  className="Icon-svg Icon-svg--check" fill={color} />),
     "delete": color => (
    <TrashSVG className="Icon-svg Icon-svg--delete" fill={color} />
  ),
     "disable":color =>(<DisablekSVG className="Icon-svg Icon-svg--uncheck" fill={color}/>),
  }
   return (
        <span className={`Icon-container Icon-container--${type}}`}
        onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    )
}

export  {TodoIcon}