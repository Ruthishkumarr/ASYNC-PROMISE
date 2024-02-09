/*  Promise Example Program

const input= parseInt(prompt());
const value = new Promise((resolve, reject) => {
  if ( input >= 18) {
    resolve("Eligible to Vote");
  } else {
    reject("Not Eligible");
  }
});
value.then((data) => console.log(data)).catch((error) => console.log(error)); */

//--------------------------------------------------------

/* Promise In Function

function promisee(num) {
  return new Promise((resolve, reject) => {
    resolve("This is for Example", num);
    reject("this is reject", num);
  });
}
promisee(12)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
*/

//-----------------------------------------------------------

// Promise Chain
/*
function chain(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 2), 3000);
  });
}
chain(0)
  .then((data) => {
    console.log(data);
    return chain(data);
  })
  .then((data2) => {
    console.log(data2);
    return chain(data2);
  })
  .then((data3) => {
    console.log(data3);
    return chain(data3);
  })
  .then((data4) => {
    console.log(data4);
    return chain(data4);
  })
  .then((data5) => console.log(data5))
  .catch((error) => console.log(error));
*/
//-----------------------------------------------------------------------------

// Promise.all()

/*
const promise1 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("promise 1 is Resolved"), 3000);
  } else {
    reject("promise 1 is Rejected");
  }
});
const promise2 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("promise 2 is Resolved"), 3000);
  } else {
    reject("promise 2 is Rejected");
  }
});
const promise3 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("promise 3 is Resolved"), 3000);
  } else {
    reject("promise 3 is Rejected");
  }
});
Promise.all([promise1, promise2, promise3])
  .then((data) => console.log(data))
  .then((error) => console.log(error)); */

// ------------------------------------------------------------------------------------------------------

// Promise.allSettled()

const promise1 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("promise 1 is Resolved"), 3000);
  } else {
    reject("promise 1 is Rejected");
  }
});
const promise2 = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => resolve("promise 2 is Resolved"), 3000);
  } else {
    reject("promise 2 is Rejected");
  }
});
const promise3 = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => resolve("promise 3 is Resolved"), 3000);
  } else {
    reject("promise 3 is Rejected");
  }
});

const result = Promise.allSettled([promise1, promise2, promise3]).then((data) =>
  data.forEach((result) => console.log(result))
);

//-------------------------------------------------------------------------------------------------------------------------------
