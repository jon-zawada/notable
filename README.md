# Notable Take Home

### Installing Dependencies

From within the root directory:

```sh
npm install
```
## Usage
### To Run App - Once Dependencies Installed

All occurs from within the root directory:

-go to /db/index.js to change mysql password and user

Create mysql tables
```sh
mysql -u root -p < ./db/schema.sql
```

Build react app with script:

```sh
npm run compile
```
Run server:

```sh
npm start
```
Go to url http://localhost:3000/ to view app
