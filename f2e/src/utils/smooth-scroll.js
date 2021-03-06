/* eslint max-len:0 */
// import { TweenMax, Power2 } from 'gsap';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
/**
 *
 * @param {string|number} value
 * @param {number} offset
 * @param {number} duration
 * @return {Promise}
 */
export const smoothScroll = (dom:string, duration:number = 0.35) => new Promise(((resolve) => {
  gsap.to(window, {
    duration,
    scrollTo: {
      y: dom,
      autoKill: false,
    },
    ease: 'power2.out',
    onComplete: resolve,
  });
}));

export const scrollToTop = () => {
  const top:number = document.documentElement.scrollTop || document.body.scrollTop;
  if (top > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, top - top / 8);
  }
};
