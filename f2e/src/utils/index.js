let queryStringObject = null;
export const queryString = ():Object => {
  if (queryStringObject) {
    return queryStringObject;
  }
  if (!window?.location?.search) {
    queryStringObject = {};
    return queryStringObject;
  }
  const search:string = window.location.search.substring(1);
  queryStringObject = JSON.parse(`{"${decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"')}"}`);
  return queryStringObject;
};


export type Position = {
  top:number,
  left:number,
  height:number,
  width:number
}
/**
 * get element position relative to the document;
 * @param {HTMLElement|string} ele
 * @return {Position}
 */
export const getElementPosition = (value:HTMLElement|string):Position => {
  if (!value) {
    return null;
  }
  if (typeof value === 'string') {
    // eslint-disable-next-line
    value = document.querySelector(value);
  }
  const { body } = document;
  const rect = value.getBoundingClientRect();

  const doc = document.documentElement;

  const scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
  const scrollLeft = window.pageXOffset || doc.scrollLeft || body.scrollLeft || 0;

  const clientTop = doc.clientTop || body.clientTop || 0;
  const clientLeft = doc.clientLeft || body.clientLeft || 0;

  const top = (rect.top + scrollTop) - clientTop;
  const left = (rect.left + scrollLeft) - clientLeft;

  return {
    top: top | 0,
    left: left | 0,
    width: rect.width,
    height: rect.height,
  };
};


// https://www.trysmudford.com/blog/linear-interpolation-functions/
export const lerp = (x: number, y: number, value: number) => x * (1 - value) + y * value;
export const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));
export const invlerp = (x: number, y: number, value: number) => clamp((value - x) / (y - x));
export const range = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  value: number,
) => lerp(x2, y2, invlerp(x1, y1, value));


export const debounce = function (func:()=>void, threshold:number = 200, execAsap:boolean) {
  let timeout;

  return function () {
    const obj = this;
    const args = arguments; // eslint-disable-line
    function delayed() {
      if (!execAsap) { func.apply(obj, args); }
      timeout = null;
    }
    if (timeout) {
      clearTimeout(timeout);
    } else if (execAsap) {
      func.apply(obj, args);
    }
    timeout = setTimeout(delayed, threshold);
  };
};

export function throttle(fn:()=>void, delay:number = 300) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn();
      flag = true;
    }, delay);
  };
}
