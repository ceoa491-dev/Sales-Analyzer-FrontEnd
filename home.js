window.onload=function(){
    let name=localStorage.getItem("name");
    document.getElementById("ac").addEventListener("click",function(e){
        e.preventDefault();
        document.getElementById("namel").innerText=name;
        document.getElementById("namel").style.display="flex";
    })
}