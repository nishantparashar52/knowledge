export default class Singleton {
    constructor() {
      if(Singleton.instance) {
        return Singleton.instance;
      }
  
      this.settings = {}; // this will store the configuration settings
  
      Singleton.instance = this;
    }
  
    getSetting(name) {
      return this.settings[name];
    }
  }