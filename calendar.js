  // Client ID and API key from the Developer Console
      var CLIENT_ID = '237479426553-2pgoq0b1h7htjmne80670ca6id8rv19u.apps.googleusercontent.com';
      // Array of API discovery doc URLs for APIs used by the quickstart
      var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      var SCOPES = "https://www.googleapis.com/auth/calendar";

      var authorizeButton = document.getElementById('authorize-button');
      var signoutButton = document.getElementById('signout-button');

      /**
       *  On load, called to load the auth2 library and API client library.
       */
      function handleClientLoad() {
        gapi.load('client:auth2', initClient);
      }

      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
      function initClient() {
        gapi.client.init({
          discoveryDocs: DISCOVERY_DOCS,
          clientId: CLIENT_ID,
          scope: SCOPES
        }).then(function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
         // authorizeButton.onclick = handleAuthClick;
         // signoutButton.onclick = handleSignoutClick;
        });
      }

      /**
       *  Called when the signed in status changes, to update the UI
       *  appropriately. After a sign-in, the API is called.
       */
      function updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
            /*
          authorizeButton.style.display = 'none';
          signoutButton.style.display = 'block';*/
          //listUpcomingEvents();
        } else {
          /*authorizeButton.style.display = 'block';
          signoutButton.style.display = 'none';*/
        }
      }

      /**
       *  Sign in the user upon button click.
       */
      function handleAuthClick(event) {
        gapi.auth2.getAuthInstance().signIn();
      }

      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick(event) {
        gapi.auth2.getAuthInstance().signOut();
      }

      /**
       * Append a pre element to the body containing the given message
       * as its text node. Used to display the results of the API call.
       *
       * @param {string} message Text to be placed in pre element.
       */
      function appendPre(message) {
        alert(message);
      }

      /**
       * Print the summary and start datetime/date of the next ten events in
       * the authorized user's calendar. If no events are found an
       * appropriate message is printed.
       */
      function listUpcomingEvents() {
        gapi.client.calendar.events.list({
          'calendarId': 'primary',
          'timeMin': (new Date()).toISOString(),
          'showDeleted': false,
          'singleEvents': true,
          'maxResults': 10,
          'orderBy': 'startTime'
        }).then(function(response) {
          var events = response.result.items;
          appendPre('Upcoming events:');

          if (events.length > 0) {
            for (i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              appendPre(event.summary + ' (' + when + ')')
            }
          } else {
            appendPre('No upcoming events found.');
          }
        });
      }

function setReminder(date, remind) {

var event = {
  'summary': remind,
  'description': remind,
  'start': {
    'dateTime': date+'T0:00:00-04:00',
    'timeZone': 'America/New_York'
  },
  'end': {
    'dateTime': date+'T23:59:59-04:00',
    'timeZone': 'America/New_York'
  },
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
};

var request = gapi.client.calendar.events.insert({
  'calendarId': 'primary',
  'resource': event
});

request.execute(function(event) {
  appendPre('Event created: ' + event.htmlLink);
});
}

/*jslint browser: true, devel: true */
/*global $, jQuery*/
$(document).ready(function () {
    "use strict";
   //$('.js-header').on('click', function (event) {
       // event.preventDefault();
        //$('html').scrollTop(0).reload();
        
    //});
    
    var table = {'01': [], '02': [], '03': [], '04': [], '05': [], '06': [], '07': [], '08': [], '09': [], '10': [], '11': [], '12': []}, key, s, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec, value;
    
    $('.rem').on('click', function (event) {
        event.preventDefault();
       //var pos= $('.month-item').backgroundPositionX;
       //var num= $(this).name();
        $('.note-form').toggleClass('is-visible');
        $('.modal').addClass('activate');
        $('.modal-overlay').addClass('retreat');
    });
    
    $('.form-submit').on('click', function (event) {
        event.preventDefault();
        $('.note-form').removeClass('is-visible');
        var lit = $('#date').val() + ' ' + $('#note').val();
        $('.note-record').append('<li>').append(lit).append('</li>');
        
    });
    
    $('.form-submit2').on('click', function (event) {
        event.preventDefault();
        var lit = $('#date2').val() + ' ' + $('#note2').val();
        $('.note-record').append('<li>').append('<input id="checkBox" type="checkbox" display="inline">').append("  ").append(lit).append('</li>');
        s = $('#date2').val().split('-');
        key = s[1];
        table[key].push(lit);
        value = table[key];
        if (key === '01') {
            $('.jan-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '02') {
            $('.feb-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '03') {
            $('.mar-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '04') {
            $('.apr-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '05') {
            $('.may-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '06') {
            $('.jun-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '07') {
            $('.jul-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '08') {
            $('.aug-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '09') {
            $('.sep-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '10') {
            $('.oct-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '11') {
            $('.nov-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        if (key === '12') {
            $('.dec-tt').tooltip('hide')
                .attr('data-original-title', value)
                .tooltip('fixTitle')
                .tooltip('show');
        }
        setReminder($('#date2').val(), $('#note2').val());
        $('.modal').removeClass('activate');
        $('.modal-overlay').removeClass('retreat');
    });
    
    $('.form-cancel').on('click', function (event) {
        event.preventDefault();
        $('.note-form').removeClass('is-visible');
        $('.modal').removeClass('activate');
        $('.modal-overlay').removeClass('retreat');
        
    });
    
     
    $('.glyphicon-remove').on('click', function (event) {
        event.preventDefault();
        $('.note-form').removeClass('is-visible');
        $('.modal').removeClass('activate');
        $('.modal-overlay').removeClass('retreat');
        
    });
    
    if (document.getElementById('checkBox').checked) {
        alert('Hello!');
    }
    
    //$('.circle1').on('click', function (event) {
       // event.preventDefault();
        //var x = $('.cell').position();
       // $('.cell').removeClass('show').addClass('hidden');
       // $('.cell2').css({'top': x.top, 'left': x.left});
        //$('.cell2').removeClass('hidden').addClass('show');
        
    //});
    
    //$('.modal-overlay').on('click', function (event) {
       // event.preventDefault();
       // event.stopPropagation();
       // $('.modal-overlay').removeClass('retreat');
       // $('.modal').removeClass('activate');
     
    //});
    
    $('.sign-out1').on('click', function (event) {
        event.preventDefault();
        alert('Successfully Logged Out!');
        window.history.go(-1);
        
    });
    
    $('.sign-out2').on('click', function (event) {
        event.preventDefault();
        alert('Successfully Logged Out!');
        window.history.go(-1);
        
    });
    
    handleClientLoad();
    
   
});



     
      


