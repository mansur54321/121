// Функция для перенаправления URL
function redirectToProTourvisor() {
  var currentUrl = window.location.href;
  var newUrl = currentUrl.replace('https://tourvisor.ru/search.php', 'https://pro.tourvisor.ru/search');
  newUrl = newUrl.replace('.php', '');
  window.location.href = newUrl;
}

// Проверка, находимся ли мы на нужном сайте
if (window.location.hostname === 'tourvisor.ru') {
  // Создание кнопки
  var button = document.createElement('button');
  button.textContent = 'Перейти на pro.tourvisor.ru';
  button.style.position = 'fixed';
  button.style.top = '10px';
  button.style.right = '10px';
  button.style.zIndex = '9999';

  // Добавление кнопки на страницу
  document.body.appendChild(button);

  // Обработчик нажатия кнопки
  button.addEventListener('click', redirectToProTourvisor);

  console.log('Кнопка для перенаправления на pro.tourvisor.ru добавлена на страницу.');
} else {
  console.log('Вы не находитесь на сайте tourvisor.ru.');
}