try {
  global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
  console.log(typeof localStorage.getItem);
} catch (e) { console.log(e); }
