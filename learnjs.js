
$(document).ready(function(){

function populate(){
var isFound =[];

    function check(x){
        for (z=0; z < molecules.length; z++){
            if (molecules[x].name==localStorage.getItem("discovered-"+z)){
                return true;
            }
        }
        return false;
    }

    var container=document.getElementById("card-container");
        var newGrid=document.createElement("div");
            newGrid.className = "row card-group justify-content-md-center";
            newGrid.style = "height:75%";
 for (i=0; i < array.length; i++){
            var newColumn=document.createElement("div");
                newColumn.className = "col-lg-3 col-md-6 card-deck";
                var newCard=document.createElement("div");
                     newCard.className = "card";
                    var newImage=document.createElement("img");
                         newImage.className = "card-img-top";
                         newImage.src = array[i].imgsrc;
                         newImage.style.width = array[i].width;
                         newImage.style.margin = "auto";
                         newImage.style.setProperty('padding-top','5%');
                    newCard.appendChild(newImage);
                    var newCardBody=document.createElement("div");
                         newCardBody.className = "card-body";
                        var newTitle=document.createElement("h5");
                             newTitle.className = "card-title";
                             newTitle.innerHTML = array[i].name;
                        var newParagraph=document.createElement("p");
                             newParagraph.className = "card-text";
                             newParagraph.innerHTML = array[i].fact;
                    newCardBody.appendChild(newTitle);
                    newCardBody.appendChild(newParagraph);
                newCard.appendChild(newCardBody);
                    var newUList=document.createElement("ul");
                        newUList.className = "list-group list-group-flush";
                        var newList=document.createElement("li");
                            newList.className = "list-group-item";
                            newList.innerHTML = "Atomic Number: " + array[i].anum;
                        var newList2=document.createElement("li");
                            newList2.className = "list-group-item";
                            newList2.innerHTML = "Molar Mass: " + array[i].mass + " g/mol";
                    newUList.appendChild(newList);
                    newUList.appendChild(newList2);
                newCard.appendChild(newUList);
            newColumn.appendChild(newCard);
        newGrid.appendChild(newColumn);
    container.appendChild(newGrid);
};


var moleculeContainer=document.getElementById("molecule-container");
    var newGrid2=document.createElement("div");
        newGrid2.className = "row card-group justify-content-md-center";
        newGrid2.style = "height:75%";
    for (x=0; x < molecules.length; x++){
 var newColumn2=document.createElement("div");
                newColumn2.className = "col-lg-3 col-md-6 card-deck";
                var newCard2=document.createElement("div");
                     newCard2.className = "card";

                if(check(x)){
                    var newImage2=document.createElement("img");
                         newImage2.className = "card-img-top";
                         newImage2.src = molecules[x].imgsrc;
                         newImage2.style.width = "100%";
                         newImage2.style.margin = "auto";
                    newCard2.appendChild(newImage2);
                    var newCardBody2=document.createElement("div");
                         newCardBody2.className = "card-body";
                        var newTitle2=document.createElement("h5");
                             newTitle2.className = "card-title";
                             newTitle2.innerHTML = molecules[x].name;
                        var newParagraph2=document.createElement("p");
                             newParagraph2.className = "card-text";
                             newParagraph2.innerHTML = molecules[x].fact;
                    newCardBody2.appendChild(newTitle2);
                    newCardBody2.appendChild(newParagraph2);
                newCard2.appendChild(newCardBody2);
                    var newUList2=document.createElement("ul");
                        newUList2.className = "list-group list-group-flush";
                        var newList3=document.createElement("li");
                            newList3.className = "list-group-item";
                            newList3.innerHTML = "Formula: " + molecules[x].formula;
                        var newList4=document.createElement("li");
                            newList4.className = "list-group-item";
                            newList4.innerHTML = "Molar Mass: " + molecules[x].mass + " g/mol";
                    newUList2.appendChild(newList3);
                    newUList2.appendChild(newList4);
                newCard2.appendChild(newUList2);}

              else{
                var newImage2=document.createElement("img");
                      newImage2.className = "card-img-top";
                      newImage2.src = "questionmark.png";
                      newImage2.style.width = "100%";
                      newImage2.style.margin = "auto";
                 newCard2.appendChild(newImage2);
                 var newCardBody2=document.createElement("div");
                      newCardBody2.className = "card-body";
                     var newTitle2=document.createElement("h5");
                          newTitle2.className = "card-title";
                          newTitle2.innerHTML = "Undiscovered Molecule";
                     var newParagraph2=document.createElement("p");
                          newParagraph2.className = "card-text";
                          newParagraph2.innerHTML = "This molecule has yet to be discovered! Keep playing to find more.";
                 newCardBody2.appendChild(newTitle2);
                 newCardBody2.appendChild(newParagraph2);
             newCard2.appendChild(newCardBody2);
                 var newUList2=document.createElement("ul");
                     newUList2.className = "list-group list-group-flush";
                     var newList3=document.createElement("li");
                         newList3.className = "list-group-item";
                         newList3.innerHTML = "Atomic Number: ???";
                     var newList4=document.createElement("li");
                         newList4.className = "list-group-item";
                         newList4.innerHTML = "Molar Mass: ??? g/mol";
                 newUList2.appendChild(newList3);
                 newUList2.appendChild(newList4);
             newCard2.appendChild(newUList2);
                }
            newColumn2.appendChild(newCard2);
        newGrid2.appendChild(newColumn2);
    moleculeContainer.appendChild(newGrid2);
    }
};
populate();
        $("#alphabetical").click(function(){
            var j=1;
            for(k=0;k<molecules.length-2;k++){
                if(molecules[k].name>molecules[j].name){
                    var temp=molecules[k];
                    molecules[k]=molecules[j];
                    molecules[j]=temp;
                    k=-1;
                    j=0;
                }
                j++;
            }

            var container=document.getElementById("card-container").innerHTML="";
            var moleculeContainer=document.getElementById("molecule-container").innerHTML="";
            populate();
        });

        $("#molarMass").click(function(){
            var j=1;
            for(k=0;k<molecules.length-2;k++){
                if(molecules[k].mass>molecules[j].mass){
                    var temp=molecules[k];
                    molecules[k]=molecules[j];
                    molecules[j]=temp;
                    k=-1;
                    j=0;
                }
                j++;
            }

            var container=document.getElementById("card-container").innerHTML="";
            var moleculeContainer=document.getElementById("molecule-container").innerHTML="";
            populate();
        });

        $("#moleculeSize").click(function(){
                    var j=1;
                    for(k=0;k<molecules.length-2;k++){
                        if(molecules[k].recipe.length>molecules[j].recipe.length){
                            var temp=molecules[k];
                            molecules[k]=molecules[j];
                            molecules[j]=temp;
                            k=-1;
                            j=0;
                        }
                        j++;
                    }

                    var container=document.getElementById("card-container").innerHTML="";
                    var moleculeContainer=document.getElementById("molecule-container").innerHTML="";
                    populate();
                });

});