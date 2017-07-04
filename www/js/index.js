var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
        console.log('Received Event: ' + id);

        
        cordova.plugins.backgroundMode.enable();
        setInterval(function(){
            var audio = new Audio('test.mp3');
            if (cordova.plugins.backgroundMode.isActive()){
                audio.play();
            }
        }, 8000);
        
       
        receivedElement.innerHTML = 'Registering for notification';
        /*var push = PushNotification.init({
            android: {
                senderID: 956432534015
            },
            ios: {
                alert: "true",
                badge: "true",
                sound: "true"
            }
        }); */
        
        
        /****************************/
        /*var push = PushNotification.init({ "android": {"senderID": "812663353807"},
             "ios": {"alert": "true", "badge": "true", "sound": "true"}, "windows": {} } );

        push.on('registration', function(data) {
            // data.registrationId
            receivedElement.innerHTML = 'Token: ' + data.registrationId;
        });

        push.on('notification', function(data) {
            // data.message,
            // data.title,
            // data.count,
            // data.sound,
            // data.image,
            // data.additionalData
        });

        push.on('error', function(e) {
            // e.message
        });*/
        /****************************/
        
        
        var push = PushNotification.init({
            android: {
                senderID: "XXXXXXX"
            },
            ios: {
                alert: "true",
                badge: "true",
                sound: "true"
            }
        });
        
        push.on('registration', function(data) {    
            receivedElement.innerHTML = data.registrationId;
        });    
        
        
        //receivedElement.innerHTML = 'Waiting for notification token';
        
        
        
        /*push.on('registration', function(data) {
            receivedElement.innerHTML = data.registrationId;
        });*/
        
        //window.plugins.insomnia.keepAwake();

    }
};
