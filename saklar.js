function nyala(){
   
    
    let toggle1 = document.getElementById("default-toggle1")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")

    let lampunyala1 = document.getElementById("lampunyala1")
    let lampunyala2 = document.getElementById("lampunyala2")
    let lampunyala3 = document.getElementById("lampunyala3") 
    //let fungsinya biar bisa ngubah nilai dari variabel, contohnya di fungsi if

    
    if (toggle1.checked){
        lampunyala1.src="assets/images/on.gif"
    }
    else{
        lampunyala1.src ="assets/images/off.gif"
    }

    if (toggle2.checked){
        lampunyala2.src="assets/images/on.gif"
    }
    else{
        lampunyala2.src ="assets/images/off.gif"
    }

    if (toggle3.checked){
        lampunyala3.src="assets/images/on.gif"
    }
    else{
        lampunyala3.src ="assets/images/off.gif"
    }
   
    

}