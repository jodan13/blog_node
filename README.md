![Структурная схема проекта](https://upload-images.jianshu.io/upload_images/12890819-3348be07c69aa2b9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## предисловие

blog-node Он принимает основные идеи внешнего и внутреннего разделения, а главное говорит только о конце.

Увидеть эффект [https://biaochenxuying.cn](https://biaochenxuying.cn)

Для деталей проекта, пожалуйста, смотрите эту статью:
[На основе node + express + mongodb из blog-node Проектная документация](https://biaochenxuying.cn/articleDetail?article_id=5bf8c57185e0f13af26e7d0d)

## Реализованные функции

- [x] войти 
- [x] Управление статьями
- [x] Управление этикетками
- [x] обзор 
- [x] Управление сообщениями
- [x] Управление пользователями
- [x] Управление дружественными ссылками
- [x] Управление дружественными ссылками
- [x] идентификация
- [x] Дисплей проекта
- [x] Третья сторона github Авторизованный вход
- [x] Архив статей

## Функция должна быть реализована

- [ ] Персональный центр (используется для установки различной информации для блоггеров)
- [ ] Workbench (доступ к статистическому интерфейсу Baidu для просмотра таких данных, как просмотры веб-сайтов и посещения пользователей)

## технология 

- node
- cookie-parser : "~1.4.3"
- crypto : "^1.0.1"
- express: "~4.16.0"
- express-session : "^1.15.6",
- http-errors : "~1.6.2",
- mongodb : "^3.1.8",
- mongoose : "^5.3.7",
- mongoose-auto-increment : "^5.0.1",
- yargs : "^12.0.2"

## Примечания к сведению

Статьи делятся на типы: тип статьи => 1: обычная статья, 2: резюме, 3: введение администратора, а резюме и администратор могут представить только одну статью (потому что на стойке регистрации есть навигация обо мне. , Это попросить администратора представить эту статью, резюме также предназначено для использования таким образом), обычные статьи могут быть бесчисленными. 
-Как пользователи, как пользователи, должны только сохранять идентификатор пользователя, измените это позже.
-Функция комментариев реализует простой трехуровневый комментарий. Комментарии третьей стороны (то есть другие пересматривают комментарии первого уровня) помещаются в other_comments. 
-Комментарии с состоянием: статус => 0 ожидает рассмотрения /1 проход нормальный /-1 удалено /-2 спам-комментарии. 
-Комментарии уровня управления 1 и уровня 3 настроены на то, чтобы показать, может ли отображаться передняя стойка, по умолчанию отображается, если администратор читает, это спам-комментарий, установленный на -1 или -2, скрытый, стойка не будет отображаться. 

## Build Setup ( Настройка сборки )

```
# install dependencies
npm install

# serve with hot reload at localhost: 3000
npm start

# build for production with minification
Пожалуйста, используйте pm2, он может работать на сервере постоянно, и программа узла будет зависать, как только появится сообщение об ошибке. 
```

## FAQ по проекту


### Управление фоновым входом

Для входа в систему необходимо использовать **mail плюс пароль **для входа


### Создание учетной записи администратора

![](https://upload-images.jianshu.io/upload_images/12890819-67861a912768e646.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

Учетная запись для входа в фон управления не является admin /user или user user, созданным при создании базы данных mongodb. Учетная запись и пароль должны быть созданы вами самостоятельно. Как его создать? 

#### использование  postman Регистрация интерфейса передачи

Если он локальный, его можно создать следующим образом, если он находится на сервере, измените URL,

![Зарегистрироваться ](https://upload-images.jianshu.io/upload_images/12890819-3772744f72b8ed3e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 1.  url

```
http://127.0.0.1:3000/register
```

- 2. param

```
{
 "name": "BiaoChenXuYing",
 "password": "888888",
 "email": "admin@qq.com",
 "phone": 1380013800,
 "type": 0,
 "introduce":"Сверхурочно до рассвета, учимся падать в обморок!!! WeChat публичный аккаунт：【 BiaoChenXuYing 】，доля WEB Разработка полного стека и другие связанные технические статьи, горячие ресурсы и путь развития программистов полного стека."
}
```

"type": 0 -это учетная запись администратора, когда он равен 1, это обычный пользователь.

## Адрес проекта и документация учебник

**Адрес проекта:**

> [Дисплей передней панели: https://github.com/biaochenxuying/blog-react](https://github.com/biaochenxuying/blog-react)

> [Дисплей передней панели: https://github.com/biaochenxuying/blog-vue-typescript](https://github.com/biaochenxuying/blog-vue-typescript)

> [Фон управления：https://github.com/biaochenxuying/blog-react-admin](https://github.com/biaochenxuying/blog-react-admin)

> [Backend：https://github.com/biaochenxuying/blog-node](https://github.com/biaochenxuying/blog-node)

> [blog：https://github.com/biaochenxuying/blog](https://github.com/biaochenxuying/blog)

**Серия статей в этой блог-системе:**

- 1. [react + node + express + ant + mongodb Простой и стильный блог-сайт](https://biaochenxuying.cn/articleDetail?article_id=5bf57a8f85e0f13af26e579b)
- 2. [react + Ant Design + поддержка markdown из blog-react Простой и стильный блог-сайт](https://biaochenxuying.cn/articleDetail?article_id=5bf6bb5e85e0f13af26e57b7)
- 3. [На основе node + express + mongodb из blog-node Проектная документация](https://biaochenxuying.cn/articleDetail?article_id=5bf8c57185e0f13af26e7d0d)
- 4. [Мой маленький сервер, как сделал node+mongodb Проект развернут на сервере и оптимизирован для производительности](https://biaochenxuying.cn/articleDetail?article_id=5bfa728bb54f044b4f9da240)
- 5. [github Учебное пособие по авторизованному входу и как создать таблицу пользователей для авторизованного входа стороннего производителя. ](https://biaochenxuying.cn/articleDetail?article_id=5c7bd34e42b55e2ecc90976d)
- 6. [Путь к оптимизации производительности сайта](https://biaochenxuying.cn/articleDetail?article_id=5c8ca2d3b87b8a04f1860c9a)
- 7. [Vue + TypeScript + Element Создайте простой и стильный блог-сайт и вступите в бой](https://biaochenxuying.cn/articleDetail?article_id=5c9d8ce5f181945ddd6b0ffc)
- 8. [Фронт-энд решение сторонней картины противоугонной цепи - html referrer Вопросы о доступе к ресурсам изображений 403](https://biaochenxuying.cn/articleDetail?article_id=5cfcc6798090bd3c84138a08)


## Резюме

Если вы считаете, что этот проект и статья хороши или полезны для вас, пожалуйста, дайте звездочку, ваша, безусловно, моя самая большая мотивация для продолжения создания.

#   b l o g _ n o d e  
 