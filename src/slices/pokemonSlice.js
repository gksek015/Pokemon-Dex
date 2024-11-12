import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const pokemonSlice =createSlice({
    name: "pokemon",
    initialState: {selectedPokemon: []},
    reducers: {
        addPokemon: (state, action) => {
            const existingPokemon = state.selectedPokemon.find(
                (pokemon) => pokemon.id === action.payload.id
            );
            if (existingPokemon) {
                toast.info("이미 추가된 포켓몬입니다.");
                return;
            }
            if (state.selectedPokemon.length >= 6) {
                toast.info("최대 6개까지만 추가할 수 있습니다.");
                return;
            }
            state.selectedPokemon.push(action.payload);
        },
        removePokemon: (state, action) => {
            state.selectedPokemon = state.selectedPokemon.filter(
                (pokemon) => pokemon.id !== action.payload
            );
        }
    }
})

export const {addPokemon, removePokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;