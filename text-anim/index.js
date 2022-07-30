const target = document.getElementById('target');
let array=["developpeur", "Photographe","créatif"];
let wordIndex = 0;
let letterIndex = 0;

const createLatter =()=>{
    const letter = document.createElement("span");
    target.appendChild(letter);
    letter.textContent=array[wordIndex][letterIndex];

    setTimeout(()=>{
        letter.remove();
    },2800)
};


const loop = ()=>{
    setTimeout(()=>{
        if(wordIndex>=array.length){
            letterIndex=0;
            wordIndex=0;
            loop();
        }
        else if(letterIndex<array[wordIndex].length){
            createLatter();
            letterIndex++;
            loop();
        }else{
            letterIndex=0;
            wordIndex++;
            
            setTimeout(()=>{
                loop();
            },4000);
            
        }

    },50);
}

loop();