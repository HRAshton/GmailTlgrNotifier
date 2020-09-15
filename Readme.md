# GmailTelegramBot

## Telegram bot to notify of emails coming to Gmail.

Written in Google Apps Script (with typescript). By trigger (the best option at the moment is once a minute) receives a list of unread messages and sends a message to Telegram on behalf of the bot. The message displays the sender, the subject and the link to the message. The link leads to the page for viewing the letter (also implemented on GAS). It displays the sender, recipient, recipient of a copy (CC) and the body of the message, preserving HTML formatting.

Notification example:  
![NotificationExample](https://github.com/HRAshton/GmailTlgrNotifier/blob/master/docs/NotificationExample.jpg)

Example email on the view page:  
![EmailViewerExample](https://github.com/HRAshton/GmailTlgrNotifier/blob/master/docs/EmailViewerExample.jpg)

## Installation Instructions

There are two ways to deploy an application: from ts sources and from built scripts.

### Deployment from built scripts
1. Create a new project at script.google.com.
1. In the project (directly from the browser) create files with the same names and the same content as in the / compiled folder. Further actions need to be carried out with the project files in script.google.com, and not with the repository files.
1. Open the NotificationGenerator.gs file. Select "SendNotifications" in the "Select Function" field and click the debug button (bug). Confirm the permissions (mailbox and external resource access).
1. Create a telegram bot, register its token and chat id with your account in Settings.gs.
1. Publish your application. Copy the resulting link to Settings.gs and publish it again (don't forget to set a new version number).
1. Create a trigger to run the SendNotifications function once a minute.

### Deploying from typescript sources
1. Create a new project at script.google.com.
1. Clone the repository.
1. Create a telegram bot, register its token and chat id with your account in Settings.gs.
1. In the src folder, open a terminal, install clasp (npm i -g @ google / clasp).
1. Log in to clasp, specifying the project created in step 1.
1. clasp push -f
1. Publish your application. Copy the resulting link to Settings.gs and publish it again (don't forget to set a new version number).
1. Create a trigger to run the SendNotifications function once a minute.

---


## Бот для Telegram, уведомляющий об электронных письмах, приходящих на Gmail. 

Написан на Google Apps Script (с typescript). По триггеру (лучший вариант на текущий момент - раз в минуту) получает список непрочитанных сообщений и отправляет сообщение в Telegram от имени бота. В сообщении отображается отправитель, тема письма и ссылка на письмо. Ссылка ведет на страницу просмотра письма (также реализована на GAS). Там отображается отправитель, получатель, получатель копии (СС) и тело письма с сохранением HTML-форматирования.

Пример оповещения:  
![NotificationExample](https://github.com/HRAshton/GmailTlgrNotifier/blob/master/docs/NotificationExample.jpg)

Пример email на странице просмотра:  
![EmailViewerExample](https://github.com/HRAshton/GmailTlgrNotifier/blob/master/docs/EmailViewerExample.jpg)

## Инструкция по установке

Есть два способа развернуть приложение: из ts-исходников и из собранных скриптов.

### Развертывание из собранных скриптов
1. Создайте новый проект на script.google.com.
1. В проекте (прямо из браузера) создайте файлы с теми же именами и тем же содержимым, что и в папке /compiled. Дальнейшие действия нужно проводить с файлами проекта в script.google.com, а не с файлами репозитория.
1. Откройте файл NotificationGenerator.gs. Выберите в поле "Select Function" "SendNotifications" и нажмите кнопку отладки (жук). Подтвердите разрешения (доступ к почтовому ящику и к внешним ресурсам).
1. Создайте telegram-бота, пропишите его токен и id чата с Вашим аккаунтом в Settings.gs.
1. Опубликуйте приложение. Полученную ссылку скопируйте в Settings.gs и снова опубликуйте (не забудьме выставить новый номер версии).
1. Создайте триггер на запуск функции SendNotifications раз в минуту.

### Развертывание из typescript-исходников
1. Создайте новый проект на script.google.com.
1. Склонируйте репозиторий.
1. Создайте telegram-бота, пропишите его токен и id чата с Вашим аккаунтом в Settings.gs.
1. В папке src откройте терминал, установите clasp (npm i -g @google/clasp).
1. Авторизируйтесь в clasp, указав созданный на шаге 1 проект.
1. clasp push -f
1. Опубликуйте приложение. Полученную ссылку скопируйте в Settings.gs и снова опубликуйте (не забудьме выставить новый номер версии).
1. Создайте триггер на запуск функции SendNotifications раз в минуту.
