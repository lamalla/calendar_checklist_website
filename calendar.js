function setReminder(date, remind) {
var event = {
  'summary': remind,
  'description': remind,
  'start': {
    'dateTime': date+'T9:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': date+'T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
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
    
    
    
   
});



     
      


