import create from 'zustand';
import { devtools } from 'zustand/middleware';
import produce from 'immer';

// Turn the set method into an immer proxy
const immer = (config) => (set, get, api) =>
  config(
    (partial, replace) => {
      const nextState = typeof partial === 'function' ? produce(partial) : partial;
      return set(nextState, replace);
    },
    get,
    api,
  );

const appStore = (set) => ({
  playerName: 'test',
  difficulty: 'mid',
  selectedCategory: 'Random',
  setPlayerName: (name) =>
    set((state) => {
      state.playerName = name;
    }),
  setDifficulty: (difficulty) =>
    set((state) => {
      state.difficulty = difficulty;
    }),
  setCategory: (category) =>
    set((state) => {
      state.selectedCategory = category;
    }),
});

export const useAppStore = create(devtools(immer(appStore), { name: 'trivia_store' }));
