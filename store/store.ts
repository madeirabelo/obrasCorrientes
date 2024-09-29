// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'; // {{ edit_1 }}

// Define initial state
const initialState = {
  presupuesto: "1.000.000 ARS",
  inicioObra: "2024-01-01",
  finObra: "2024-12-31",
  descripcion: "Reconstrucción del sistema de alcantarillado de la calle Catamarca"
};

// Define a reducer
const obraReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_OBRA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

// Create the store
const store = configureStore({ reducer: obraReducer }); // {{ edit_2 }}

export default store;