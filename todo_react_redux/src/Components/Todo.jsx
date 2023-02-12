import React  from 'react'
import { useSelector } from 'react-redux'
import Form from './Form';
import Item from './Item'

function Todo() {

    const items = useSelector((state) => state.todo);

  return (
    <>
        <div className="m-auto px4 col-12 col-sm-10 col-lg-6">
            <Form />
            <h2>Liste des choses à faire :</h2>

            <ul className="list-group">
                {items.map((item) => {
                    return(
                        <Item item={item} key={item.id} id={item.id} />
                    )
                })}
            </ul>

        </div>

    </>
  )
}

export default Todo