const setLocalStorage = () => {
    const inputKey = document.getElementById('input-key');
    const key = inputKey.value
    const inputValue = document.getElementById('input-value')
    const value = inputValue.value;

    if (key && value) {
        localStorage.setItem(key, value);
    }


    inputKey.value = ''
    inputValue.value = ''
}