
const getSquare = () => {
    const input = document.getElementById('value');
    const squareRoot = Math.pow(input.value, 2);
    if(Number.isFinite(squareRoot)) {
        input.value = squareRoot;
    } else {
        setError(`Can't square this`)
    }
}

const getFactorial = () => {
    const input = document.getElementById('value');
    const num = input.value;
    if (num >= 0) {
        const value = factorial(num);
        (Number.isFinite(value) && value !== -1) ? input.value = value : setError(`Can't get factorial`);
    } else {
        setError(`Can't get factorial`);
    }
}

const factorial = (num) => {
    try {
        if(num == 0)
            return 1;
        else
            return num * factorial(num - 1);
    } catch (err) {
        return -1;
    }
}

const setError = (msg) => {
    const errorEle = document.getElementById('error');
    errorEle.style.display = 'block';
    errorEle.innerText = msg
}