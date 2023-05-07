var btn=document.getElementById("btn");
var div2=document.getElementById("div2")
var table=document.createElement("table")
div2.append(table)
table.setAttribute("style",`border :1px solid black;border-collapse:collapse;height:50px;width:900px`)


var s_no=1;
table_head();
var flag=true;

var u_name=document.getElementById("u_name")
var bike_no=document.getElementById("bike_no")
var check_in=document.getElementById("check_in")
var check_out=document.getElementById("check_out")

u_name.addEventListener("input",function()
{
  var flag=document.getElementById("flag")
    flag.value="true"
  var letters = /^[A-Za-z]+$/;
  if(!(u_name.value.match(letters)))
  {
      var paran2=document.getElementById("namepara2")
      paran2.style.display="block"
      flag.value="false"
  }
  else{
    var paran2=document.getElementById("namepara2")
    paran2.style.display="none"
    flag.value="true"
  }

})
u_name.addEventListener("focusin",function(){
   var namepara=document.getElementById("namepara");
   namepara.style.display="none";

})

bike_no.addEventListener("focusin",function(){

  var bikepara=document.getElementById("bikepara");
  bikepara.style.display="none";

  if(u_name.value==``){
    var namepara=document.getElementById("namepara");
    namepara.style.display="block";
  }
})

check_in.addEventListener("focusin",function(){
  var inpara=document.getElementById("inpara");
  inpara.style.display="none";
  if(u_name.value==``){
    var namepara=document.getElementById("namepara");
    namepara.style.display="block";
  }
  if(bike_no.value==``){
    var bikepara=document.getElementById("bikepara");
    bikepara.style.display="block";
  }
})

check_out.addEventListener("focusin",function(){

   
     var outpara=document.getElementById("outpara");
     outpara.style.display="none";
  if(u_name.value==``){
    var namepara=document.getElementById("namepara");
    namepara.style.display="block";
  }
  if(bike_no.value==``){
    var bikepara=document.getElementById("bikepara");
    bikepara.style.display="block";
  }
  if(check_in.value==``){
    var inpara=document.getElementById("inpara");
    inpara.style.display="block";
  }

})


btn.addEventListener("click",function()
{
    var flag11=document.getElementById("flag")
    var a=flag11.value


    flag=check_detail();
   
  if(flag==true && a=="true")
  {
   
    var body=document.createElement("tbody")
    table.append(body)
    body.setAttribute("style",`height: 25px;`)
    var row2=document.createElement("tr")
    body.append(row2);

    
    var td1=document.createElement("td")
    row2.append(td1)
    td1.style.border="1px solid black";
    td1.textContent=s_no++

    var td2=document.createElement("td")
    row2.append(td2)
    td2.style.border="1px solid black";
    td2.textContent=u_name.value;

    var td3=document.createElement("td")
    row2.append(td3)
    td3.style.border="1px solid black";
    td3.textContent=bike_no.value

    var td4=document.createElement("td")
    row2.append(td4)
    td4.style.border="1px solid black";
    td4.textContent=check_in.value;

    var td5=document.createElement("td")
    row2.append(td5)
    td5.style.border="1px solid black";
    td5.textContent=check_out.value;


    clear();
  }
    
   

})



function clear()
{
    u_name.value='';
    bike_no.value='';
    check_in.value='';
    check_out.value='';
    
}

function table_head()
{
    var head=document.createElement("thead")
    table.append(head)
    head.setAttribute("style",`height: 40px;`)

    var row1=document.createElement("tr")
   head.append(row1)
   var th1=document.createElement("th")
   row1.append(th1)
   th1.style.border="1px solid black";
   th1.textContent="S.No"
   
   var th2=document.createElement("th")
   row1.append(th2)
   th2.style.border="1px solid black";
   th2.textContent="User Name"
   
   var th3=document.createElement("th")
   row1.append(th3)
   th3.style.border="1px solid black";
   th3.textContent="Bike No"
   
   var th4=document.createElement("th")
   row1.append(th4)
   th4.style.border="1px solid black";
   th4.textContent="Check In"
   
   var th5=document.createElement("th")
   row1.append(th5)
   th5.style.border="1px solid black";
   th5.textContent="Check Out"
   
}


function check_detail(){
    var flag=true;
   
    if(u_name.value==``){
      var namepara=document.getElementById("namepara");
      namepara.style.display="block";
      var paran2=document.getElementById("namepara2")
      paran2.style.display="none"
      flag=false;
    }
    if(bike_no.value==``){
      var bikepara=document.getElementById("bikepara");
      bikepara.style.display="block";
      flag= false;
    }
    if(check_in.value==``){
      var inpara=document.getElementById("inpara");
      inpara.style.display="block";
      flag= false;
    }
    if(check_out.value==``){
      var outpara=document.getElementById("outpara");
      outpara.style.display="block";
      flag= false;
    }
    return flag;

}