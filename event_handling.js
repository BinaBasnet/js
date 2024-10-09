function testClick(){
    alert('I am from test Click');
    this.removeEventListener('click',testClick);
}
let btn1 = document.getElementById('btn1');
// btn1.addEventListener('click',function(){
//     alert('I am clicked');
// });
// btn1.addEventListener('click',() => {
//     alert('I am from arrow function');
// });
btn1.addEventListener('click',testClick);
var like  = 0;
//like button state
let likebtn = document.getElementById('like');
function likeButton(){
        like++;
        alert(like);
        this.style.color ='Blue';
        this.removeEventListener('click',likeButton)
}
likebtn.addEventListener('click',likeButton);