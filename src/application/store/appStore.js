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
  playerName: 'player',
  difficulty: 'mid',
  selectedCategory: '-1',
  timerCount: 60,
  playedCategories: [],
  setPlayerName: (name) =>
    set((state) => {
      state.playerName = name;
    }),
  setDifficulty: (difficulty) =>
    set((state) => {
      state.difficulty = difficulty;
      if (difficulty === 'easy') state.timerCount = 90;
      else if (difficulty === 'mid') state.timerCount = 60;
      else state.timerCount = 30;
    }),
  setCategory: (category) =>
    set((state) => {
      state.selectedCategory = category;
    }),
  setTimerCount: (count) =>
    set((state) => {
      state.timerCount = count;
    }),
  playSelectedCategory: () =>
    set((state) => {
      state.playedCategories.push(state.selectedCategory);
    }),
});

export const useAppStore = create(devtools(immer(appStore), { name: 'trivia_store' }));
