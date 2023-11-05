let wheel;
let startButton;
let back;
let deg;

function start(trick = null) {
    wheel = document.querySelector('.wheel');
    startButton = document.querySelector('.button');
    back = document.querySelector('.back')
    deg = 0;

    wheel.addEventListener('transitionend', () => {
        // Remove blur
        wheel.classList.remove('blur');
        back.classList.remove('rainbow');
        // Enable button when spin is over
        startButton.style.pointerEvents = 'auto';
        // Need to set transition to none as we want to rotate instantly
        wheel.style.transition = 'none';
        spin.style.display='block';
        // Calculate degree on a 360 degree basis to get the "natural" real rotation
        // Important because we want to start the next spin from that one
        // Use modulus to get the rest value from 360
        const actualDeg = deg % 360;
        // Set the real rotation instantly without animation
        wheel.style.transform = `rotate(${actualDeg}deg)`;

        if (trick != null) {
            mostrarResultat(trick);
            return;
        }

        if (actualDeg >= 0 && actualDeg < 10) {
            mostrarResultat("26 NEGRE");
        }
        if (actualDeg >= 10 && actualDeg < 20) {
            mostrarResultat("3 VERMELL");
        }
        if (actualDeg >= 20 && actualDeg < 30) {
            mostrarResultat("35 NEGRE");
        }
        if (actualDeg >= 30 && actualDeg < 39) {
            mostrarResultat("12 VERMELL");
        }
        if (actualDeg >= 39 && actualDeg < 49) {
            mostrarResultat("28 NEGRE");
        }
        if (actualDeg >= 49 && actualDeg < 59) {
            mostrarResultat("7 VERMELL");
        }
        if (actualDeg >= 59 && actualDeg < 69) {
            mostrarResultat("29 NEGRE");
        }
        if (actualDeg >= 69 && actualDeg < 78) {
            mostrarResultat("18 VERMELL");
        }
        if (actualDeg >= 78 && actualDeg < 88) {
            mostrarResultat("22 NEGRE");
        }
        if (actualDeg >= 88 && actualDeg < 98) {
            mostrarResultat("9 VERMELL");
        }
        if (actualDeg >= 98 && actualDeg < 107) {
            mostrarResultat("31 NEGRE");
        }
        if (actualDeg >= 107 && actualDeg < 117) {
            mostrarResultat("14 VERMELL");
        }
        if (actualDeg >= 117 && actualDeg < 127) {
            mostrarResultat("20 NEGRE");
        }
        if (actualDeg >= 127 && actualDeg < 137) {
            mostrarResultat("1 VERMELL");
        }
        if (actualDeg >= 137 && actualDeg < 146) {
            mostrarResultat("33 NEGRE");
        }
        if (actualDeg >= 146 && actualDeg < 156) {
            mostrarResultat("16 VERMELL");
        }
        if (actualDeg >= 156 && actualDeg < 166) {
            mostrarResultat("24 NEGRE");
        }
        if (actualDeg >= 166 && actualDeg < 176) {
            mostrarResultat("5 VERMELL");
        }
        if (actualDeg >= 176 && actualDeg < 185) {
            mostrarResultat("10 NEGRE");
        }
        if (actualDeg >= 185 && actualDeg < 195) {
            mostrarResultat("23 VERMELL");
        }
        if (actualDeg >= 195 && actualDeg < 205) {
            mostrarResultat("8 NEGRE");
        }
        if (actualDeg >= 205 && actualDeg < 215) {
            mostrarResultat("30 VERMELL");
        }
        if (actualDeg >= 215 && actualDeg < 224) {
            mostrarResultat("11 NEGRE");
        }
        if (actualDeg >= 224 && actualDeg < 234) {
            mostrarResultat("36 VERMELL");
        }
        if (actualDeg >= 234 && actualDeg < 244) {
            mostrarResultat("13 NEGRE");
        }
        if (actualDeg >= 244 && actualDeg < 253) {
            mostrarResultat("21 VERMELL");
        }
        if (actualDeg >= 253 && actualDeg < 263) {
            mostrarResultat("6 NEGRE");
        }
        if (actualDeg >= 263 && actualDeg < 273) {
            mostrarResultat("34 VERMELL");
        }
        if (actualDeg >= 273 && actualDeg < 283) {
            mostrarResultat("17 NEGRE");
        }
        if (actualDeg >= 283 && actualDeg < 292) {
            mostrarResultat("25 VERMELL");
        }
        if (actualDeg >= 292 && actualDeg < 302) {
            mostrarResultat("2 NEGRE");
        }
        if (actualDeg >= 302 && actualDeg < 312) {
            mostrarResultat("21 VERMELL");
        }
        if (actualDeg >= 312 && actualDeg < 322) {
            mostrarResultat("4 NEGRE");
        }
        if (actualDeg >= 322 && actualDeg < 331) {
            mostrarResultat("19 VERMELL");
        }
        if (actualDeg >= 331 && actualDeg < 341) {
            mostrarResultat("15 NEGRE");
        }
        if (actualDeg >= 341 && actualDeg < 350) {
            mostrarResultat("32 VERMELL");
        }
        if (actualDeg >= 350 && actualDeg < 360) {
            mostrarResultat("0 VERD");
        }
        spin.style.display.remove('none');
    });
}

function girarRuleta() {
    const spin = document.querySelector('.spin');
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    //deg =40 ;
    // Set the transition on the wheel

    wheel.style.transition = 'transform 10s ease ';
    back.style.transition = 'all 14s ease-out';
    spin.style.display='none';
    wheel.style.width='33em';
    wheel.style.height='33em';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
    back.classList.add('rainbow');
};