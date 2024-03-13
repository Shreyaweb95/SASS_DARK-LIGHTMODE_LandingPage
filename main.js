const darkMode= document.getElementById('DarkMode');
const headerimg= document.getElementById('header-img');
const imgs= document.querySelectorAll('img');
const social_media_icons=document.querySelector('#footer').querySelectorAll('.fab');
console.log(social_media_icons);
darkMode.addEventListener('change',(e)=>{
//     if(e.target.checked){
//         headerimg.style.filter=`invert(100)`;
//         imgs.forEach(function(img){
//             img.style.filter=`invert(100)`;
//         });
//         social_media_icons.forEach(function(img){
//             img.style.filter=`invert(100)`;
//         });
//     }
//     else{
//         headerimg.style.filter=`invert(0)`
    
//     imgs.forEach(function(img){
//         img.style.filter=`invert(0)`;
//     });
//     social_media_icons.forEach(function(img){
//         img.style.filter=`invert(100)`;
//     });
// }
if(e.target.checked){
    check((invertamount=100));
}
else{
    check((invertamount=0));
}
});

function check(invertamount){
    headerimg.style.filter=`invert(${invertamount})`;
    imgs.forEach(function(img){
        img.style.filter=`invert(${invertamount})`;
    });
    social_media_icons.forEach(function(footer){
        footer.style.filter=`invert(${invertamount})`;
    });
}