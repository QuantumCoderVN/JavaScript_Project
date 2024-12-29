function calculateLove (){
    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if(name1 === "" || name2 === ""){
        alert("Please enter both names");
        return;
    }
    else {
        const loveScore = Math.floor(Math.random() * 101);
        const result = document.getElementById("result");

        result.innerHTML = `The love score between ${name1} and ${name2} is ${loveScore}%`;
        if (loveScore > 80){
            result.style.color = "green";
            result.innerHTML += "<br> You are a perfect match!";
        }
        else if (loveScore > 50){
            result.style.color = "yellow";
            result.innerHTML += "<br> You are a good match!";
        }
        else {
            result.style.color = "red";
            result.innerHTML += "<br> You are not a good match!";
        }

    }

}