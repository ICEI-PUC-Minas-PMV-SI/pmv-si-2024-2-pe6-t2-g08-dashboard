export default class Client {
  constructor(id, companyName, contactInfo, userId, contractUrl, planId) {
    (this.id = id), 
    (this.companyName = companyName), 
    (this.contactInfo = contactInfo), 
    (this.userId = userId),
    (this.contractUrl = contractUrl),
    (this.planId = planId);
  }
}
