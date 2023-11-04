let countCost = 0; // Переменная для хранения суммы заказа
// Сохраняем текущую цену товара
const priceBlock = document.getElementById('priceBlock');
const priceOfProduct = parseInt(priceBlock.textContent, 10); // Преобразуем текст цены в число

// Создаем словарь для хранения данных о размерах заказа
let sizeDict = new Map();

// Функция обработки нажатия на дочернюю кнопку
function RemoveSize(button) {
  const buttonText = button.textContent; // Получаем размер товара
  const newSize = sizeDict.get(buttonText) - 1;

  if (newSize === 0) {
    sizeDict.delete(buttonText); // Если размер больше не выбран, удаляем его из словаря
  } else {
    sizeDict.set(buttonText, newSize); // Уменьшаем количество выбранных размеров
  }

  countCost -= 1;

  // Меняем цену с учетом счетчика
  if (countCost === 0) {
    priceBlock.innerHTML = priceOfProduct + "₽";
  } else {
    priceBlock.innerHTML = priceOfProduct * countCost + "₽";
  }

  // Изменение размера блока при отсутствии размеров 
  const countContainer = document.getElementById('countSizes');
  if(countCost === 0){
    countContainer.classList.remove('fill');
    countContainer.classList.add('empty');
  }

  button.remove();
}

// Основная функция обработки нажатия кнопки размера
function TakeSize(button) {
  const buttonText = button.textContent; // Получаем размер товара

  // Обработка добавления размера в заказ
  if (sizeDict.has(buttonText)) {
    sizeDict.set(buttonText, sizeDict.get(buttonText) + 1); // Увеличиваем значение на 1
  } else {
    sizeDict.set(buttonText, 1); // Создаем пару ключ:значение
  }

  countCost += 1;

  // Меняем цену с учетом счетчика
  if (countCost === 0) {
    priceBlock.innerHTML = priceOfProduct + "₽";
  } else {
    priceBlock.innerHTML = priceOfProduct * countCost + "₽";
  }

  // Работа с видом кнопки
  const newButton = document.createElement('button'); // Создаем элемент - кнопку
  newButton.textContent = buttonText; // Меняем контент-текст кнопки
  newButton.className = 'sizeButton'; // Задаем класс кнопки
  newButton.onclick = function () {
    RemoveSize(newButton);
  };

  // Работа с классом, в который будет вставлена кнопка
  // Проверяем добавлена ли уже хоть одна кнопка в блок
  const countContainer = document.getElementById('countSizes');
  if (countContainer.classList.contains('empty')) {
    countContainer.classList.remove('empty');
    countContainer.classList.add('fill');
  }

  const container = document.getElementById('countConfirmSizes'); // Получаем блок для вставки
  container.appendChild(newButton); // Добавляем кнопку в блок
}
