const body=document.querySelector("body");
const main=document.querySelector("main");
function changeTheme(theme){
   theme=theme==null?"theme1":theme;     
   body.className=theme;
   main.className=theme;
   localStorage.setItem('theme',theme);
}
function setTheme(){
    const theme=localStorage.getItem("theme");
    const radioButton=document.querySelector(`#${theme}`);
    radioButton?radioButton.checked=true:null;
    changeTheme(theme);
}
setTheme();