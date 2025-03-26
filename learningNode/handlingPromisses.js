const asyncFunc = (number, time) => {
  return new Promise(() =>
    setTimeout(() => console.log(`function ${number}`), time)
  );
};

(async () => {
  await Promise.all([asyncFunc(1, 200), asyncFunc(2, 100), asyncFunc(3, 300)])

  console.log("ola");
  asyncFunc(4, 50);
})();
