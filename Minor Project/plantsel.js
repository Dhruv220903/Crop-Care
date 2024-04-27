const crop=document.querySelector('#crop');
const img=document.querySelector("#img");
const title=document.querySelector("h1");
const text=document.querySelector('#text');

const pagetext={
    maize:{
        variety:'Maize',
        image:'./Assets/Jowar.jpg',
        text:'Depart:',

            
    }
};
function changeText(){
    const cropval=crop.value;
    
    text.innerHTML=pagetext[cropval].text;
    img.src=pagetext[cropval].image;
    title.innerText=`${pagetext[cropval].variety} varieties`;
}

