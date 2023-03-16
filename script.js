let counters = document.querySelectorAll(".container .card .text-place .counter");

counters.forEach((counter) => {
  counter.innerText = 0;
  function SetCounterUp() {
    let counterText = +counter.innerText;
    let maxNum = counter.getAttribute("data-target");
    let speed = maxNum / 100;
    if (counterText < maxNum) {
      counter.innerText = counterText + Math.ceil(speed);
    }
    setInterval(() => {
      SetCounterUp();
    }, 100);
  }
  SetCounterUp();
});
