function displaydata(data){
    u1.value+=data
}
function allclear(){
    u1.value=""
}
function equal(){
    u1.value=eval(u1.value)
}
function backspace(){
    data=u1.value
    u1.value=data.slice(0,-1)
}