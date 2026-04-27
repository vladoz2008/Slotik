# Материалы для сдачи задания

Проект: **Слотик** — мобильная платформа для автоматизации записей к частным специалистам.

## Что сдавать

1. Ссылка на анкету Google Forms: https://docs.google.com/forms/d/e/1FAIpQLSd2UF9n2NTWk8AQtmJ6dLt0S4e8UnGEuY1b_GqVrK6CeEAQWQ/viewform
2. Ссылка на лендинг с анкетой: `https://vladoz2008.github.io/Slotik/`.
3. Ссылка на Google Sheets с ответами: https://docs.google.com/spreadsheets/d/1KAKYqT0Ln9IZtZO9Ed7D0BlsJ2SC8SfH3L21F40rqxk/edit
4. CSV с результатами: `data/slotik_survey_responses_demo.csv`.
5. Excel-файл с аналитикой: `data/slotik_survey_analysis_demo.xlsx`.
6. Краткий текстовый вывод: `docs/slotik_analysis_conclusions.md`.

## Как создать Google Forms

В папке `google_forms` лежит готовый Apps Script:

`google_forms/create_slotik_form.gs`

Он создает:

- Google Form «Анкета по проекту „Слотик“»;
- 12 вопросов по требованиям задания;
- Google Sheets-таблицу для сбора ответов;
- ссылки на форму, редактирование формы и таблицу ответов в журнале выполнения.

Уже созданная форма:

- Для респондентов: https://docs.google.com/forms/d/e/1FAIpQLSd2UF9n2NTWk8AQtmJ6dLt0S4e8UnGEuY1b_GqVrK6CeEAQWQ/viewform
- Для редактирования: https://docs.google.com/forms/d/1qTlTZQ8-xut5T3X2KreYHR_SXWMurphYOdWDv_BJwxY/edit
- Таблица ответов: https://docs.google.com/spreadsheets/d/1KAKYqT0Ln9IZtZO9Ed7D0BlsJ2SC8SfH3L21F40rqxk/edit

Инструкция по запуску: `google_forms/README.md`.

## Важная пометка

Файлы `slotik_survey_responses_demo.csv` и `slotik_survey_analysis_demo.xlsx` содержат демонстрационные учебные ответы на 15 респондентов. Для финальной сдачи после настоящего опроса нужно заменить строки в CSV на реальные ответы и пересобрать аналитику.

## Краткий вывод

В демонстрационной выборке гипотеза проекта подтверждается: пользователи сталкиваются с ручным согласованием времени, ожиданием ответа, отсутствием видимых свободных слотов и риском забыть о записи. Наиболее сильные функции для развития MVP: публичный профиль специалиста со свободными слотами, запись без переписки, автоматические напоминания, интеграция с календарем и привычными каналами вроде Telegram.
