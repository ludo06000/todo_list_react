import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux';

function Form() {
  // Utiliser un état local pour stocker la valeur de l'entrée pour une nouvelle tâche
  const [newInput, setNewInput] = useState("");

  // Récupérer le dispatch de l'objet de magasin pour déclencher des actions
  const dispatch = useDispatch();

  // Fonction de gestionnaire de soumission de formulaire pour ajouter une nouvelle tâche
  const handlerSubmit = (e) => {
    // Empêcher le comportement par défaut du formulaire de soumettre la page
    e.preventDefault();

    /*
    Déclencher l'action addItem avec le texte de la nouvelle tâche en tant que payload
      Soit on utilise dispatch de cette façon
              dispatch({
                type: "todo/addItem",
                payload: newInput
              });
      Soit on peut utiliser la manière condensée
    */
    dispatch(addItem(newInput))


    // Réinitialiser l'état local de l'entrée pour une nouvelle tâche à une chaîne vide
    setNewInput("");
  };


  return (
    <>
        <form className="mb-3" onSubmit={(e) => handlerSubmit(e)}>
            <label htmlFor="todo" className='form-label mt-3'> Chose à faire</label>
            <input  type="text"
                    name="todo"
                    id="todo"
                    className='form-control'
                    onChange={(e) => setNewInput(e.target.value)}
                    value={newInput}
                    />

            <button className='mt-2 btn btn-primary d-block'>Envoyer</button>
        </form>
    </>
  )
}

export default Form