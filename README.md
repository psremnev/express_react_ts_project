# ОПИСАНИЕ РАБОТЫ С КОНФИГУРАЦИЕЙ ПРИЛОЖЕНИЯ: (CTRL + SHIFT + V) - PREVIEW MODE VS CODE

---

1. Запуск проекта:
   - инициализируем зависимости: npm i
   - запускаем сборку и стартуем: npm run start
2. Конфигурация страниц находится в page.json. Здесь мы можем сконфигурировать новую страницу для нашего приложения, указав при

   // url до модуля из которого экспортируется компонент по умолчанию

   - "module": "About/About"

   // url до модуля из которого экспортируется функция по умолчанию, необязательное поле
   в функцию придет 2 аргумента: опции из конфига и параметры из урл строки, пример func(opts, params)

   - "preloaderPath": "About/Loader",

   // различные опции, необязательное поле

   - "options": {
     "anyOption": 'anyValue'
     }

3. Базовые котролы папкa - Base
