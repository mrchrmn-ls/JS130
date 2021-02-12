function delayLog(times) {
  for (let count = 1; count <= times; count += 1) {
    setTimeout(function() {
      console.log(`1 second later. (${count} second(s) after start)`)
    }, count * 1000);
  }
}

delayLog(7);