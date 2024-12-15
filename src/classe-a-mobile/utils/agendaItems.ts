import isEmpty from 'lodash/isEmpty';

export function getMarkedDates(agendaItems) {
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

export function groupEventsByDate(events) {
  // Initialize an object to group the events by date
  const groupedEvents = {};

  // Loop through each event in the input array
  events.forEach(event => {
    const { date, hour, duration, title, clientId } = event;

    // If the date doesn't exist in the groupedEvents object, initialize it
    if (!groupedEvents[date]) {
      groupedEvents[date] = { title: date, data: [] };
    }

    // Push the event details into the 'data' array for that date
    groupedEvents[date].data.push({ hour, duration, title });
  });

  // Convert the grouped events object into an array and return it
  return Object.values(groupedEvents);
}
