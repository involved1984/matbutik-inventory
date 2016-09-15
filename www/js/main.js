
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
        
        window.location.href = "http://www.hotmat.se/customer_app_redirector.php";
        navigator.splashscreen.hide();
    }
};
app.initialize();

setTimeout(function (){
    
    
    window.location.href = "http://www.hotmat.se/customer_app_redirector.php";
    navigator.splashscreen.hide();
    
},200);
