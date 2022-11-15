var tbody = document.getElementById('tbody');
var viewStudents = document.getElementById('viewStudents');

let listOfStudents = [];


function displayRegisteredStudents(){
    let studentStorage = localStorage.getItem('students');
    if(studentStorage!=null){
       listOfStudents = JSON.parse(studentStorage)
    }
    let row = ""
 
    for(var i = 0; i < listOfStudents.length; i++){
       row += `<tr>
       <td>${listOfStudents[i]['schoolName']}</td>
       <td>${listOfStudents[i]['fName']}</td>
       <td>${listOfStudents[i]['address']}</td>
       <td>${listOfStudents[i]['phone']}</td>
       <td>${listOfStudents[i]['age']}</td>
       <td>${listOfStudents[i]['gender']}</td>
       <td>${listOfStudents[i]['country']}</td>
   </tr>`
    }
    tbody.innerHTML = row;
 }

 viewStudents.onclick = function(){
    displayRegisteredStudents();
}
