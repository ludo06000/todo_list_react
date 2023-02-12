import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../redux'

function Item(props) {

  // console.log(props)
  const dispatch = useDispatch()

  return (
    <li className="border d-flex justify-content-between align-items-center p-2 m-2">
        <div className="p-3">{props.item.texte}</div>
        <button onClick={() => dispatch(deleteItem(props.item.id))} className="btn btn-danger p-2 h-50">Supprimer</button>
    </li>

  )
}

export default Item