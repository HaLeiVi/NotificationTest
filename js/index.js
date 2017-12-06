/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function sendHTTP(whendone, uristring, poststring, username, password){
  var x
  x = new XMLHttpRequest()
  x.onreadystatechange = function(){if (x.readyState == 4 && x.status == 200) whendone(x.responseText)}
  x.upload.onprogress = updatesending
  x.onprogress = updateloading
  x.onloadstart = startedLoading
  x.onloadend = finishedLoading
  var ht = serverAddress.indexOf("http://") < 0 ? "http://" : ""
  x.open((!poststring? "GET" : "POST"), uristring, true, (username? username : null), (password? password : null))
  //alert(!poststring? "GET" : "POST")
  //alert(poststring)
  x.send(!(!poststring)? poststring : null)
}


var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

        function initit(){
            alert("About to begin initialization.")
            alert("PushNotification type is " + typeof( PushNotification))
            
            try {
            var push = PushNotification.init({ "android": {"senderID": "706672304606"},
                "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );
                alert("done with 'init'")
            }catch (e){
                alert("Error caught:\r" + e.message)
            }
 
            push.on('registration', function(data) {
                //alert(data.registrationId)
                document.getElementById("deviceID").innerHTML = data.registrationId
                //location.href = "mailto:whatchemecallit@gmail.com?subject=Phone+just+subscribed+to+notifications&body=" + data.registrationId
                sendRegistration(data.registrationId)
            });
        
            push.on('notification', function(data) {
            // data.message, 
            // data.title, 
            // data.count, 
            // data.sound, 
            // data.image, 
            // data.additionalData 
                document.getElementById('notificationMSG').innerHTML = data.message 
            });

            push.on('accept', function(data){
                accepted(data)
            });

            push.on('error', function(e) {
                alert("Oops!\r" + e.message )
            // e.message 
            });
        }

mailurl = "https://api.mailjet.com/v3/send"
User = "9f99e6f18ced555eb40166c71ad965de"
pass = "5a529b7335f026e95a0be6e74c11a25c"
//base64 = "OWY5OWU2ZjE4Y2VkNTU1ZWI0MDE2NmM3MWFkOTY1ZGU6NWE1MjliNzMzNWYwMjZlOTVhMGJlNmU3NGMxMWEyNWM="
att = ""
if (1==2){ Efile = getLocalFile
        diagFile = ConvertFileToBase64(Efile)
        att = ", \"Attachments\": [{\"Content-type\": \"application/pdf\", \"Filename\": \"" + Efile + "\", \"content\":\"" + diagFile + "\"}]"
}
Eto = ["ben@kugelmanportal.com"]
Esubject = "Code for device subscription"
    var recepients
    recepients = "["
    for (let i = 0; i<Eto.length; i++){
        recepients += "{\"Email\":\"" + Eto[i] + "\"}" + (i < Eto.length? "," : "")
    }
    recepients += "]"
    
function sendRegistration(d){
    var emailJson = "{" +
        "\"FromEmail\":\"notifyApp@kugelmanportal.com\", " +
        "\"FromName\":\"Notification app\", " +
        "\"Subject\":\"" + Esubject + "\", " +
        "\"Html-part\":\"" + d + "\", " +
        "\"Recipients\":" + recepients + att +
    "}"
    sendHTTP(function(tx){alert(tx)},mailurl,emailJson,User,pass)
}
function accepted(d){
    var emailJson = "{" +
        "\"FromEmail\":\"notifyApp@kugelmanportal.com\", " +
        "\"FromName\":\"Notification app\", " +
        "\"Subject\":\"" + "Notification app User accepted" + "\", " +
        "\"Html-part\":\"Aren't you most gratified?\", " +
        "\"Recipients\":" + recepients + att +
    "}"
    sendHTTP(function(tx){},mailurl,emailJson,User,pass)
}
function emailMyself(){
     var emailJson = "{" +
        "\"FromEmail\":\"notifyApp@kugelmanportal.com\", " +
        "\"FromName\":\"Notification app\", " +
        "\"Subject\":\"" + "Notification app email" + "\", " +
        "\"Html-part\":\"" + jstxt.value + "\", " +
        "\"Recipients\":" + recepients + att +
    "}"
    sendHTTP(function(tx){alert(tx)},mailurl,emailJson,User,pass)
}