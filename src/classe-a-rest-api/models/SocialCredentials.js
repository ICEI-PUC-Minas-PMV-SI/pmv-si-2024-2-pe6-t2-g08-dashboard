export default class SocialCredentials {
  constructor(id, clientId, email, password, type) {
    (this.id = id), 
    (this.clientId = clientId), 
    (this.email = email), 
    (this.password = password),
    (this.type = type);
  }
}
