import words from './word.js'

const wordText=document.querySelector(".word")  //selects the 1st element links html to java
const hintText=document.querySelector(".hint span")
const refreshbtn=document.querySelector(".refresh-word")
const checkBtn=document.querySelector(".check-word")
const inputField=document.querySelector("input")
const Timertext=document.querySelector(".time span b")

let selectedword,timer;

const initTime=maxtime=>{

    clearInterval(timer);

    timer=setInterval(()=>{
        if(maxtime>0){
            maxtime--;
            Timertext.innerHTML=maxtime;
            return;
        }

        alert(`sorry! time is up. ${selectedword} was the correct word`)
        clearInterval(timer);
        initGame()
    },1000)
}


const initGame=()=>{

    initTime(30)
    const randomobj =words[Math.floor(Math.random()*words.length)] ;//this is for selecting random word
     selectedword=randomobj.word;
    const hint=randomobj.hint;


    const wordArray=selectedword.split("")

    for(let i=wordArray.length-1;i>0;i--){ //this is for randomising word letters

        let j=Math.floor(Math.random()*(i+1));

        let temp=wordArray[i]
        wordArray[i]=wordArray[j]
        wordArray[j]=temp

    }

    wordText.innerHTML=wordArray.join("")
    hintText.innerHTML=hint;

    console.log(randomobj)
    console.log(selectedword)
    console.log(hint)
    console.log(wordArray);
}
const checkWord=()=>
    {
    let userWord=inputField.value.toLowerCase();
    if (!userWord){ return alert ("please enter a word")}
    if (userWord!== selectedword) { return alert(`opps! ${userWord} is incorect`) 
    }
    alert(`conguratulations! ${userWord}  is correct`)
    initGame()
};

checkBtn.addEventListener("click",checkWord)//first const anna then in instruct karta 1sy click hai na uska mtlb mouse click then checkword mtlb jo fun ku call karna hai 
refreshbtn.addEventListener("click",initGame)


initGame()