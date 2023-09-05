const fanSpeedInput = document.getElementById("fanSpeed");
const moveParts = document.getElementById("moveParts");

function setFanSpeed() {
    const minSpeed = 1;
    const maxSpeed = 100;
    const minDuration = 1500;
    const maxDuration = 500; 

    // Calcula a duração com base no valor atual do controle de entrada
    const speed = parseFloat(fanSpeedInput.value);
    const duration = minDuration - ((speed - minSpeed) / (maxSpeed - minSpeed)) * (minDuration - maxDuration);

    moveParts.style.animationDuration = `${duration}ms`;
}

fanSpeedInput.addEventListener("input", setFanSpeed);

setFanSpeed();

