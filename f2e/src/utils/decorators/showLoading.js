// https://blog.bitsrc.io/errors-handling-for-vue-class-components-2f152f7c7515
/* eslint consistent-return:0, func-names:0 */

type CatchDecoratorStoreType = {
  handler: (message:string)=>void;
}

export const catchDecoratorStore:CatchDecoratorStoreType = {
  handler: null,
  setHandler(handler:(message:string)=>void) {
    this.handler = handler;
  },
};

export function showLoader(target:any, key:string, descriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = async function (...args) {
    try {
      this.$bus.$emit('showLoading', true);
      return await originalMethod.apply(this, args);
    } catch (error) {
      const { message } = error;
      console.warn(`%c 😳 ${message}`, 'background: #f39c12; color: black; font-size:13px;');
      const { handler } = catchDecoratorStore;
      if (handler && typeof handler === 'function') { return handler(message); }
    } finally {
      this.$bus.$emit('showLoading', false);
    }
  };
  return descriptor;
}
