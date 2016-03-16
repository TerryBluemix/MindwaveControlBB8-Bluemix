var thinkgear = require('../lib');
var watson = require('watson-developer-cloud');
var mqtt = require('mqtt');
var clientId = ['d', "u1cie2", "AreyMac", "AreyMindWave"].join(':');  //裝置變數

var client = thinkgear.createClient();

iot_client = mqtt.connect("mqtt://u1cie2.messaging.internetofthings.ibmcloud.com:1883",//連結mqtt伺服器的認證
	                          {
	                              "clientId" : clientId,
	                              "keepalive" : 30,
	                              "username" : "use-token-auth",
	                              "password" : "OIA+29ObU1Rx_i7vG7"
	                          });
	iot_client.on('connect', function() {//如果連接上的話要做的事情
		
	console.log('Rapiro client connected to IBM IoT Cloud.');
	
	client.on('data',function(data){
			console.log((new Date).toISOString() + ': ' + JSON.stringify(data));

			iot_client.publish('iot-2/evt/status/fmt/json', JSON.stringify(data));

		iot_client.on("message", function(topic,payload){
		    console.log('received topic:'+topic+', payload:'+payload);}
		 );

	});
	
	client.on('blink_data',function(blink_data){

		console.log((new Date).toISOString() + ': ' + JSON.stringify(blink_data));
		
		                          
		                          
		setTimeout(function(){
			console.log('Rapiro client connected to IBM IoT Cloud.');
			iot_client.publish('iot-2/evt/status/fmt/json', JSON.stringify(blink_data));
			
		     
		  	
		  


		iot_client.on("message", function(topic,payload){
		    console.log('received topic:'+topic+', payload:'+payload);}
		 );
	});


	});


});



client.connect();




    
    
    