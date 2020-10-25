
const getSquare = () => {
    const input = document.getElementById('value');
    if (!input.value && input.value !== 0) {
        setError(`Can't square this`);
        return;
    }
    const squareRoot = Math.pow(input.value, 2);
    if(Number.isFinite(squareRoot)) {
        input.value = squareRoot;
        setError('');
    } else {
        setError(`Can't square this`);
    }
}

const getFactorial = () => {
    const input = document.getElementById('value');
    const num = input.value;
    if (num >= 0 && num !== '') {
        const value = factorial(num);
        if (Number.isFinite(value) && value !== -1) {
            input.value = value;
            setError('');
        } else {
            setError(`Can't get factorial`)
        };
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