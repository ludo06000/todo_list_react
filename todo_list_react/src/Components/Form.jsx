import React, { useState } from 'react'
import Item from './Item'
import uuid4 from 'uuid4'

function Form() {
    const [dataArr, setDataArr] = useState([
        {txt: "Faire ma saisie comptable"},
        {txt: "Faire ma Tva"},
        {txt: "Faire ma déclaration d'Is"}
    ])

  return (
    <>
        <div className="m-auto px4 col-12 col-sm-10 col-lg-6">
            <form className="mb-3">
                <label htmlFor="todo" className='form-label mt-3'> Chose à faire</label>
                <input type="text" name="todo" id="todo"  className='form-control'/>

                <button className='mt-2 btn btn-primary d-block'>Envoyer</button>
            </form>

            <h2>Liste des choses à faire :</h2>
            <ul className="list-group">
                {dataArr.map((item, index) => {
                    return(
                        <Item item={item} key={index} id={uuid4}/>
                    )
                })}
            </ul>

        </div>

    </>
  )
}

export default Form