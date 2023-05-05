  const form = document.getElementById("input-form");
  let rownumber=1;
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const semester = document.getElementById('semester').value;
    const rollNo = document.getElementById('rollNo').value;
    const age = document.getElementById('age').value;
    const mark = document.getElementById('mark').value;
    const student = { name, fatherName, semester, rollNo, age,mark,};
    console.log(student);
    form.reset(); 
                  // if else condition
    let Result="";
if(mark>40){
  Result="Passed"
  // console.log(Result)
}
else{
  Result="Failed"
  // console.log(Result)
}
// This code is  used to dynamically create and modify the HTML table elements using JavaScript
    const table=document.getElementById('table')
    var row=table.insertRow()
    let del10=row.insertCell(0);
    let del1=row.insertCell(1);
    let del2=row.insertCell(2);
    let del3=row.insertCell(3);
    let del4=row.insertCell(4);
    let del5=row.insertCell(5);
    let del6=row.insertCell(6);
    let del7=row.insertCell(7);

    // This code is used to manipulate the HTML content of a webpage using JavaScript.
    del1.innerHTML=name;
    del2.innerHTML=fatherName;
    del3.innerHTML=semester;
    del4.innerHTML=rollNo;
    del5.innerHTML=age;
    del6.innerHTML=mark;
    del7.innerHTML=Result;
    del10.innerHTML=rownumber;


    
    // let rownumber=1;
  rownumber++;

  });


  




