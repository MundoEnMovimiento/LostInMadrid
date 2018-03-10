





var map;
var markers = [];

var c;
var url_marker;


function initMap() {

    console.log("inicia mapa");

    var myLatLng = {lat: 40.41804, lng: -3.70485};


    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12.4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map
    });
    map.set(marker);


}


function generateLatLong(category, color) {

    switch(category){
        case "alojamiento":
            cambiaVerde();
            break;

        case('religion'):
            cambiaAzulOscuro();
            break;

        default:
            break;

    }

    $('html,body').animate({
        scrollTop:$("#map").offset().top
    },1500);

    if(markers.length !== 0){


        console.log("Remove all markers");
        console.log(markers);

        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null); //Remove the marker from the map
        }


    }

    switch(color){
        case("#BDFB9A"):
            url_marker = 'https://firebasestorage.googleapis.com/v0/b/lostinmadrid-24ae6.appspot.com/o/markers_small%2Fgreen_marker.png?alt=media&token=d30683e2-9054-48ce-aafd-06beee46a439';
            break;
        case("#8CDEFA"):
            url_marker ='https://firebasestorage.googleapis.com/v0/b/lostinmadrid-24ae6.appspot.com/o/markers_small%2Fblue_marker.png?alt=media&token=a8bdaf7b-1d71-4869-8455-0d7de625ec8a';
            break;
        case("#F27A69"):
            url_marker ='https://firebasestorage.googleapis.com/v0/b/lostinmadrid-24ae6.appspot.com/o/markers_small%2Fred_marker.png?alt=media&token=d0ab15b5-fa8d-4e0e-9c4d-c5c7e61ef976';
            break;
        case("#FE9844"):
            url_marker ='https://firebasestorage.googleapis.com/v0/b/lostinmadrid-24ae6.appspot.com/o/markers_small%2Forange_marker.png?alt=media&token=e8d76379-0b99-4c70-befe-1c0b1719d469';
            break;
        case("#C9A1F1"):
            url_marker ='https://firebasestorage.googleapis.com/v0/b/lostinmadrid-24ae6.appspot.com/o/markers_small%2Fpurple_marker.png?alt=media&token=f5ee403f-26bc-49b5-8a4b-7e1a0f4e6559';
            break;
        case("#FFE614"):
            url_marker ='https://firebasestorage.googleapis.com/v0/b/lostinmadrid-24ae6.appspot.com/o/markers_small%2Fyellow_marker.png?alt=media&token=5c1b95d6-5c87-49d5-81e7-cc88575311a1';
            break;
        case("#9C7134"):
            url_marker ='https://firebasestorage.googleapis.com/v0/b/lostinmadrid-24ae6.appspot.com/o/markers_small%2Fbrown_marker.png?alt=media&token=177f8479-de1c-4123-ac58-ad10bf1b0954';
            break;
        case("#FCADF6"):
            url_marker ='https://firebasestorage.googleapis.com/v0/b/lostinmadrid-24ae6.appspot.com/o/markers_small%2Fpink_marker.png?alt=media&token=f2b521eb-0980-4d0f-b8cd-1aa132bfc927';
            break;
        case("#658EC5"):
            url_marker ='https://firebasestorage.googleapis.com/v0/b/lostinmadrid-24ae6.appspot.com/o/markers_small%2Fdark_blue_marker.png?alt=media&token=05bb6970-6e6d-4845-b73e-a93fb9b5be88';
            break;

    }




    //document.getElementById("header_id").style.backgroundColor = color;

    c = firebase.database().ref().child(`services/${category}`)
        .once("value", function(snapshot) {
            snapshot.forEach(function(child) {



                var myLatLng = {lat: parseFloat(child.val().latitude), lng: parseFloat(child.val().longitude)};

                var myONG = {

                    id: child.val().id,
                    name: child.val().name,
                    phone: child.val().phone,
                    address: child.val().address,
                    mail: child.val().mail,
                    web: child.val().web,
                    postal_code: child.val().postal_code,
                    district: child.val().district,
                    schedule:child.val().schedule ,
                    appointment: child.val().appointment,
                    appointment_method: child.val().appointment_method,
                    services: child.val().services,
                    language: child.val().language,
                    other: child.val().other,
                    p_name: child.val().p_name,
                    p_phone: child.val().p_phone,
                    p_mail: child.val().p_mail
                };
                var contentString = '<div id="content">'+
                    '<div id="siteNotice">'+
                    '</div>'+
                    '<h1 id="firstHeading" class="firstHeading">'+myONG.name+'</h1>'+
                    '<div id="bodyContent">'+
                    '<p><b>Dirección:</b> <br>'+ myONG.address +
                    '<p><b>Servicios: </b>'+myONG.services+'. <p><b>Teléfono:   </b>'+myONG.phone +'</p> <p><b>Horario: </b>'+myONG.schedule+' <br><b>¿Es necesario pedir cita? </b>'+myONG.appointment+'</p></p><p><b>Web: </b><a href='+myONG.web+'>'+myONG.web+
                    '</a> '+
                    '.</p></div>'+
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString,
                    maxWidth: 200
                });


                var marker = new google.maps.Marker({
                    position: myLatLng,
                    icon: url_marker,
                    map: map
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });


                map.set(marker);
                markers.push(marker);

            });
        });

}



