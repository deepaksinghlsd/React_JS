import React from 'react'
import css from './ListContarner.module.css'
const ListContaner = (props) => {
  return (
    <div className={css.listItem}>{props.children}</div>
  )
}

export default ListContaner