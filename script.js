
$(document).ready(function(){

    $('.box-btn1').click(function() {
        let participantes = $("#desplparticipantes").val()
        let arrayCoches = []
        arrayCoches.length = $("#desplparticipantes").val()
        $('#titulo').html("Has seleccionado "+ participantes + " coches para esta carrera.")
        console.log(arrayCoches)
        $.each(arrayCoches, function(index, value) {
            $(".coches").append('<div class="bg-coche"><img class="car" id="car'+(index+1)+'" src="/img/car'+(index+1)+'.png" alt="car'+(index+1)+'"></div>')
        }) 
        $('#btn2').show(1000)
    });

    $('.box-btn2-3 #btn2').click(function(){
        $('#btn2').hide()
        $('#btn3').show(500)
        $('#tabla').show(1000)
        
        let isComplete = false;

        function raceCompleted(){
            if(isComplete == false){
                isComplete = true
            }
        }
        
        let carwidth1 = $('#car1').width()
        let windowith1 = $(window).width() - carwidth1
        let aleatorio1 = Math.floor((Math.random()*3000)+1)
        $('#car1').animate({
            left : windowith1
        }, aleatorio1, function() {
            raceCompleted()
            if(isComplete = true) {
                $('#tabla').append('<tr><td>Coche uno</td><td>'+aleatorio1+'</td></tr>')
            }
        })
        let carwidth2 = $('#car2').width()
        let windowith2 = $(window).width() - carwidth2
        let aleatorio2 = Math.floor((Math.random()*3000)+1)
        $('#car2').animate({
            left : windowith2
        }, aleatorio2, function() {
            raceCompleted()
            if(isComplete = true) {
                $('#tabla').append('<tr><td>Coche dos</td><td>'+aleatorio2+'</td></tr>')
            }
        })
        let carwidth3 = $('#car3').width()
        let windowith3 = $(window).width() - carwidth3
        let aleatorio3 = Math.floor((Math.random()*3000)+1)
        $('#car3').animate({
            left : windowith3
        }, aleatorio3, function() {
            raceCompleted()
            if(isComplete = true) {
                $('#tabla').append('<tr><td>Coche tres</td><td>'+aleatorio3+'</td></tr>')
            }
        })
        let carwidth4 = $('#car4').width()
        let windowith4 = $(window).width() - carwidth4
        let aleatorio4 = Math.floor((Math.random()*3000)+1)
        $('#car4').animate({
            left : windowith4
        }, aleatorio4, function() {
            raceCompleted()
            if(isComplete = true) {
                $('#tabla').append('<tr><td>Coche cuatro</td><td>'+aleatorio4+'</td></tr>')
            }
        })
        let carwidth5 = $('#car5').width()
        let windowith5 = $(window).width() - carwidth5
        let aleatorio5 = Math.floor((Math.random()*3000)+1)
        $('#car5').animate({
            left : windowith5
        }, aleatorio5, function() {
            raceCompleted()
            if(isComplete = true) {
                $('#tabla').append('<tr><td>Coche cinco</td><td>'+aleatorio5+'</td></tr>')
            }
        })
        let carwidth6 = $('#car6').width()
        let windowith6 = $(window).width() - carwidth6
        let aleatorio6 = Math.floor((Math.random()*3000)+1)
        $('#car6').animate({
            left : windowith6
        }, aleatorio6, function() {
            raceCompleted()
            if(isComplete = true) {
                $('#tabla').append('<tr><td>Coche seis</td><td>'+aleatorio6+'</td></tr>')
            }
        })
        let carwidth7 = $('#car7').width()
        let windowith7 = $(window).width() - carwidth7
        let aleatorio7 = Math.floor((Math.random()*3000)+1)
        $('#car7').animate({
            left : windowith7
        }, aleatorio7, function() {
            raceCompleted()
            if(isComplete = true) {
                $('#tabla').append('<tr><td>Coche siete</td><td>'+aleatorio7+'</td></tr>')
            }
        })
        let carwidth8 = $('#car8').width()
        let windowith8 = $(window).width() - carwidth8
        let aleatorio8 = Math.floor((Math.random()*3000)+1)
        $('#car8').animate({
            left : windowith8
        }, aleatorio8, function() {
            raceCompleted()
            if(isComplete = true) {
                $('#tabla').append('<tr><td>Coche ocho</td><td>'+aleatorio8+'</td></tr>')
            }
        })
        let carwidth9 = $('#car9').width()
        let windowith9 = $(window).width() - carwidth9
        let aleatorio9 = Math.floor((Math.random()*3000)+1)
        $('#car9').animate({
            left : windowith9
        }, aleatorio9, function() {
            raceCompleted()
            if(isComplete = true) {
                $('#tabla').append('<tr><td>Coche nueve</td><td>'+aleatorio9+'</td></tr>')
            }
        })
    });
    $('.box-btn2-3 #btn3').click(function(){
        $('#btn3').hide()
        $('#btn2').show(500)
        $('.car').each(function(){
            $(this).animate({
                left: 0
            }, 'slow')
        })
        $('#tabla').hide()
    })

})