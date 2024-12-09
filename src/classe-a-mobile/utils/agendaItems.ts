import isEmpty from 'lodash/isEmpty';

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(12);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays: number) {
  const array: string[] = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 8) {
      // set dates on the next month
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}
function getPastDate(numberOfDays: number) {
  return new Date(Date.now() - 864e5 * numberOfDays).toISOString().split('T')[0];
}

export const agendaItems = [
  {
    title: dates[0],
    data: [
      { hour: '12am', duration: '1h', title: 'Reunião de Marketing - Estratégias' },
      { hour: '9am', duration: '1h', title: 'Campanha de Inverno', itemCustomHeightType: 'LongEvent' },
    ],
  },
  {
    title: dates[1],
    data: [
      { hour: '4pm', duration: '1h', title: 'Visita ao Cliente ABC' },
      { hour: '5pm', duration: '1h', title: 'Campanha de Fidelidade' },
    ],
  },
  {
    title: dates[2],
    data: [
      { hour: '1pm', duration: '1h', title: 'Reunião de Marketing - Planejamento' },
      { hour: '2pm', duration: '1h', title: 'Campanha de Natal' },
      { hour: '3pm', duration: '1h', title: 'Visita a Influenciadores' },
    ],
  },
  {
    title: dates[3],
    data: [{ hour: '12am', duration: '1h', title: 'Reunião de Marketing - Táticas' }],
  },
  {
    title: dates[4],
    data: [{}],
  },
  {
    title: dates[5],
    data: [
      { hour: '9pm', duration: '1h', title: 'Campanha de Influência' },
      { hour: '10pm', duration: '1h', title: 'Visita a Parceiros' },
      { hour: '11pm', duration: '1h', title: 'Reunião de Alinhamento' },
      { hour: '12pm', duration: '1h', title: 'Campanha de Lançamento' },
    ],
  },
  {
    title: dates[6],
    data: [{ hour: '12am', duration: '1h', title: 'Visita a Cliente' }],
  },
  {
    title: dates[7],
    data: [{}],
  },
  {
    title: dates[8],
    data: [
      { hour: '9pm', duration: '1h', title: 'Campanha de Natal' },
      { hour: '10pm', duration: '1h', title: 'Reunião de Marketing' },
      { hour: '11pm', duration: '1h', title: 'Visita a Potenciais Parceiros' },
      { hour: '12pm', duration: '1h', title: 'Reunião de Estratégia' },
    ],
  },
  {
    title: dates[9],
    data: [
      { hour: '1pm', duration: '1h', title: 'Reunião de Marketing - Análise' },
      { hour: '2pm', duration: '1h', title: 'Campanha de Férias' },
      { hour: '3pm', duration: '1h', title: 'Visita a Clientes' },
    ],
  },
  {
    title: dates[10],
    data: [{ hour: '12am', duration: '1h', title: 'Visita Final ao Cliente' }],
  },
  {
    title: dates[11],
    data: [
      { hour: '1pm', duration: '1h', title: 'Reunião de Marketing - Revisão' },
      { hour: '2pm', duration: '1h', title: 'Campanha de Black Friday' },
      { hour: '3pm', duration: '1h', title: 'Visita a Influenciadores' },
    ],
  },
  {
    title: dates[12],
    data: [{ hour: '12am', duration: '1h', title: 'Reunião Final de Marketing' }],
  },
  {
    title: dates[13],
    data: [{ hour: '12am', duration: '1h', title: 'Visita Estratégica' }],
  },
];

export function getMarkedDates() {
  const marked = {};

  agendaItems.forEach((item) => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
      marked[item.title] = { marked: true };
    } else {
      marked[item.title] = { disabled: true };
    }
  });
  return marked;
}
