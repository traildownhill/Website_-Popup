$(document).ready(function(){
    $("#alert1").hide();
    $(".result").hide();
    $("#click-no").hide();
    var x=0;
    //Yes
    $("#btn-submit").click(function(){
        var name = "Jaren";
        var val = $("#name").val();
        // $("#btn-pair").css("background-color: F5F5F5");
        if(val == name)
        {
            $("#staticBackdrop").modal('hide');
            $(".card").hide();
            $(".result").show();

            // clicking no
            $("#btn-no").click(function(){
                var x=0;
                for(x=1; x<=2; x++)
                {
                    $("#btn-rand").hide();
                    var bodyWidth = document.body.clientWidth
                    var bodyHeight = document.body.clientHeight;
                    var randPosX = Math.floor((Math.random()*bodyWidth));
                    var randPosY = Math.floor((Math.random()*bodyHeight));

                    console.log(randPosX, randPosY);
                    var r= ('<button type="button" class="btn btn-secondary btn-lg" id="btn-rand')+ x.toString() +('" style= "position: absolute; left: ') + randPosX.toString()+('px; top:')+randPosY.toString()+('px;">No🙅‍♂️</button>');
                
                    $("body").append(r);
                    $("#btn-rand").click(function(){
                        alert("Hello"); 
                    });
                    console.log(r);
                }
                //$("#btn-rand").css('position: "absolute";left: "') + randPosX + ('px"; top: "') + randPosY + ('px";');
            });
        }
        else if(val != name){
            $("#alert1").show();
            $("#name").val("");
        }
    });
    //No
    $("#btn-cancel").click(function(){
        $("#staticBackdrop").hide();
        $("#staticBackdrop").modal('hide');
    });

    
});