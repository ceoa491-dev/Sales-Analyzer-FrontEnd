document.getElementById("lg").addEventListener("submit",function(e){
    e.preventDefault();
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    fetch("https://sales-analyzer-backend-production.up.railway.app/log",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            email:email,
            pass:pass
        })
        
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.status=="success"){
            console.log(data)
        alert("Logged Successfull")
        localStorage.setItem("email",data.email)
        localStorage.setItem("name",data.name)
        localStorage.setItem("ph",data.ph)
        window.location.href="home.html"
        }
        else{
            alert("Login Failed")
        }
    })
    .catch(err=>{
        console.error(err)
        alert("Error Ocurred")
    })
})