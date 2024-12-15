export default class CalendarEvent {
  constructor(id, date, title, hour, duration, clientId) {
    this.id = id;
    this.date = date;
    this.title = title;
    this.hour = hour;
    this.duration = duration;
    this.clientId = clientId;
  }
}
