<script>
    let totalSeconds = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function stopStopwatch() {
        clearInterval(stopwatchState);
        savedSeconds = totalSeconds;
    }

    
    let startTime = Date.now();
    let stopwatchState;
    function startStopwatch() {
        startTime = Date.now();
        stopwatchState = setInterval(incrementTimer, 1000);
    }

    // Timer increment, updates variables every second
    let savedSeconds = 0;
    function incrementTimer() {
        let currentTime = Date.now() - startTime;
        totalSeconds = Math.floor(currentTime / 1000) + savedSeconds;
        seconds = Math.floor(totalSeconds % 60);
        minutes = Math.floor(totalSeconds / 60) % 60;
        hours = Math.floor(totalSeconds / 60 / 60) % 60;
    }

    function resetTimer() {
        totalSeconds = 0; 
        savedSeconds = 0;
        seconds = (totalSeconds % 60);
        stopStopwatch();
    }

    const isOneDigit = (number) => number.toString().length === 1 
    function cancheckDigits() {
        let number = 5; 
        // console.log(isOneDigit(number));
        // console.log(isOneDigit(11));
    }

    cancheckDigits(); 

    $: unitsOfTime = [hours, minutes, seconds];

    // Remove this if dont work
    let buttonsObject = {
        start: "startStopwatch",
        reset: "resetTime",
        stop: "stopStopwatch",
    };
</script>