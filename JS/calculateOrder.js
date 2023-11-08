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

function GetOrder(){
  // Нам требуется получить: 
  // 1) Цена за выбранные единицы товара
  // 2) Уникальный артикул 
  // 3) Словарь с размерами товара, которые хочет покупатель


  // Получаем цену, которую подсчитало WebApp 
  const priceBlock = document.getElementById('priceBlock');
  const priceOfProduct = parseInt(priceBlock.textContent, 10); // Преобразуем цену в число 
  // Получаем артикул товара 
  const productArt = document.getElementById("articul").value;
  // Словарь с размерами и так хранится в памяти компьютера
  
  // привязываем окно телеграм 
  let tg = window.Telegram.WebApp;

  // Готовим json объект для передачи его в качестве строки, для удобной работы в Python 
  let data = {
    prise: priceOfProduct,
    articul: productArt,
    sizes: sizeDict
  };
  // Передаем строку в нашего бота 
  tg.sendData(JSON.stringify(data));
  // Закрываем окно 
  tg.close();

}
