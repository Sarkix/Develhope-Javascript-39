const isLogged = true;

const promise1 = new Promise((resolve, reject) => {
  if (isLogged) {
    const randomNumber = Math.random();
    resolve(randomNumber);
  } else {
    reject(new Error("Usuario no autenticado"));
  }
});

const promise2 = (number) =>
  new Promise((resolve, reject) => {
    if (number > 0.5) {
      const data = { name: "Sara", age: 28 };
      resolve(data);
    } else {
      reject(new Error("Número menor o igual a 0.5"));
    }
  });

promise1
  .then((randomNumber) => {
    return promise2(randomNumber);
  })
  .then((finalData) => {
    console.log(finalData);
  })
  .catch((error) => {
    console.error(error.message);
  })
  .finally(() => {
    console.log("Operación finalizada.");
  });
