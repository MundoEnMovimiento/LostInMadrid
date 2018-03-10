

function cambiaVerde(){
    console.log("cambio");

    document.getElementById("header_id").style.backgroundColor = "#BDFB9A";
	document.getElementById("expander").style.height = "0px";
    cambiaBorde(1);



}
function cambiaAzul(){
	console.log("cambio");
	document.getElementById("header_id").style.backgroundColor = "#8CDEFA";
    document.getElementById("expander").style.height = "375px";
    cambiaBorde(2);


}
function cambiaRojo(){
    console.log("cambio");

    document.getElementById("header_id").style.backgroundColor = "#F27A69";
    document.getElementById("expander").style.height = "580px";

    cambiaBorde(3);

}
function cambiaNaranja(){
document.getElementById("header_id").style.backgroundColor = "#FE9844";
    document.getElementById("expander").style.height = "375px";
    cambiaBorde(4);

}
function cambiaMorado(){
document.getElementById("header_id").style.backgroundColor = "#C9A1F1";
    document.getElementById("expander").style.height = "375px";
    cambiaBorde(5);

}
function cambiaAmarillo(){
document.getElementById("header_id").style.backgroundColor = "#FFE614";
    document.getElementById("expander").style.height = "375px";
    cambiaBorde(6);

}
function cambiaMarron(){
document.getElementById("header_id").style.backgroundColor = "#9C7134";
    document.getElementById("expander").style.height = "375px";
    cambiaBorde(9);

}
function cambiaRosa(){
document.getElementById("header_id").style.backgroundColor = "#FCADF6";
    document.getElementById("expander").style.height = "375px";
    cambiaBorde(8);

}
function cambiaAzulOscuro(){
document.getElementById("header_id").style.backgroundColor = "#658EC5";
    document.getElementById("expander").style.height = "0px";
    cambiaBorde(7);

}

function cambiaBorde(indice){
    switch (indice){
        case 1:
            document.getElementById("home_id").style.border ="thick solid #BDFB9A";
            document.getElementById("home_id").style.borderRadius= "20px";

            document.getElementById("education_id").style.borderStyle="none";
            document.getElementById("health_id").style.borderStyle="none";
            document.getElementById("basics_id").style.borderStyle="none";
            document.getElementById("services_id").style.borderStyle="none";
            document.getElementById("leisure_culture_id").style.borderStyle="none";
            document.getElementById("religion_id").style.borderStyle="none";
            document.getElementById("info_id").style.borderStyle="none";
            document.getElementById("languages_id").style.borderStyle="none";
            break;
        case 2:
            document.getElementById("languages_id").style.border = "thick solid #8CDEFA";
            document.getElementById("languages_id").style.borderRadius= "20px";

            document.getElementById("education_id").style.borderStyle="none";
            document.getElementById("health_id").style.borderStyle="none";
            document.getElementById("basics_id").style.borderStyle="none";
            document.getElementById("services_id").style.borderStyle="none";
            document.getElementById("leisure_culture_id").style.borderStyle="none";
            document.getElementById("religion_id").style.borderStyle="none";
            document.getElementById("info_id").style.borderStyle="none";
            document.getElementById("home_id").style.borderStyle="none";

            break;
        case 3:
            /*document.getElementsByClassName("image")[5].borderStyle="none";*/
            var n=document.getElementById("health_id");
            n.style.border="thick solid #F27A69";
            n.style.borderRadius= "20px";

            document.getElementById("education_id").style.borderStyle="none";
            document.getElementById("home_id").style.borderStyle="none";
            document.getElementById("basics_id").style.borderStyle="none";
            document.getElementById("services_id").style.borderStyle="none";
            document.getElementById("leisure_culture_id").style.borderStyle="none";
            document.getElementById("religion_id").style.borderStyle="none";
            document.getElementById("info_id").style.borderStyle="none";
            document.getElementById("languages_id").style.borderStyle="none";
            break;
        case 4:
            document.getElementById("basics_id").style.border = "thick solid #FE9844";
            document.getElementById("basics_id").style.borderRadius= "20px";

            document.getElementById("education_id").style.borderStyle="none";
            document.getElementById("health_id").style.borderStyle="none";
            document.getElementById("home_id").style.borderStyle="none";
            document.getElementById("services_id").style.borderStyle="none";
            document.getElementById("leisure_culture_id").style.borderStyle="none";
            document.getElementById("religion_id").style.borderStyle="none";
            document.getElementById("info_id").style.borderStyle="none";
            document.getElementById("languages_id").style.borderStyle="none";
            break;
        case 5:
            document.getElementById("education_id").style.border = "thick solid #C9A1F1";
            document.getElementById("education_id").style.borderRadius= "20px";

            document.getElementById("home_id").style.borderStyle="none";
            document.getElementById("health_id").style.borderStyle="none";
            document.getElementById("basics_id").style.borderStyle="none";
            document.getElementById("services_id").style.borderStyle="none";
            document.getElementById("leisure_culture_id").style.borderStyle="none";
            document.getElementById("religion_id").style.borderStyle="none";
            document.getElementById("info_id").style.borderStyle="none";
            document.getElementById("languages_id").style.borderStyle="none";
            break;
        case 6:
            document.getElementById("services_id").style.border = "thick solid #FFE614";
            document.getElementById("services_id").style.borderRadius= "20px";

            document.getElementById("education_id").style.borderStyle="none";
            document.getElementById("health_id").style.borderStyle="none";
            document.getElementById("basics_id").style.borderStyle="none";
            document.getElementById("home_id").style.borderStyle="none";
            document.getElementById("leisure_culture_id").style.borderStyle="none";
            document.getElementById("religion_id").style.borderStyle="none";
            document.getElementById("info_id").style.borderStyle="none";
            document.getElementById("languages_id").style.borderStyle="none";
            break;
        case 7:
            document.getElementById("religion_id").style.border = "thick solid #658EC5";
            document.getElementById("religion_id").style.borderRadius= "20px";

            document.getElementById("education_id").style.borderStyle="none";
            document.getElementById("health_id").style.borderStyle="none";
            document.getElementById("basics_id").style.borderStyle="none";
            document.getElementById("services_id").style.borderStyle="none";
            document.getElementById("leisure_culture_id").style.borderStyle="none";
            document.getElementById("home_id").style.borderStyle="none";
            document.getElementById("info_id").style.borderStyle="none";
            document.getElementById("languages_id").style.borderStyle="none";
            break;
        case 8:
            document.getElementById("leisure_culture_id").style.border = "thick solid #FCADF6";
            document.getElementById("leisure_culture_id").style.borderRadius= "20px";

            document.getElementById("education_id").style.borderStyle="none";
            document.getElementById("health_id").style.borderStyle="none";
            document.getElementById("basics_id").style.borderStyle="none";
            document.getElementById("services_id").style.borderStyle="none";
            document.getElementById("home_id").style.borderStyle="none";
            document.getElementById("religion_id").style.borderStyle="none";
            document.getElementById("info_id").style.borderStyle="none";
            document.getElementById("languages_id").style.borderStyle="none";
            break;
        case 9:
            document.getElementById("info_id").style.border = "thick solid #9C7134";
            document.getElementById("info_id").style.borderRadius= "20px";

            document.getElementById("education_id").style.borderStyle="none";
            document.getElementById("health_id").style.borderStyle="none";
            document.getElementById("basics_id").style.borderStyle="none";
            document.getElementById("services_id").style.borderStyle="none";
            document.getElementById("leisure_culture_id").style.borderStyle="none";
            document.getElementById("religion_id").style.borderStyle="none";
            document.getElementById("home_id").style.borderStyle="none";
            document.getElementById("languages_id").style.borderStyle="none";
            break;

        default:
            document.getElementById("home_id").style.border = "thick solid #BDFB9A";
    }
}




