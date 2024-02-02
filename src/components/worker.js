// worker.js
onmessage = (ev) => {
  if (ev.data === "start") {
    let sum = 0;

    for (let i = 0; i < 5000000000; i++) {
      sum += i;
    }

    postMessage(42);
  }
};
