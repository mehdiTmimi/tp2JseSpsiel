
function ajouterEtudiant()
{
    let nomInput=document.getElementById("nom");
    let prenomInput=document.getElementById("prenom");
    let ageInput=document.getElementById("age");
    let tbody=document.getElementById("bodyTable");
    let teste=0;
    teste=teste+gererInput(nomInput);
    teste+=gererInput(prenomInput);
    teste+=gererInput(ageInput);
    if( teste==0)
    {
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    td1.innerHTML=nomInput.value;
    td2.innerHTML=prenomInput.value;
    td3.innerHTML=ageInput.value;
    tbody.appendChild(tr);
    nomInput.value="";
    prenomInput.value="";
    ageInput.value=""
    }
}
function gererInput(x)
{
    if(x.value=="")
    {
        x.setAttribute("style","border-bottom:3px solid blue");
        return 1;
    }
    else
    {
        x.removeAttribute("style");
        return 0;
    }
}