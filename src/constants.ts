import { generateUniqueId } from './helpers';

export const INITIAL_TODOS = [
  { text: 'Buy milk', done: true, id: generateUniqueId() },
  { text: 'Buy bread', done: false, id: generateUniqueId() }
];
