document.getElementById("sub").addEventListener("click",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let ph=document.getElementById("ph").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    fetch("https://sales-analyzer-backend-production.up.railway.app/reg",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:name,
            ph:ph,
            email:email,
            pass:pass
        })
    }).then(res=>res.text())
    .then(data=>{
        console.log(data)
        alert("User Registered Successfully")
    })
    .catch(err=>{
        console.error(err)
        alert("Error Occured")
    })
})