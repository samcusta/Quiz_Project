let email = document.getElementById('email');
let password = document.getElementById('password');
let btnLogin = document.getElementById('btnLogin');
let user = [];

function loginUser() {
    let studentStorage = localStorage.getItem('studentUsers');
    let getStudent = JSON.parse(studentStorage);

    if(!email.value) {
        alert ('Email Not Provided');
        return;
    }else if(!password.value) {
        alert ('Password Not Provided');
        return;
    }
    let student = getStudent.filter((studentUser) => {
        return studentUser.email == email.value && studentUser.password == password.value;
    });

    if(!student.length) {
        alert('The email and password you supplied are not authorised to use the system. Please try again');
        return;
    }else {
        alert('Welcome ' + student[0].fName);
        window.location.href = 'welcome.html'
    }

    let obj = {
       'fName': student[0].fName, 'email': student[0].email, 'phone': student[0].phone, 'address': student[0].address,'age': student[0].age, 'gender': student[0].gender
    }
    user.push(obj);
    localStorage.setItem("users", JSON.stringify(user));
}

btnLogin.onclick = (e) => {
    e.preventDefault();
    loginUser()
}