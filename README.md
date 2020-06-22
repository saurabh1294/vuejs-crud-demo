# app
A simple CRUD vue app with Node/Express API server.
Perfoms operations on a banks list. 
(Please don't pay attention I used already created json from one of my own projects.)

Server runs on http://localhost:3000
On the first load client side app shows a list of banks.
User can: 
  1. Add a new item pressing - "Add new bank" button on top of the page.
    1.1 On the shown popup user needs to fill inputs and press Save or Cancel.
    1.2 A new record will be added at the botton of the list.
  2. Edit/Update/Delete existing item by clicking on a row.
    2.1 Update data in input fields on the shown popup and press Save or press Delete to erase a record.
    2.2 In case of deletion a confirmation will be asked.

UI is pretty simple made with Bootstrap.
test
## Project setup
From the root folder 
```
cd api
yarn install 
```
and then
```
cd app
yarn install
```
### Run API side
```
cd api
yarn serve
```
### Run client side (Compiles and hot-reloads for development)
```
cd app
yarn start
```

### Compiles and minifies for production
```
cd app
yarn build
```

### Lints and fixes files
```
cd app
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
