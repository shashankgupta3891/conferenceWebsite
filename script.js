// const nav_items_ul=document.getElementsByClassName('nav_items')[0].children


// console.log(nav_items_ul)
const pathName = window.location.pathname

if (pathName.includes('committee')) {
    document.getElementById("committee").className += 'active '


} else if (pathName.includes('topic')) {
    document.getElementById("topic").className += 'active '

} else if (pathName.includes('dates')) {
    document.getElementById("dates").className += 'active '

} else if (pathName.includes('payment')) {
    document.getElementById("payment").className += 'active '

} else if (pathName.includes('submission')) {
    document.getElementById("submission").className += 'active '

} else if (pathName.includes('organization')) {
    document.getElementById("organization").className += 'active '

} else if (pathName.includes('publication')) {
    document.getElementById("publication").className += 'active '

} else {
    document.getElementById("home").className += 'active '

}





console.log(window.location.pathname)


// document.getElementsByClassName('nav_items')[0].children[0].children[0].classList