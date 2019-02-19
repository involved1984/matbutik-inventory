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
        selectServer();
    }
};

var SERVER_URL = '';
function selectServer(){
    $('#pageContainer').html('');
    
    if (window.localStorage.getItem("serverurl").length > 0){
        $('#pageContainer').html('First');
        SERVER_URL = window.localStorage.getItem("serverurl");
        LoadingAndInitializingTheApp();
    } else {
        $('#pageContainer').html('second');
        var serverurl = prompt("Server URL: (Dev: http://192.168.1.131/matbutik)", "https://www.matbutik.se");
        if (serverurl != null) {
            $('#pageContainer').html('third');
            window.localStorage.setItem("serverurl", serverurl);
            setTimeout(selectServer,100);
        }
    }
}

function LoadingAndInitializingTheApp(){
        
    
        ajaxObject = $.ajax({
            type: 'POST',
            //url: 'http://192.168.1.131/matbutik/inventory/index.php',
            //url: 'https://www.matbutik.se/inventory/index.php',
            url: SERVER_URL + '/inventory/index.php',
            data: {},
            success: function(data){
                $('#pageContainer').html('');
                $('#pageContainer').append(data);
            },
            error : function(){
                setTimeout(function(){
                    $('#errorLoadingAppMessage').show();
                    LoadingAndInitializingTheApp();
                }, 1000);
            },
            complete: function(){
            }
        });
    
}
