$(document).ready(function() {

    $("#conv").click(function() {

        var choix = $(".type").children("option:selected").val();

        if (choix == "DD" || choix == "DMS") {

            var latitude = $("#lat").val();
            var longitude = $("#long").val();
            if (latitude == "" || longitude == "") {
                $("#erreur").html("Veuillez remplir tous les champs demandés");

            } else {

                if (choix == "DMS") {


                    // var coor = latitude.substring(0, 2);
                    // av = (latitude.substring(4, 5) / 60) + (+atitude.substring(6, latitude.length) / 60);
                    // alert(av);
                    alert("Work in progress !");


                } else {

                    alert("Work in progress !");
                    var Dlat = latitude.substring(0, 2);
                    Dlat = Dlat + "°";

                    // alert(Dlat);

                    var Mlat = latitude.substring(latitude.indexOf('.'), latitude.length) * 60;
                    // alert(Mlat);

                    minute = Mlat.substring(0, 2);


                    // var Slat = Mlat.substring(3, Mlat.length) * 60;
                    // Mlat = minute + "'";
                    // Slat = Slat + '"';

                    // alert(Dlat + Mlat + Slat);

                    // var Dlong = longitude.substring(0, 2);
                    // Dlong = Dlong + "°";
                    // var pointLong = longitude.indexOf('.');

                    // var Mlong = longitude.substring(pointLong, longitude.length) * 60;
                    // Mlong = Mlong.substring(0, 2);
                    // Mlong = Mlong + "'";

                    // var Slong = Mlong.substring(3, Mlong.length) * 60;
                    // Slong = Slong + '"';


                    alert(Dlat + Mlat + Slat + "-----" + Dlong + Mlong + Slong);
                }


            }

        } else {
            $("#erreur").html("Veuillez dabord selectionner une option");
        }




    });

    // $("#lat").on("input", function() {

    //     text = $("#lat").val();
    //     //test pour ajouter un point juste apres les 2 premières données

    // });


    $("select.type").change(function() {

        var choix = $(this).children("option:selected").val();

        if (choix == "DD") {
            $("#erreur").html("");
            $("#titreConv").html("Convertion en DD°");
            $("#lat,#long").val("");
            $("#lat").attr("placeholder", "48.85837");
            $("#long").attr("placeholder", "2.294481");
            $(".sw").prop("checked", false);
            $("#conv").css("cursor", "pointer");
            $("#slide").slideDown("slow");


        } else if (choix == "DMS") {
            $("#erreur").html("");
            $("#titreConv").html("Convertion en DMS");
            $("#lat,#long").val("");
            $("#lat").attr("placeholder", "48° 51' 30.132");
            $("#long").attr("placeholder", "2° 17' 40.132");
            $(".sw").prop("checked", false);
            $("#conv").css("cursor", "pointer");
            $("#slide").slideDown("slow");
        } else {
            $("#slide").slideUp("slow");
            $("#conv").css("cursor", "not-allowed");
        };


    });







});