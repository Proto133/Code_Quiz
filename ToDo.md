<ol>
<li>Modify CSS to fix what quiz questions look like on mobile (less than 400px)</li>
</ol>

<h3> This fixes the 2second count down thing</h3>

<div>
    <code>
        //Create the timer function


    function startTimer(duration, display) {
        var timer = duration,
            minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = "You have " +
                minutes + ":" + seconds + " remaining.";

            if (--timer < 0) {
                timer = duration;
         }
        }, 1000);
    }

    window.onload = function() {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#timerDiv');
    startTimer(fiveMinutes, display);
};

    </code>
</div>

