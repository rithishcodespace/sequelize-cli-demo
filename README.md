commands:
installing --> npm i sequelize sequelize-cli
initialising --> npx sequelize-cli init(after this create db in workbence and add the db name and password in config.json)
creating tables(this wont reflect in actual db) --> npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,emailId:string
make it to reflect in db --> npx sequelize-cli db:migrate

it will mysql as easy as mongoose with inbuit methods instead of query
