import name from 'random-name';
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  {
    id: uuidv4(),
    person: name.first(),
    note: 'Membeli Sayuran',
    complete: false,
  },
  {
    id: uuidv4(),
    person: name.first(),
    note: 'Rakit PC',
    complete: false,
  },
  {
    id: uuidv4(),
    person: name.first(),
    note: 'Membeli Baju',
    complete: true,
  },
  {
    id: uuidv4(),
    person: name.first(),
    note: 'Mencari byakugan',
    complete: false,
  },
];

export default initialState;
