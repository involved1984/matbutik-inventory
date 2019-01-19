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
        LoadingAndInitializingTheApp();
        
    }
};

var loaderAlignInterval;
function LoadingAndInitializingTheApp(){
        
        ajaxObject = $.ajax({
            type: 'POST',
            url: 'http://192.168.1.131/matbutik/inventory/index.php',
            data: {},
            success: function(data){
                $('#pageContainer').html('');
                $('#pageContainer').append(data);
            },
            error : function(){
                setTimeout(function(){
                    $('#pageContainer').html('<center><br><br><br>Error loading<br>Retrying...</center>');
                    LoadingAndInitializingTheApp();
                }, 1000);
            },
            complete: function(){
            }
        });
    
}
