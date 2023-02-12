import { configureStore, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    // Définit le nom du slice pour l'identifier dans l'état global du magasin
    name: "todo",
  
    // Définit l'état initial du slice, qui est un tableau d'objets représentant des tâches à faire
    initialState: [
      {texte: "Faire ma saisie comptable", id: uuidv4()},
      {texte: "Faire ma Tva", id: uuidv4()},
      {texte: "Faire ma déclaration d'IS", id: uuidv4()}
    ],
  
    // Définit les réducteurs qui vont mettre à jour l'état du slice en réponse à des actions
    reducers: {
      // Réducteur pour ajouter une nouvelle tâche à la liste
      addItem: (state, action) => {
        // Créer un nouvel objet pour la tâche avec un texte et un ID généré à l'aide de uuidv4
        const newTodo = {
          id: uuidv4(),
          texte: action.payload
        };
  
        // Ajouter la nouvelle tâche à la fin de la liste
        state.push(newTodo);
      },
  
      // Réducteur pour supprimer une tâche existante de la liste
      deleteItem: (state, action) => {
        // Retourner un nouveau tableau sans l'élément correspondant à l'ID donné
        return state.filter(item => item.id !== action.payload);
      }
    }
  });


// Exporter les actions addItem et deleteItem depuis le slice de tâche
export const {addItem, deleteItem} = todoSlice.actions;

// Exporter un objet de magasin configuré avec le réducteur de tâche
export const store = configureStore({
  // Définir les réducteurs disponibles dans le magasin, ici seulement le réducteur de tâche
  reducer: {
    todo: todoSlice.reducer
  }
});
