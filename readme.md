GOKADA ATM Service API
==============================================

The ATM User Service API has Endpoints that authenticates a user and allows a user to perform certain operations
----------


Clone repository and run npm install to setup dependencies

Create a `.env` file
----------------------------
Add the parameters below (`add your own values`)

**Environment Variables:**
```
MONGODB_HOST='localhost'

MONGODB_USER=

MONGODB_PASSWORD=

MONGODB_PORT=27017

MONGODB_DATABASE_NAME='gokada-db'

PORT=4000
```
Install dependencies
-------------------------
```
npm install --save

```
Get API running
----------------------------
```
npm run start
```
Check For Linting
-------------
```
npm run lint
```
Run Test
-------------
```
npm run test
```

## Routes

NAME     					| END POINT     |  PARAMS
--------------------------- | ------------- | ----------
Base     					| /             |
Create Dummy User    	    | /create       |`cardDetails`, `amount`, &`pin` e.g {cardDetails: 'xyz', amount: '2000', pin: '1238'}
Authenticate User    	    | /login        |`atmCard`&`pin` e.g {atmCard: 'xyz', pin: '1238'}
withdraw                    | /withdraw     | `amount`, `denomination`, & `transactionToken`
enquiry                     | /enquiry      | `transaction token`