# Материалы для сдачи задания

Проект: **Слотик** — мобильная платформа для автоматизации записей к частным специалистам.

## Уже готово

- Анкета Google Forms: https://docs.google.com/forms/d/e/1FAIpQLSd2UF9n2NTWk8AQtmJ6dLt0S4e8UnGEuY1b_GqVrK6CeEAQWQ/viewform
- Лендинг с переходом на анкету: https://vladoz2008.github.io/Slotik/
- Google Sheets с ответами: https://docs.google.com/spreadsheets/d/1KAKYqT0Ln9IZtZO9Ed7D0BlsJ2SC8SfH3L21F40rqxk/edit
- Инструкция по аналитике: `docs/analytics_guide.md`

## Что сдавать после сбора ответов

1. Ссылку на Google Forms.
2. Ссылку на лендинг.
3. CSV или Excel-файл с реальными ответами из Google Forms.
4. Excel-файл с аналитикой по реальным ответам.
5. Краткий текстовый вывод по результатам исследования.

## Как провести аналитику

После того как в форме будет минимум 15 ответов, откройте `docs/analytics_guide.md` и выполните инструкцию:

1. скачайте реальные ответы из Google Sheets;
2. создайте Excel-файл с отдельными листами;
3. посчитайте проценты по закрытым вопросам;
4. сгруппируйте открытые ответы;
5. сформулируйте выводы по гипотезе проблемы и интересу к решению.

## Google Forms

В папке `google_forms` лежит Apps Script `create_slotik_form.gs`. Он нужен только если форму придется создать заново.
