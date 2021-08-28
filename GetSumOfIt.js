/* wait what is this
 * is this 
 * wait....
 * woah
 * i failed
 * i..i suck
 */
//ima let y'all know if y'all lookin at here seeing how i code i'm still a mediocre at these and i'm self taught at programming at javascript.
"use strict";
let codeText = document.getElementById("code");
let randomText = document.getElementById("random");
let Body = document.getElementById("body");
let mainDiv = document.getElementById("mainDiv");
let historyDiv = document.getElementById("historyDiv");
let historyTxt = document.getElementById("historyText");
let historyScr = document.getElementById("historyScroll");
let apic = document.getElementsByClassName("n/a");
let hApic = document.getElementById("ahegaoPics");
let Ipd = setInterval("update()", 100);
let bgNum = 0;
let gae = document.getElementById("banner");
let meta = document.getElementById("mobile");
let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let hNum = 1;
let fos = false;
let ahegaoPics = 36;

//generates the selection pics
for(var i=1;i<=ahegaoPics;i++){
    hApic.innerHTML += `<a onmouseup='openAhegao(${i})' ><img class='n/a' src='pics/${i}.jpg' alt='ahegao${i}'></a>`;
    if(i == ahegaoPics){
        hApic.innerHTML += '<br>'
    }
}

if(isMobile) {
    meta.content = "width=device-width, initial-scale=1.0";
    mainDiv.style.marginLeft = "5vh";
    mainDiv.style.marginRight = "5vh";
    historyDiv.style.marginLeft = "5vh";
    historyDiv.style.marginRight = "5vh";
    gae.style.height ="10vh";
    for(var na=0;na<apic.length;){
        apic[na].classList.add("mobileSize");
        na++;
    }
} else {
    for(na=0;na<apic.length;){
        apic[na].classList.add("normalSize");
        na++;
    }
    mainDiv.style.width = "65vh";
    historyDiv.style.width = "65vh";
    historyScr.style.width = "65vh";
}

document.addEventListener("keydown", function(e) {
    if(fos){
        if(e.keyCode == 13) {
            submit();
        }
    }
})
//change the background color :D
document.addEventListener("keydown", function(e) {
    if(e.keyCode == 66) {
        changeColor();
    }
})

//submit the code :)
function submit() {
    if(codeText.value != ""){
        historyTxt.innerHTML += `${hNum}. <a title="reopen?" class="aColor" onclick="window.open('https://www.nhentai.net/g/${codeText.value}')">${codeText.value}</a><br>`;
        window.open(`https://www.nhentai.net/g/${codeText.value}`);
        hNum++;
    } else {
        alert('must provide a code!');
    }
    codeText.value = "";
}

//Updates every 1ms
function update() 
{
    if(codeText.value != "") {
        codeText.style.width = "30vh";
        codeText.classList.remove("inputTextAnim");
    } else {
        codeText.style.width = defaultStatus;
        codeText.classList.add("inputTextAnim");
    }
    //Thanks to the people who fuckin' read this i'm having a stroke putting some random
    //messages on specific codes.
    switch(codeText.value) {
        default: 
                randomText.innerHTML = " ";
            break;

        case '228922': 
        randomText.innerHTML = "you got some good taste there UmU";
            break;

        case '177013': 
        randomText.innerHTML = "Really?";
            break;
            
         case '254877': 
        randomText.innerHTML = "ntr? wow you like these?";
            break;

         case '4299': 
        randomText.innerHTML = "You're such a devil";
            break;

         case '239393': 
         randomText.innerHTML = "ntr? wow you like these?";
            break;

         case '167167': 
         randomText.innerHTML = "ntr? wow you like these?";
            break;

         case '305315': 
         randomText.innerHTML = "ntr? wow you like these?";
            break;

         case '220348': 
         randomText.innerHTML = "ntr? wow you like these?";
            break;

         case '276347': 
         randomText.innerHTML = "ntr? wow you like these?";
            break;
         case '263943': 
         randomText.innerHTML = "ntr? wow you like these?";
            break;

         case '196264': 
         randomText.innerHTML = "ntr? wow you like these?";
            break;
         case '230708': 
         randomText.innerHTML = "ntr? wow you like these?";
            break;
            
         case '270174': 
         randomText.innerHTML = "ntr? wow you like these?";
            break;

         case '2020': 
         randomText.innerHTML = "kinda a worst year also its a yaoi";
            break;

         case '1': 
         randomText.innerHTML = "the beginning";
            break;

         case '2': 
         randomText.innerHTML = "tags: rape";
            break;

         case '3': 
         randomText.innerHTML = "the useless pink haired from naruto";
            break;

        case '310999': 
         randomText.innerHTML = "Lolicon!";
            break;

        case '4': 
         randomText.innerHTML = "Naruto's wife";
            break;

        case '5': 
         randomText.innerHTML = "ｅｖａｎｇｅｌｉｏｎ";
            break;

        case '6': 
         randomText.innerHTML = "ｅｖａｎｇｅｌｉｏｎ";
            break;

        case '7': 
         randomText.innerHTML = "another ｅｖａｎｇｅｌｉｏｎ";
            break;

        case '8': 
         randomText.innerHTML = "ah Lolicon you loliphile";
            break;
        
        case '9': 
         randomText.innerHTML = "More<br>ｅｖａｎｇｅｌｉｏｎ";
            break;

        case '10': 
         randomText.innerHTML = "Aight im never doing this<br>More<br>ｅｖａｎｇｅｌｉｏｎ";
            break;   

        case '278407': 
         randomText.innerHTML = "UmU Astolfo<br>Very Attractive trap";
            break;  

        case '306950': 
         randomText.innerHTML = "kOnoSubArAshi";
            break;
        
        case '191049': 
         randomText.innerHTML = "hAi kAzumA desU";
            break;  

        case '191851': 
         randomText.innerHTML = "BakuRetsu";
            break; 

        case '283070': 
         randomText.innerHTML = "kimetsu? yaiba???";
            break; 

        case '300000': 
         randomText.innerHTML = "n t r  y e s";
            break; 

        case '315830': 
         randomText.innerHTML = "Ben 10";
            break; 
    }
}

//bg changer
function changeColor() {
    bgNum++;
    switch(bgNum){
        case 1:
            Body.style.backgroundImage = "linear-gradient(orange, yellow, white)";
            break;
        case 2:
            Body.style.backgroundImage = "linear-gradient(violet, pink, white)";
            break;
        case 3:
            Body.style.backgroundImage = "linear-gradient(black, gray, white)";
            break;
        case 4:
            Body.style.backgroundImage = "linear-gradient(red, green, yellow, blue, pink, magenta, violet)";
            gae.src = "pics/banner 2.png";
            break;
        case 5:
            bgNum = 0;
            Body.style.backgroundImage = "linear-gradient(red, pink, white)";
            gae.src = "pics/banner.png";
            break;    
    }
}

//random code generator
function randomGen(){
    num = Math.floor(Math.random() * 315950) + 1;
    codeText.value = num;
    submit();
}

//checks if the history is blank
function dl(){
    if(historyTxt.innerText != ""){
        download('codeList.txt',historyTxt.innerText);
    } else {
        alert('cannot download a blank history :(');
    }
} 

//download the codes as text
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

//ahegao pics, well few of it arent ahegao so fuck it im just gonna continue doing this i dont know why i did it in the first place
function openAhegao(num){
    switch(num){
        case 0: window.open("https://nhentai.net"); break;
        case 1: window.open("https://nhentai.net/g/173936"); break;
        case 2: window.open("https://nhentai.net/g/33260"); break;
        case 3: window.open("https://nhentai.net/g/106186"); break;
        case 4: window.open("https://nhentai.net/g/65712"); break;
        case 5: window.open("https://nhentai.net/g/121916"); break;
        case 6: window.open("https://nhentai.net/g/144529"); break;
        case 7: window.open("https://nhentai.net/g/139808"); break;
        case 8: window.open("https://nhentai.net/g/162677"); break;
        case 9: window.open("https://nhentai.net/g/73111"); break;
        case 10: window.open("https://nhentai.net/g/86895"); break;
        case 11: window.open("https://nhentai.net/g/177810"); break;
        case 12: window.open("https://nhentai.net/g/89468"); break;
        case 13: window.open("https://nhentai.net/g/242195"); break;
        case 14: window.open("https://nhentai.net/g/221570"); break;
        case 15: window.open("https://nhentai.net/g/33734"); break;
        case 16: window.open("https://nhentai.net/g/191281"); break;
        case 17: window.open("https://nhentai.net/g/33683"); break;
        case 18: window.open("https://nhentai.net/g/133611"); break;
        case 19: window.open("https://nhentai.net/g/56236"); break;
        case 20: window.open("https://nhentai.net/g/167001"); break;
        case 21: window.open("https://nhentai.net/g/124326"); break;
        case 22: window.open("https://nhentai.net/g/315830"); break;
        case 23: window.open("https://nhentai.net/g/183704"); break;
        case 24: window.open("https://nhentai.net/g/13675"); break;
        case 25: window.open("https://nhentai.net/g/224046"); break;
        case 26: window.open("https://nhentai.net/g/110655"); break;
        case 27: window.open("https://nhentai.net/g/50092"); break;
        case 28: window.open("https://nhentai.net/g/173516"); break;
        case 29: window.open("https://nhentai.net/g/110253"); break;
        case 30: window.open("https://nhentai.net/g/180386"); break;
        case 31: window.open("https://nhentai.net/g/154013"); break;
        case 32: window.open("https://nhentai.net/g/284829"); break;
        case 33: window.open("https://nhentai.net/g/254601"); break;
        case 34: window.open("https://nhentai.net/g/156494"); break;
        case 35: window.open("https://nhentai.net/g/256068"); break;
        case 36: window.open("https://nhentai.net/g/61418"); break;
    }
}