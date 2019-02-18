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
        
         $('#serverURLButton').on('click', function(){
            window.localStorage.setItem("serverurl", $('#serverURL').val());
            selectServer();
        });
    }
};

var SERVER_URL = '';
function selectServer(){
    if (window.localStorage.getItem("serverurl").length > 0){
        SERVER_URL = window.localStorage.getItem("serverurl");
        $('#serverUrlContainer').hide();
        $('#globalLoaderHolder').show();
        LoadingAndInitializingTheApp();
    } else {
       $('#serverUrlContainer').show();
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
