let coinTainer = document.querySelector('.coin-tainer');
let flipBtn = document.getElementById("random");
let heads = document.getElementById("heads");
let tails = document.getElementById("tails");
let result = document.querySelector('.result');
let coin = document.querySelector('.coin')

async function flipCoin() {
    let rounded;

    result.innerHTML = "Fliping..."
    coinTainer.style.transform = "scale(10) rotate(180deg)"
    flipBtn.disabled = true;

    try{
        const fliping = await new Promise((res, rej) =>{
            setTimeout( () => {
            rounded = Math.round(Math.random());
            if(rounded === 1){
                res("Heads!")
            } else if(rounded === 0){
                res("Tails!")
            } else{
                rej("Ocurrio un error, intenta de nuevo")
            }
        }, 2000);
        })

        if(fliping === "Heads!"){
            heads.style.opacity = "1";
            heads.style.visibility = "visible";
            tails.style.opacity = "0";
            tails.style.visibility = "hidden";
        }else{
            heads.style.opacity = "0";
            heads.style.visibility = "hidden";
            tails.style.opacity = "1";
            tails.style.visibility = "visible";
        }

        coinTainer.style.transform = 'scale(1)';
        result.innerHTML = fliping;
        flipBtn.disabled = false;
    }
    catch{
        alert("Ocurrio un error, intenta de nuevo");
        coin.style.transform = 'scale(1)';
        result.innerHTML = "Error!"; 
        flipBtn.disabled = false;
    }
    finally{
        coin.style.transform = 'scale(1)';
        flipBtn.disabled = false;
    }
}

flipBtn.addEventListener('click', flipCoin);
coin.addEventListener('click', flipCoin);