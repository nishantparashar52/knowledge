import Singleton from "./Base.js";
class ConfigurationManager extends Singleton {
    constructor() {
      super();
    }
  
    loadSettingsFromFile(path) {
      debugger;
      // logic to load settings from file
      // and set them on this.settings
    }
  
    loadSettingsFromDatabase(connection) {
      // logic to load settings from database
      // and set them on this.settings
    }
  }
  
  // Example usage:
  const configManager = new ConfigurationManager();
  
  // Load settings from file
  configManager.loadSettingsFromFile('./config.json');
  
  // Load additional settings from database
  configManager.loadSettingsFromDatabase('');
  
  // Get a setting
  const apiUrl = configManager.getSetting('apiUrl');