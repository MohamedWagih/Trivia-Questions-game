import produce from 'immer';
import create from 'zustand';
import { devtools } from 'zustand/middleware';

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

const initialState = {
  playerName: '',
  difficulty: 'medium',
  selectedCategory: '-1',
  timerLimit: 60,
  timerCount: 60,
  playedCategories: [],
  totalPlayedTime: 0,
  score: {
    correct: 0,
    wrong: 0,
    skipped: 0,
  },
  selectedAnswer: '',
  questionCounter: 0,
  questionsTimes: [],
};

const appStore = (set) => ({
  ...structuredClone(initialState),
  initStoreState: () => set(() => structuredClone(initialState)),
  setPlayerName: (name) =>
    set((state) => {
      state.playerName = name;
    }),
  setDifficulty: (difficulty) =>
    set((state) => {
      state.difficulty = difficulty;
      if (difficulty === 'easy') {
        state.timerLimit = 90;
        state.timerCount = 90;
      } else if (difficulty === 'medium') {
        state.timerLimit = 60;
        state.timerCount = 60;
      } else {
        state.timerLimit = 30;
        state.timerCount = 30;
      }
    }),
  setCategory: (category) =>
    set((state) => {
      state.selectedCategory = category;
    }),
  setTimerCount: (count) =>
    set((state) => {
      state.timerCount = count;
    }),
  decTimerCount: () =>
    set((state) => {
      state.timerCount -= 1;
    }),
  playSelectedCategory: () =>
    set((state) => {
      state.playedCategories.push(state.selectedCategory);
    }),
  incTotalPlayedTime: () =>
    set((state) => {
      state.totalPlayedTime += 1;
    }),
  incCorrect: () =>
    set((state) => {
      state.score.correct += 1;
    }),
  incWrong: () =>
    set((state) => {
      state.score.wrong += 1;
    }),
  incSkipped: () =>
    set((state) => {
      state.score.skipped += 1;
    }),
  setSelectedAnswer: (answer) =>
    set((state) => {
      state.selectedAnswer = answer;
    }),
  incQuestionCounter: () =>
    set((state) => {
      state.questionCounter += 1;
      state.questionsTimes.push(state.timerLimit - state.timerCount);
    }),
  setQuestionCounter: (counter) =>
    set((state) => {
      state.questionCounter = counter;
    }),
  submitCurrAnswer: (correctAnswer) =>
    set((state) => {
      if (state.selectedAnswer === correctAnswer) {
        state.score.correct += 1;
      } else {
        state.score.wrong += 1;
      }
    }),
});

export const useAppStore = create(devtools(immer(appStore), { name: 'trivia_store' }));
