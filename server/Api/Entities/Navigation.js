import validator from '../../validation';

export default class Navigation {
  constructor(data = {}, update = false) {
    const defaults = {
      name: null,
      href: null,
      created_at: new Date(),
      modified_at: new Date(),
    };
    
    if (update) {
      delete defaults.created_at;
    }
    Object.assign(this, { ...defaults, ...validator.filter(data, defaults), modified_at: new Date() });
  }
  
  static apiURI() { return 'navigation';}
  
  static apiDatabaseTable() { return 'navigation';}
  
  static apiDatabaseId() { return 'navigation_id';}
}