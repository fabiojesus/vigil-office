function displayLogin(){
    if(localStorage.getItem("token")){
        console.log(localStorage.getItem("token"))
    }
    else{
        console.log("no token here");
    }
}