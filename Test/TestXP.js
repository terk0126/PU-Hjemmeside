function setXP() {
    const xp = parseInt(document.getElementById("xp").value)
    const filled = document.getElementById("pbar-filled")
    const H1 = document.getElementById("HEJ")

    console.log(filled.style.width)
    console.log(Math.floor(Math.log2(xp)));


    const xpAbove = 2**(Math.floor(Math.log2(xp))+1)
    const xpBelow = 2**(Math.floor(Math.log2(xp)))




    console.log(xp-xpBelow);
    console.log(xpAbove-xpBelow);
    console.log((xp-xpBelow)/(xpAbove-xpBelow));

    

    H1.innerText = Math.floor(Math.log2(xp))

    

    //var filledTest = parseInt(filled.style.width.replace("px",""))
    
    filled.style.width = `${246*(xp-xpBelow)/(xpAbove-xpBelow)}px`
  }