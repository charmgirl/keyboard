document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputField');
    const buttons = document.querySelectorAll('.button');
    const deleteButton = document.querySelector('.delete');
    const shiftButton = document.querySelector('.shift');
    const spaceButton = document.querySelector('.space');
    const enterButton = document.querySelector('.enter');
    const soundToggleButton = document.querySelector('.sound-toggle');
    let isShiftActive = false;
    let isSoundEnabled = true;

    // Загружаем аудиофайлы
    const soundMap = {
        'Й': new Audio('sounds/й.wav'),
        'Ц': new Audio('sounds/ц.wav'),
        'У': new Audio('sounds/у.wav'),
        'К': new Audio('sounds/к.wav'),
        'Е': new Audio('sounds/е.wav'),
        'Н': new Audio('sounds/н.wav'),
        'Г': new Audio('sounds/г.wav'),
        'Ш': new Audio('sounds/ш.wav'),
        'Щ': new Audio('sounds/щ.wav'),
        'З': new Audio('sounds/з.wav'),
        'Х': new Audio('sounds/х.wav'),
        'Ъ': new Audio('sounds/ъ.wav'),
        'Ф': new Audio('sounds/ф.wav'),
        'Ы': new Audio('sounds/ы.wav'),
        'В': new Audio('sounds/в.wav'),
        'А': new Audio('sounds/а.wav'),
        'П': new Audio('sounds/п.wav'),
        'Р': new Audio('sounds/р.wav'),
        'О': new Audio('sounds/о.wav'),
        'Л': new Audio('sounds/л.wav'),
        'Д': new Audio('sounds/д.wav'),
        'Ж': new Audio('sounds/ж.wav'),
        'Э': new Audio('sounds/э.wav'),
        'Я': new Audio('sounds/я.wav'),
        'Ч': new Audio('sounds/ч.wav'),
        'С': new Audio('sounds/с.wav'),
        'М': new Audio('sounds/м.wav'),
        'И': new Audio('sounds/и.wav'),
        'Т': new Audio('sounds/т.wav'),
        'Ь': new Audio('sounds/ь.wav'),
        'Б': new Audio('sounds/б.wav'),
        'Ю': new Audio('sounds/ю.wav'),
        'й': new Audio('sounds/й.wav'),
        'ц': new Audio('sounds/ц.wav'),
        'у': new Audio('sounds/у.wav'),
        'к': new Audio('sounds/к.wav'),
        'е': new Audio('sounds/е.wav'),
        'н': new Audio('sounds/н.wav'),
        'г': new Audio('sounds/г.wav'),
        'ш': new Audio('sounds/ш.wav'),
        'щ': new Audio('sounds/щ.wav'),
        'з': new Audio('sounds/з.wav'),
        'х': new Audio('sounds/х.wav'),
        'ъ': new Audio('sounds/ъ.wav'),
        'ф': new Audio('sounds/ф.wav'),
        'ы': new Audio('sounds/ы.wav'),
        'в': new Audio('sounds/в.wav'),
        'а': new Audio('sounds/а.wav'),
        'п': new Audio('sounds/п.wav'),
        'р': new Audio('sounds/р.wav'),
        'о': new Audio('sounds/о.wav'),
        'л': new Audio('sounds/л.wav'),
        'д': new Audio('sounds/д.wav'),
        'ж': new Audio('sounds/ж.wav'),
        'э': new Audio('sounds/э.wav'),
        'я': new Audio('sounds/я.wav'),
        'ч': new Audio('sounds/ч.wav'),
        'с': new Audio('sounds/с.wav'),
        'м': new Audio('sounds/м.wav'),
        'и': new Audio('sounds/и.wav'),
        'т': new Audio('sounds/т.wav'),
        'ь': new Audio('sounds/ь.wav'),
        'б': new Audio('sounds/б.wav'),
        'ю': new Audio('sounds/ю.wav'),
        // Добавь остальные звуки для других букв, символов и кнопок
    };

    function updateShiftAndCaps() {
        buttons.forEach(button => {
            const buttonText = button.textContent;
            if (buttonText.match(/[a-zA-Zа-яА-ЯЁё]/) && button !== enterButton) {
                if (isShiftActive) {
                    button.textContent = buttonText.toUpperCase();
                } else {
                    button.textContent = buttonText.toLowerCase();
                }
            }
        });
    }

    soundToggleButton.addEventListener('click', function() {
        isSoundEnabled = !isSoundEnabled;
        if (isSoundEnabled) {
            soundToggleButton.textContent = '🔊'; // Включаем звук
        } else {
            soundToggleButton.textContent = '🔇'; // Выключаем звук
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            let buttonText = this.textContent;

            // Воспроизводим звук для нажатой кнопки
            if (isSoundEnabled && soundMap[buttonText]) {
                soundMap[buttonText].play();
            }

            // Подсветка кнопки
            button.classList.add('active');
            setTimeout(() => {
                button.classList.remove('active'); // Убираем подсветку через 200 мс
            }, 500);

            if (buttonText === '⌫') {
                inputField.value = inputField.value.slice(0, -1);
            } else if (buttonText === ' ') {
                inputField.value += ' ';
            } else if (buttonText === 'Enter') {
                inputField.value += '\n';
            } else {
                inputField.value += buttonText;
            }
        });
    });

    shiftButton.addEventListener('click', function() {
        isShiftActive = !isShiftActive;
        updateShiftAndCaps();
    });

    spaceButton.addEventListener('click', function() {
        inputField.value += ' ';
    });

    deleteButton.addEventListener('click', function() {
        inputField.value = inputField.value.slice(0, -1);
    });

    inputField.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            inputField.value += '\n'; 
            event.preventDefault(); 
        }
    });
});
