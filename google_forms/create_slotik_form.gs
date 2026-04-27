function createSlotikSurveyForm() {
  const form = FormApp.create('Анкета по проекту «Слотик»');

  form.setDescription(
    'Опрос помогает проверить, насколько частным специалистам и клиентам неудобны ручные записи через мессенджеры, ожидание ответа и отсутствие понятного расписания. Прохождение займет около 3 минут.'
  );
  form.setConfirmationMessage(
    'Спасибо за ответ! Эти данные помогут доработать Слотик и проверить гипотезу проекта.'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);

  form
    .addMultipleChoiceItem()
    .setTitle('1. К какой группе вы относитесь?')
    .setChoiceValues([
      'Частный специалист',
      'Клиент частных специалистов',
      'И специалист, и клиент',
      'Другое',
    ])
    .setRequired(true);

  form
    .addTextItem()
    .setTitle('2. С какими специалистами или услугами вы чаще всего сталкиваетесь?')
    .setHelpText('Например: психолог, репетитор, бьюти-мастер, тренер, массажист')
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle('3. Как сейчас обычно происходит запись?')
    .setChoiceValues([
      'Через личные сообщения в мессенджере',
      'Через звонок',
      'Через таблицу или заметки',
      'Через онлайн-сервис',
      'Другой способ',
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('4. Как часто вам приходится согласовывать время вручную?')
    .setChoiceValues([
      'Несколько раз в неделю',
      'Несколько раз в месяц',
      'Реже одного раза в месяц',
      'Почти не сталкиваюсь',
    ])
    .setRequired(true);

  form
    .addMultipleChoiceItem()
    .setTitle('5. Сколько времени обычно занимает согласование записи?')
    .setChoiceValues([
      'До 5 минут',
      '5-15 минут',
      '15-30 минут',
      'Больше 30 минут',
    ])
    .setRequired(true);

  form
    .addCheckboxItem()
    .setTitle('6. Что чаще всего вызывает неудобство?')
    .setChoiceValues([
      'Долгое ожидание ответа',
      'Нужно писать несколько сообщений',
      'Не видно свободные окна',
      'Легко забыть о записи',
      'Бывают переносы или накладки',
      'Значимых неудобств нет',
    ])
    .setRequired(true);

  form
    .addScaleItem()
    .setTitle('7. Насколько для вас важна возможность видеть свободные слоты сразу?')
    .setBounds(1, 5)
    .setLabels('Почти не важно', 'Очень важно')
    .setRequired(true);

  form
    .addScaleItem()
    .setTitle('8. Насколько полезны автоматические напоминания о визите?')
    .setBounds(1, 5)
    .setLabels('Почти не полезны', 'Очень полезны')
    .setRequired(true);

  form
    .addScaleItem()
    .setTitle('9. Насколько вам было бы интересно приложение для записи в два клика?')
    .setBounds(1, 5)
    .setLabels('Не интересно', 'Очень интересно')
    .setRequired(true);

  form
    .addParagraphTextItem()
    .setTitle('10. Что могло бы помешать вам пользоваться таким приложением?')
    .setRequired(false);

  form
    .addParagraphTextItem()
    .setTitle('11. Какой функции вам больше всего не хватает при записи сейчас?')
    .setRequired(false);

  form
    .addParagraphTextItem()
    .setTitle('12. Что еще стоит учесть в проекте Слотик?')
    .setRequired(false);

  const sheet = SpreadsheetApp.create('Ответы на анкету «Слотик»');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log('Ссылка для респондентов: ' + form.getPublishedUrl());
  Logger.log('Ссылка для редактирования: ' + form.getEditUrl());
  Logger.log('Таблица ответов: ' + sheet.getUrl());

  return {
    publishedUrl: form.getPublishedUrl(),
    editUrl: form.getEditUrl(),
    responsesSheetUrl: sheet.getUrl(),
  };
}
