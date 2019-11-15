import angular from 'angular';

const moduleName = 'lean-meals.services.session';
class Service {

  memoryCache = {};

  constructor($q, $window) {
    this.q = $q;
    this.window = $window;
  }

  clear() {
    this.memoryCache = {};
    this.window.sessionStorage.clear();
  }

  decode(str) {
    return this.window.atob(str);
  }

  encode(str) {
    return this.window.btoa(str);
  }

  get(key, defaultValue) {
    if (this.memoryCache.hasOwnProperty(key)) {
      return this.memoryCache[key];
    } else {
      const value = this.window.sessionStorage.getItem(key);
      if (Boolean(value)) {
        this.memoryCache[key] = value;
        return value;
      } else {
        return defaultValue;
      }
    }
  }

  getAsync(key) {
    return this.q((resolve, reject) => {
      const value = this.get(key);
      if (angular.isDefined(value)) {
        resolve(value);
      } else {
        reject(new Error(`Session: ${key} not found`));
      }
    });
  }

  getObject(key) {
    const value = this.get(key);
    if (angular.isDefined(value)) {
      return this.memoryCache[key] = angular.fromJson(value);
    } else {
      return value;
    }
  }

  getObjectAsync(key) {
    return this.getAsync(key).then((value) => {
      const finalValue = angular.fromJson(value);
      this.memoryCache[key] = finalValue;
      return finalValue;
    });
  }
  
  remove(key) {
    if(this.memoryCache.hasOwnProperty(key)) {
      delete this.memoryCache[key];
    }
    this.window.sessionStorage.removeItem(key);
  }

  set(key, value) {
    this.memoryCache[key] = value;
    this.window.sessionStorage.setItem(key, value);
  }

  setObject(key, obj) {
    this.set(key, angular.toJson(obj));
  }

}
Service.$inject = [ '$q', '$window' ];

angular.module(moduleName, []).service('$session', Service);

export default moduleName;
