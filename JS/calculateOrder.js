// Основная функция обработки нажатия кнопки размера
function TakeSize(button){
    const buttonText = button.textContent; // Получаем размер товара

    // Работа с видом кнопки
    const newButton = document.createElement('button'); // Создаем элемент - кнопку
    newButton.textContent = buttonText; // Меняем контент-текст кнопки
    newButton.className = 'sizeButton'; // Задаем класс кнопки

    // Работа с классом, в который будет вставлена кнопка 
    // Проверяем добавлена ли уже хоть одна кнопка в блок
    const countContainer = document.getElementById('countSizes');
    if (countContainer.classList.contains('empty')) {
        countContainer.classList.remove('empty');
        countContainer.classList.add('fill');
    }
    
    const container = document.getElementById('countConfirmSizes'); // Получаем блок для вставка
    container.appendChild(newButton); // Добавляем блок в кнопку
}
