function time()
{
    new Date().getFullYear()

    document.getElementById("year").value=ch;
}
function verif1(){
    days=document.getElementById("days").value;
    mois=document.getElementById("mois").value;
    piece=document.getElementById("piece").selectedIndex;
    salle=document.getElementById("salle").selectedIndex;
    if(piece==0){
        alert("choix obligatoire de piece")
    }
    if(salle==0){
        alert("choix obligatoire de salle")
    }
    if(mois==1||mois==3||mois==5||mois==7||mois==8||mois==10||mois==12){
        if(days<1||days>31){
            alert("days incorect")
        }
    }
    if(mois==4||mois==6||mois==9||mois==11){
        if(days<1||days>30){
            alert("days incorect")
        }
    } 
    if(mois==2 && year%4==0){
        if(days<1 ||days>29){
            alert("le date est incorrect")
        }
    }   
    if(mois==2 ){
        if(days<1 ||days>28){
            alert("le date est incorrect")
        }
    }     
}