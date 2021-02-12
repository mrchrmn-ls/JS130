let id;

function startCounting() {
  let second = 1;
  id = setInterval(() => {
    console.log(second);
    second++;
  }, 1000);
}

function stopCounting() {
  clearInterval(id);
}

startCounting();

setTimeout(stopCounting, 5500);