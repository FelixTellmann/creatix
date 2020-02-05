import validator from '../../validation';

export default class Component {
  constructor(data = {}, update = false) {
    const defaults = {
      name: null,
      description: null,
      icon: null,
      react_source: null,
      created_at: new Date(),
      modified_at: new Date(),
    };
    
    if (update) {
      delete defaults.created_at;
    }
    Object.assign(this, { ...defaults, ...validator.filter(data, defaults), modified_at: new Date() });
  }
  
  static apiURI() { return 'component';}
  
  static apiDatabaseTable() { return 'component';}
  
  static apiDatabaseId() { return 'component_id';}
}