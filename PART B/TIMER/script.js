document.addEventListener('DOMContentLoaded', function () {
    // Set the countdown time in seconds
    const countdownTimeInSeconds = 50 * 60; // 5 minutes
  
    // Get the timer element
    const timerElement = document.getElementById('timer');
  
    // Start the countdown
    startCountdown(countdownTimeInSeconds, timerElement);
  });
  
  function startCountdown(seconds, displayElement) {
    let timer = seconds;
  
    // Update the timer display every second
    const countdown = setInterval(function () {
      const minutes = Math.floor(timer / 60);
      const seconds = timer % 60;
  
      // Display the time in the format MM:SS
      displayElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
      // Decrease the timer
      timer--;
  
      // Check if the timer has reached zero
      if (timer < 0) {
        clearInterval(countdown);
        displayElement.textContent = "Time's up!";
      }
    }, 1000);
  }