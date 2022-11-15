var grid = document.getElementById('grid');
var btnQuiz = document.getElementById('btnQuiz');

btnQuiz.onclick = () => {
    window.location.href = "quiz.html";
}

function displayStudent(){
    let row = "";
    let studentStorage = localStorage.getItem('users');
    let getStudent = JSON.parse(studentStorage);

    let student = getStudent.filter((studentUser) => {
        return studentUser.fName && studentUser.email && studentUser.phone && studentUser.address && studentUser.age && studentUser.gender;
    });
    if(getStudent!=null){
        row = ` <p><strong>Full Name:</strong> ${student[0].fName}</p>
            <p><strong>Email:</strong> ${student[0].email}</p>
            <p><strong>Phone Number:</strong> ${student[0].phone}</p>
            <p><strong>Address:</strong> ${student[0].address}</p>
            <p><strong>Age:</strong> ${student[0].age}</p>
            <p><strong>Gender:</strong> ${student[0].gender}</p>`;
    }
    
    grid.innerHTML += row;
}

displayStudent();