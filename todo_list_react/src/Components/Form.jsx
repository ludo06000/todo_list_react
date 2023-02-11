import React, { useState } from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid';

function Form() {
    const [dataArray, setDataArray] = useState([
        {texte: "Faire ma saisie comptable", id: uuidv4()},
        {texte: "Faire ma Tva", id: uuidv4()},
        {texte: "Faire ma déclaration d'Is", id: uuidv4()}
    ])

    const [newInput, setNewInput]=useState("")

    // Fonction pour supprimer un élément du tableau dataArray en fonction de son id
    const deleteElement = (id) => {
        // Filtrage de dataArray pour ne conserver que les éléments dont l'id est différent de celui passé en argument
        //Méthode filter : retourner un nouveeau tableau filtré où l'élément ayant un id différent de celui passé en argument est retenu.
        const filteredState = dataArray.filter(item => {
            return item.id !== id;
        })
        // Mise à jour de l'état avec le nouvel état filtré
        setDataArray(filteredState);
    }

    const getInputValue = (e) => {
        setNewInput(e);
    }

    // Fonction gérant la soumission du formulaire pour ajouter un nouvel élément à la liste
    const handlerSubmit = (e) => {
        // Empêcher le comportement par défaut du formulaire de soumettre la page
        e.preventDefault();

        // Créer une copie du tableau de données existant pour éviter la modification du state directement
        const newArr = [...dataArray];

        // Créer un nouvel objet pour le nouvel élément à ajouter à la liste
        const newTodo = {};
        newTodo.texte = newInput;
        newTodo.id = uuidv4();

        // Ajouter le nouvel élément à la copie du tableau de données
        newArr.push(newTodo);

        // Mettre à jour le state avec la copie du tableau de données modifié
        setDataArray(newArr);

        // Réinitialiser la valeur de l'input pour saisir un nouvel élément
        setNewInput("");
    }


  return (
    <>
        <div className="m-auto px4 col-12 col-sm-10 col-lg-6">
            <form className="mb-3" onSubmit={(e) => handlerSubmit(e)}>
                <label htmlFor="todo" className='form-label mt-3'> Chose à faire</label>
                <input  type="text"
                        name="todo"
                        id="todo"
                        className='form-control'
                        onInput={(e) => getInputValue(e.target.value)}
                        value={newInput}
                        />

                <button className='mt-2 btn btn-primary d-block'>Envoyer</button>
            </form>

            <h2>Liste des choses à faire :</h2>
            {/*
                Génération d'une liste non ordonnée à partir de dataArray
                La méthode map est utilisée pour itérer sur les éléments de dataArray et pour chaque élément,
                elle renvoie un composant Item avec les propriétés suivantes :

                item : un objet représentant un élément du tableau dataArray.
                key : une clé unique pour identifier chaque élément du tableau, dans ce cas,
                      l'identifiant id de chaque élément est utilisé en tant que clé.
                id : l'identifiant de l'élément du tableau.
                deleteFunc : une référence à la fonction deleteElement
                             qui sera utilisée pour supprimer un élément du tableau.
            */
            }
            <ul className="list-group">
                {dataArray.map((item) => {
                    {/* Rendu de chaque élément sous forme de composant Item avec les propriétés item, key, id, et deleteFunc */}
                    return(
                        <Item item={item} key={item.id} id={item.id} deleteFunc={deleteElement} />
                    )
                })}
            </ul>

        </div>

    </>
  )
}

export default Form