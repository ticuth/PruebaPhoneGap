/*jslint devel:true */
/*jslint browser:true */
/*global $*/

var app = {
    initialize: function(){
        app.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        'use strict';
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        'use strict';
        /*app.receivedEvent('deviceready');*/
        /*app.getPageInto('content/menu.html','#appmenu');*/
        app.getPageInto('content/principal.html', '#scroller');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        'use strict';
        alert('listo');
    }
};
