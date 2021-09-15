const cuadrados = document.querySelectorAll(".cuadrado");
const display = document.getElementById('display');
const roll = document.getElementById('roll');
const resultH2 = document.getElementById('resultH2')
const diceCont = document.getElementById('diceCont')
const addDices = document.getElementById('addDices')
const bars = document.querySelectorAll('.bar')
const body = document.querySelector('body')
const getInfo = document.getElementById('info')
const closeInfo = document.getElementById('close-info')


getInfo.addEventListener('click', ()=>{
    document.getElementById('help').classList.toggle('visible')
})
closeInfo.addEventListener('click', ()=>{
    document.getElementById('help').classList.toggle('visible')
})



diceCont.classList.toggle('visible')
bars.forEach((e)=>{
    e.classList.toggle('close')
})

let dadosArray = [];
let resultDados = [];
let resultado = 0;
let rolling = false;

addDices.addEventListener('click', ()=>{
    diceCont.classList.toggle('visible')
    bars.forEach((e)=>{
        e.classList.toggle('close')
    })
})

cuadrados.forEach((e)=>{
    e.addEventListener('click', ()=>{
        dadosArray.push(e.id)
        const content = e.id;

        const newCuadrado = document.createElement("div")
        const newCuadradoText = document.createElement("h4")

        newCuadrado.addEventListener('click', (e)=>{
            if(rolling === false){
                display.removeChild(newCuadrado)
                dadosElegidos = []
                updateDados();
                resultDados = []

            }

        })

        newCuadrado.classList.add(e.classList[0])
        newCuadrado.classList.add(e.classList[1])
        newCuadrado.classList.add("dado")

        newCuadradoText.innerHTML = `1d${content}`;
        newCuadrado.appendChild(newCuadradoText)
        newCuadrado.value = content;
        display.appendChild(newCuadrado)
    })
})

roll.addEventListener('click',()=>{

    if(rolling === false){
        rolling = true;
        setTimeout(()=>{
            rolling = false;
        },400)
        resultDados = []
        const dadosElegidos = document.querySelectorAll('.dado');
        rollAnimation();
        for(let i =0; i<dadosElegidos.length; i++){
            const numeroRandom = Math.floor(Math.random()* dadosArray[i] + 1 )
            resultDados.push(numeroRandom)   
        }
        setTimeout(()=>{
            showResult(dadosElegidos);
            showTotal();
        },400)
    
    }


})

function showResult(dados){
    for(let i =0; i<dados.length; i++){
        dados[i].classList.remove('crit')
        dados[i].firstChild.innerHTML = resultDados[i];
        if(dados[i].value === dados[i].firstChild.innerHTML){
            dados[i].classList.add('crit')
        }
    }
}

function updateDados(){
    const dadosElegidos = document.querySelectorAll('.dado');
    dadosArray = []

    dadosElegidos.forEach((e)=>{
        dadosArray.push(e.value)
    })
}

function rollAnimation(){
    const dadosElegidos = document.querySelectorAll('.dado');
    dadosElegidos.forEach((e)=>{
        e.classList.toggle('roll')
    })
}

function showTotal(){
    for(let i =0; i<resultDados.length;i++){
        resultado +=resultDados[i];

    }
    resultH2.innerText = resultado;
    resultado = 0;

}


