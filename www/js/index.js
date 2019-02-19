var SERVERURL = '';
//var SERVERURL = 'http://192.168.1.131/matbutik'; // Development
//var SERVERURL = 'https://www.matbutik.se'; // Live

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
        checkserverMode();
    }
};

function checkserverMode(){
    SERVERURL = window.localStorage.getItem('savedserverurl');
    if (SERVERURL != null && SERVERURL != undefined && SERVERURL != 'undefined' && SERVERURL != ''){
		$('#appModeButtons').hide();
        LoadingAndInitializingTheApp();
	}
}

function setServerUrl(serverurltosave){
    window.localStorage.setItem('savedserverurl', serverurltosave);
    checkserverMode();
}

function LoadingAndInitializingTheApp(){
        
    
        ajaxObject = $.ajax({
            type: 'POST',
            url: SERVERURL + '/inventory/index.php',
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
