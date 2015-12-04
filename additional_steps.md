## mongo-db datasource
* install strongloop-connector-mongo:
`npm install --save strongloop-connector-mongo`
* configure your mongodb connection. To use the configuration here, run mongo locally and set up the DB & user thus:
```
> use devDB
switched to db devDB
> db.createUser({user:"devUser",pwd:"devPassword", roles:[{role:"readWrite",db:"devDB"}]});
Successfully added user: {
	"user" : "devUser",
	"roles" : [
		{
			"role" : "readWrite",
			"db" : "devDB"
		}
	]
}
```

## Mysql datasource
* `npm install -S loopback-connector-mysql`
* passwordless login for mysql user "root" (or change your credentials in `datasources.json`)
* create a local mysql database called `coffeeshop`: `create database coffeeshop`;
* create the `CoffeeShop` table **automatically** from arc:
  * run `slc arc`
  * click "compose"
  * click "CoffeeShop" under "Models"
  * click "Migrate Model"
  * Saving coffeeshops (from api explorer) should now work
