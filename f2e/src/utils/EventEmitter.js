
export default class EventEmitter<T> {
  constructor() {
    const events:Map<String, Function<T>[]> = {};
    this.events = events;
  }

  on(type:string, callBack:()=>void) {
    if (!this.events[type]) {
      this.events[type] = [callBack];
    } else {
      this.events[type].push(callBack);
    }
  }

  off(type:string, callBack:()=>void) {
    if (!this.events[type]) {
      return;
    }
    this.events[type] = this.events[type].filter((item) => item !== callBack);
  }

  once(type:string, callBack:()=>void) {
    const innerCallback = () => {
      callBack();
      this.off(type, innerCallback);
    };
    this.on(type, innerCallback);
  }

  emit(type:string, ...rest) {
    if (!this.events[type]) {
      return;
    }
    this.events[type].forEach((fn:Function) => fn.apply(this, rest));
  }

  removeListeners(type:string) {
    if (!this.events[type]) {
      return;
    }
    this.events[type].length = 0;
    delete this.events[type];
  }

  removeAllListeners() {
    this.events = {};
  }
}
