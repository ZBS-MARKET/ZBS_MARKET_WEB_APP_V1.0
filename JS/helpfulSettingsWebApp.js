let tg = window.Telegram.WebApp;
  tg.BackButton.show();
  Telegram.WebApp.onEvent('backButtonClicked', function() {
    window.history.back();
    tg.BackButton.hied();
  });