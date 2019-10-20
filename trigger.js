var http=require('http');
var functions=require('firebase-functions')
var admin = require("firebase-admin");
//var serviceAccount = require("./private.json");

admin.initializeApp(functions.config().firebase)

/*admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sewage-6620a.firebaseio.com"
});*/


exports.helloworld=functions.https.onRequest((request,response)=>{
var alldet=request.query.value;
	det=alldet.trim().split('$');
	console.log(det);
	admin.database().ref('Jodhpur').child(det[0]).update({
	Battery:parseInt(det[2]),
	Wlevel:parseInt(det[1])

	})
	response.send('Hello world');
});
//url:http://us-central1-sewage-6620a.cloudfunctions.net/helloworld?value=Device5$3$50
