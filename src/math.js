export const pow = (base, exp) => {
  return base ** exp;
};

export const sum = (...args) => args.reduce((i, t) => i + t, 0);

export const mul = (a, b) => a * b;

export const div = (a, b) => a / b;

const secret = 'secret';

const SUPER_FUNCTION = ()=>{}

export default SUPER_FUNCTION;
