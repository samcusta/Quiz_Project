var btnSubmit = document.getElementById('btn-submit')
var btnSubmitSchool = document.getElementById('btnSubmitSchool')
var btnShowSchoolReg = document.getElementById('btn-showSchoolReg')
var btnShowStudentReg = document.getElementById('btn-showStudentReg')
var schoolName = document.getElementById('schoolName')
var fName = document.getElementById('fName')
var address = document.getElementById('address')
var phone = document.getElementById('phone')
var email = document.getElementById('email')
var age = document.getElementById('age')
var gender = document.getElementById('gender')
var password = document.getElementById('password')
var schoolName1 = document.getElementById('schoolName1')
var schoolEmail = document.getElementById('schoolEmail')
var schoolAddress = document.getElementById('schoolAddress')
var schoolPhone = document.getElementById('schoolPhone')
var tbody = document.getElementById('tbody')
var schoolForm = document.getElementById('schoolForm')
var StudentForm = document.getElementById('StudentForm')
var closeSchoolForm = document.getElementById('closeSchoolForm')
var closeStudentForm = document.getElementById('closeStudentForm')
var date = document.getElementById('date')
var tbody = document.getElementById('tbody')

const deadline = new Date("2023-01-23");

date.innerHTML = deadline;

btnShowSchoolReg.onclick = () => {
   schoolForm.classList.add('show')
}


btnShowStudentReg.onclick = () => {
   StudentForm.classList.add('show')
}

closeSchoolForm.onclick = () => {
   schoolForm.classList.remove('show')
}
closeStudentForm.onclick = () => {
   StudentForm.classList.remove('show')
}

fetch('/data.json').then((res) => res.json()).then((data) => {
   let schoolData = data.schools;
   console.log(schoolData)
   let row;
   let sortSchool =  schoolData.sort((a, b) => {
      return b.year - a.year;
   });
  sortSchool.forEach ((schoolData) => {
   row += `<tr>
   <td>${schoolData.schoolName}</td>
   <td>${schoolData.email}</td>
   <td>${schoolData.address}</td>
   <td>${schoolData.phone}</td>
   <td>${schoolData.year}</td>
   </tr>`
  })
  tbody.innerHTML = row;
});

class schools {
   constructor (schoolName1, schoolEmail, schoolAddress, schoolPhone) {
      this.schoolName1 = schoolName1;
      this.schoolEmail = schoolEmail;
      this.schoolAddress = schoolAddress;
      this.schoolPhone = schoolPhone;
   }
}

let schoolList = localStorage.getItem('registeredSchools');
let schoolArr = [];

function registerSchool() {
   let currentDate = new Date();
   if(currentDate > deadline) {
      confirm("Registration Ended. Have you paid the penalty fee of N5,000?");
      return;
   }else if (!schoolName1.value && !schoolEmail.value && !schoolAddress.value && !schoolPhone.value){
      alert("Please, Fill all the Required Information");
      return;
   }else {
      if(schoolList) {
         schoolArr = JSON.parse(schoolList);
      }
      alert('School Registered Succesfully');
   }
   const obj = new schools (schoolName1.value, schoolEmail.value, schoolAddress.value, schoolPhone.value);
   schoolArr.push(obj);
   localStorage.setItem("registeredSchools", JSON.stringify(schoolArr));
   console.log(schoolArr)
}

btnSubmitSchool.onclick = (e)=> {
   e.preventDefault()
   registerSchool()
}

class studentUser {
   constructor (schoolName, fName, address, phone, email, age, gender, password) {
      this.schoolName = schoolName;
      this.fName = fName;
      this.address = address;
      this.phone = phone;
      this.email = email;
      this.age = age;
      this.gender = gender;
      this.password = password;
   }
}

let studentUsersList = localStorage.getItem('studentUsers');
let studentUserArr = [];

function registerStudents () {
   if (!schoolName.value && !fName.value && !address.value && !phone.value && !email.value && !age.value && !gender.value && !password.value ) {
      alert ("Please, Fill all the Required Information");
      return;
   }else {
      if (studentUsersList) {
         studentUserArr = JSON.parse(studentUsersList);
      }
      alert ("Student Registration Successful");
   }
   const obj = new studentUser (schoolName.value, fName.value, address.value, phone.value, email.value, age.value, gender.value, password.value);
   studentUserArr.push(obj);
   localStorage.setItem('studentUsers', JSON.stringify(studentUserArr))
   console.log(studentUserArr)
} 

btnSubmit.onclick = function(e){
   e.preventDefault()
   registerStudents()
}

function schoolOption(){
   let schoolStorage = localStorage.getItem("registeredSchools");
   if(schoolStorage !=null){
     listOfSchools = JSON.parse(schoolStorage);
      }
      let option;
      for(var i = 0; i < listOfSchools.length; i++){
         console.log(listOfSchools[i].schoolName1)
         option += `
         <option value="">select...</option>
         <option value="">${listOfSchools[i].schoolName1}</option>`
      }
      schoolName.innerHTML = option;
   }

schoolOption();




