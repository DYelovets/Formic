const cache = new Map();

/* Померять время исполенния для двух одинаковых аргументов
    250, 49
    523, 23

    console.time()
    console.timeEnd()

*/

export const pow = (base, exp) => {
  const key = `${base}${exp}`;

  if (!cache.has(key)) {
    cache.set(key, base ** exp);
  }

  return cache.get(key);
};

export const sum = (...args) => args.reduce((i, t) => i + t, 0);

export const mul = (a, b) => a * b;

export const div = (a, b) => a / b;

const secret = 'secret';
