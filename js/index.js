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
        alert("Event received")
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
            alert("Thanks. About to begin initialization.")
            //alert(" PushNotification type is " + typeof( PushNotification))
            /*
            try {
            var push = PushNotification.init({ "android": {"senderID": "706672304606"},
                "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );
                alert("done with 'init'")
            }catch (e){
                alert("Error caught:\r" + e.message)
            }
 
            push.on('registration', function(data) {
                alert(data.registrationId)
                document.getElementByID("deviceID").innerHTML = data.registrationId 
            });
        
            push.on('notification', function(data) {
            // data.message, 
            // data.title, 
            // data.count, 
            // data.sound, 
            // data.image, 
            // data.additionalData 
                document.getElementById('notificationMSG').innerHTML = data.message 
            });
            push.on('error', function(e) {
                alert("Oops!\r" + e.message )
            // e.message 
            });*/
        }