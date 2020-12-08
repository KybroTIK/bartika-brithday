$(document).ready(

    function(){
     $("#giftbox").one("click" , showBox );
     $("#ball").on("click", gift);
       }
       
    )
    
    function gift(){
     
        $("#celegift").fadeOut(500);
        $("#sectionTwo").fadeIn(1000);
    }
    
    
    function submit(){
           var answer = document.getElementById("answer").value.toUpperCase();
                if( answer == "SOLOLEARN BEGINNER TIPS"){
                   $("#sectionTwo").fadeOut(500)
                   $("#sectionThree").fadeIn(500)
                }
               
               else if(answer == "SOLOBEGINNER TIPS") {
                     $("#sectionTwo").fadeOut(500)
                   $("#sectionThree").fadeIn(500)
               }
               
               else if(answer == "SOLOBEGINNERS [HELP]"){
                     $("#sectionTwo").fadeOut(500)
                   $("#sectionThree").fadeIn(500)
               }
                
                else {
                    $("#hint").text("Am sure you are not brinjal");
                    $("#hint").css("color","#fff")
                }
            }
       
    
    
    
    function showBox(){
     
        anime({
            targets: '#giftcover',
            keyframes:[
            {translateY:-40 },
            {translateX:150},
            {rotateZ:90 },
            {translateY:40 },
            ],
            duration:6000,
            loop:false,
            update:open
            
        })
        
        function open(){
              anime({
            delay:100,
            targets: '#ball',
            keyframes:[
            {translateY:-150 },
            {translateX:20},
            {rotateZ:90 },
            {translateX:-40},
            {translateY:10 },
            {rotateZ:0 },
            {translateY:-200},
            
            {translateY:-150 },
            {translateX:20},
            {rotateZ:90 },
            {translateX:-40},
            {translateY:10 },
            {rotateZ:0 },
            {translateY:-200}, 
             
            {translateY:-150 },
            {translateX:20},
            {rotateZ:90 },
            {translateX:-40},
            {translateY:10 },
            {rotateZ:0 },
            {translateY:-200},
            
            ],
            duration:12000,
            loop:false,        
       
        
        })
            
        }
        
            
    }