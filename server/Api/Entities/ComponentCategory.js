import validator from '../../validation';

export default class ComponentCategory {
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
  
  static apiURI() { return 'component_category';}
  
  static apiDatabaseTable() { return 'component_category';}
  
  static apiDatabaseId() { return 'component_category_id';}
}