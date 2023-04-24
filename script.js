
function calculateAge(){
    let date = +document.getElementById('date').value;
    let month = +document.getElementById('month').value;
    let year = +document.getElementById('year').value;
    console.log(date,month,year)
    if((date < 1 || date > 31) || (month < 1 || month > 12) || (year < 1000 || year > 9999)){
        document.getElementById('result').innerHTML = "Please Enter valide date , month and year";
        document.getElementById('result').style = "color:red;"
        return 
        
    }
    let currdate = new Date();
    let currDay = currdate.getDate();
    let currMonth = currdate.getMonth()+1;
    let currYear = currdate.getFullYear();
    let resultDay = currDay - date;
    let resultMonth = currMonth- month;
    let resultYear = currYear - year;
    if(resultDay < 0){
        resultMonth = currMonth - 1;
        currDay = date;
    }
    console.log(resultMonth)
    if(resultMonth < 0){
        resultYear = resultYear - 1;
        resultMonth =  currMonth + (resultMonth*-1+1);
    }
    document.getElementById('result').innerHTML = `Your age is ${resultYear} Years ${resultMonth} Month ${resultDay} Days`;
    document.getElementById('result').style = "color: rgb(79, 79, 245);"
}