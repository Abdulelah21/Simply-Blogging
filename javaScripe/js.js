function loginvalidate() {
    var vaild = true;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || username == null) {
        vaild = false;
        document.getElementById("errUsername").innerHTML = "enter your username please";
        document.getElementById("errUsername").style.display = "inline";

    } else {
        document.getElementById("errUsername").innerHTML = "";
        document.getElementById("errUsername").style.display = "none";
    }
    if (password == "" || password == null) {
        vaild = false;
        document.getElementById("errPassword").innerHTML = "enter your password please";
        document.getElementById("errPassword").style.display = "inline";
        return false;
    } else {
        document.getElementById("errPassword").innerHTML = "";
        document.getElementById("errPassword").style.display = "none";
    }
    //--------------------

    if (username != "admin" && username != null) {
        vaild = false;
        document.getElementById("errUsername").innerHTML = "Your username is wronge please try agen";
        document.getElementById("errUsername").style.display = "inline";
    } else {
        document.getElementById("errUsername").innerHTML = "";
        document.getElementById("errUsername").style.display = "none";
    }





    if (password != "1221" && password != null) {
        vaild = false;
        document.getElementById("errPassword").innerHTML = "Your password is wronge please try agen";
        document.getElementById("errPassword").style.display = "inline";
        return false;
    } else {
        document.getElementById("errPassword").innerHTML = "";
        document.getElementById("errPassword").style.display = "none";
    }



    if (vaild == false) {
        return false;
    }
    else if (username == "admin" && password == "1221") {
        window.location.href = "admin.html";
        return true;

    }
}
//--------------------------------------------------------------



function newPoste() {

    const localStorageContent = localStorage.getItem('title');
    const localStorageContent1 = localStorage.getItem('description');

    //get data from user  
    let title1 = document.getElementById("title").value;
    var desc1 = document.getElementById("desc").value;

    if(localStorageContent === null && localStorageContent1===null){
        title = [];
        description=[];
    }else{
        title = JSON.parse(localStorageContent);
        description = JSON.parse(localStorageContent1);
    }
    var newtitle = title1;
    var newdesc = desc1;
    
    title.unshift(newtitle)
    description.unshift(newdesc)

    localStorage.setItem('title', JSON.stringify(title))

    localStorage.setItem('description', JSON.stringify(description))

}




//if (typeof (Storage) !== "undefined") {
        
    //store
   // localStorage.setItem("title", titleArray[0]);
   // localStorage.setItem("description", descArray[0]);
//} else {
  //  console.log("thar is error in  your code :<")
//}

//

    
   // var descArray = [];

    //titleArray.unshift(title);
    //descArray.unshift(desc);




function viewPoste() {

        var arrayTitle = [];
        var arrayDesc = [];

    //for retref
    if (localStorage.getItem('title') != null && localStorage.getItem('description') != null) {
     
         
       arrayTitle +=  localStorage.getItem('title');
       arrayDesc +=  localStorage.getItem('description');

       document.getElementById('title-index').innerHTML = arrayTitle;
       document.getElementById('desc-index').innerHTML = arrayDesc;
       document.getElementById("newline").innerHTML = "<br>"
       
    
    console.log(arrayTitle)  
    console.log(arrayDesc)
    }

}

    
//  document.getElementById('title-index').innerHTML = localStorage.getItem('title'); 
//document.getElementById('desc-index').innerHTML = localStorage.getItem('description');
//
//document.getElementById('title-index').innerHTML = localStorage.key(0);


       //titleArray.unshift(title)
       // descArray.unshift(desc)








   //var titleArray = ["Saab", "Volvo", "BMW"];
  // console.log(titleArray[0]);

  // document.getElementById("title-index").innerHTML = titleArray[0];
