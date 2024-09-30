export default class Payment {
  constructor(id, clientId, amount, date, type) {
    (this.id = id), 
    (this.clientId = clientId), 
    (this.amount = amount), 
    (this.date = date),
    (this.type = type);
  }
}
