const nav_items_ul=document.getElementsByClassName('nav_items')[0].children


console.log(nav_items_ul)
const pathName=window.location.pathname

if(pathName.includes('committee')){
    document.getElementById("committee").className+='active '
    
    
}
else if(pathName.includes('topic')){
    console.log(window.location.pathname)   
    document.getElementById("topic").className+='active '

}else if(pathName.includes('dates')){
    console.log(window.location.pathname)   
    document.getElementById("dates").className+='active '

}else if(pathName.includes('call-for-papers')){
    console.log(window.location.pathname)   
    document.getElementById("call-for-papers").className+='active '

}else if(pathName.includes('submission')){
    console.log(window.location.pathname)   
    document.getElementById("submission").className+='active '

}else if(pathName.includes('organization')){
    console.log(window.location.pathname)   
    document.getElementById("organization").className+='active '

}else if(pathName.includes('publication')){
    console.log(window.location.pathname)  
    document.getElementById("publication").className+='active '

}else{
    console.log(window.location.pathname)
    document.getElementById("home").className+='active '

}





console.log(window.location.pathname)


// document.getElementsByClassName('nav_items')[0].children[0].children[0].classList