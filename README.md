# StyleLab - Редактор дизайн-систем


[![Просмотры README](https://vbr.nathanchung.dev/badge?page_id=Richbanker.StyleLab&text=README_Views)](https://github.com/Richbanker/StyleLab)

[![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue.svg)](https://www.typescriptlang.org/)
[![Storybook](https://img.shields.io/badge/Storybook-9.0.4-FF4785.svg)](https://storybook.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

StyleLab - это инструмент для создания и управления дизайн-системами, который позволяет импортировать компоненты из Figma, редактировать их стили и экспортировать готовую дизайн-систему.

## 🚀 Возможности

- Импорт компонентов из Figma через API
- Редактирование стилей компонентов в реальном времени
- Поддержка светлой и темной темы
- Экспорт дизайн-системы в виде npm-пакета
- Автоматическая генерация документации с помощью Storybook
- Интуитивно понятный интерфейс
- Поддержка TypeScript для типобезопасности

## 🛠 Технологии

- React 19.1.0
- TypeScript 4.9.5
- Tailwind CSS
- Figma API
- Storybook 9.0.4
- Webpack 5.99.9

## 📦 Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourusername/stylelab.git
cd stylelab
```

2. Установите зависимости:
```bash
npm install
```

3. Создайте файл `.env` в корневой директории и добавьте необходимые переменные окружения:
```env
REACT_APP_FIGMA_ACCESS_TOKEN=your_figma_access_token
REACT_APP_FIGMA_FILE_KEY=your_figma_file_key
```

4. Запустите проект:
```bash
npm start
```

## 🎯 Использование

1. Получите токен доступа Figma API:
   - Перейдите в настройки вашего аккаунта Figma
   - Выберите "Personal access tokens"
   - Создайте новый токен

2. Введите токен доступа и ключ файла Figma в соответствующие поля

3. Нажмите "Импортировать компоненты"

4. Редактируйте стили компонентов:
   - Изменяйте цвета, размеры, отступы
   - Настраивайте типографику
   - Создавайте новые варианты компонентов

5. Экспортируйте готовую дизайн-систему:
   - Выберите формат экспорта (npm, CSS, SCSS)
   - Настройте параметры экспорта
   - Скачайте готовый пакет

## 💻 Разработка

### Структура проекта

```
stylelab/
├── src/
│   ├── components/     # React компоненты
│   ├── services/       # Сервисы (Figma API и др.)
│   ├── types/         # TypeScript типы
│   ├── stories/       # Storybook истории
│   └── App.tsx        # Основной компонент
├── public/            # Статические файлы
├── .storybook/        # Конфигурация Storybook
├── .env.example       # Пример файла с переменными окружения
└── package.json       # Зависимости и скрипты
```

### Скрипты

- `npm start` - Запуск проекта в режиме разработки
- `npm run build` - Сборка проекта
- `npm run storybook` - Запуск Storybook
- `npm test` - Запуск тестов
- `npm run build-storybook` - Сборка Storybook для продакшена

## 🤝 Вклад в проект

Мы приветствуем вклад в развитие проекта! Вот как вы можете помочь:

1. Форкните репозиторий
2. Создайте ветку для ваших изменений (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте ваши изменения (`git commit -m 'Add some amazing feature'`)
4. Отправьте изменения в ваш форк (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

### Требования к коду

- Следуйте существующему стилю кода
- Добавляйте тесты для новых функций
- Обновляйте документацию при необходимости
- Используйте TypeScript для всех новых файлов

## 📝 Лицензия

MIT Лицензия - подробности в файле [LICENSE](LICENSE)

## 📧 Контакты

Если у вас есть вопросы или предложения, создайте issue в репозитории проекта.
