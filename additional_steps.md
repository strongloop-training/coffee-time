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
