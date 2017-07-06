$(document).ready(function () {
   //$('.js-header').on('click', function (event) {
       // event.preventDefault();
        //$('html').scrollTop(0).reload();
        
    //});
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
        for (String key: table){
            if ($('#date2').getMonth()== key){
                table.push(lit);
            }
        }
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
    
    $('.modal-overlay.retreat').on('click', function(event){
        event.preventDefault();
        
        $('.modal-overlay.retreat').removeClass('retreat');
        $('.modal.activate').removeClass('activate');
     
    })
    
    var table= new Hash('01', [], '02',[], '03',[], '04',[], '05',[], '06',[], '07',[], '08',[],'09',[], '10',[], '11',[],'12',[] );
    
    $('[data-toggle="tooltip"]').tooltip();
    
   
});

