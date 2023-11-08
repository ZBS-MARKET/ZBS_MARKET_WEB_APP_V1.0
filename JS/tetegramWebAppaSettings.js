let tg = window.Telegram.WebApp;
tg.expand();
if (tg.BackButton.isVisible){
    tg.showAlert("Обратная кнопка активна");
}