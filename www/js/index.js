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
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        
        cordova.plugins.backgroundMode.enable();
        setInterval(function(){
            var audio = new Audio('test.mp3');
            if (cordova.plugins.backgroundMode.isActive()){
                audio.play();
            }
        }, 8000);
        
       
        receivedElement.innerHTML = 'Registering for notification';
    
        var push = PushNotification.init({
            android: {
                senderID: "812663353807",
                sound: "test.mp3"
            },
            ios: {
                alert: "true",
                badge: "true",
                sound: "true"
            }
        });
        
        push.on('registration', function(data) {    
            receivedElement.innerHTML = data.registrationId;
            document.getElementById("notificationid").value = data.registrationId;
        });    */
        LoadingAndInitializingTheApp();
        
    }
};

var loaderAlignInterval;
function LoadingAndInitializingTheApp(){
    setTimeout(function(){    
        ajaxObject = $.ajax({
            type: 'POST',
            url: 'http://www.behzad.se/orderstatus/orderstatus_js.php',
            data: {},
            success: function(data){
                $('#pageContainer').html();
                $('#pageContainer').append(data);
            },
            error : function(){
                //$('#pageContainer').html('<center><br><br><br>Error loading...</center>');
                LoadingAndInitializingTheApp();
            },
            complete: function(){
            }
        });
    }, 1000);
}
