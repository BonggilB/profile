window.onload = function(){
    let ShowP = document.querySelector('.container p');
    // console.log(ShowP)
    ShowP.addEventListener('click', ()=>{
        ShowP.style.whiteSpace ="normal";
        ShowP.style.width ="auto";
        ShowP.style.height ="auto";
    })
    slideOut()
}
// 이미지팝업
//     function ImgPop(_target){
//         let 
//     }
// function disBlock(eventEle,_target){
//     eventEle.addEventListener('click',function(){
//         _target.style.display = 'block';
//     })
// }
// function disNone(eventEleTarget){
//     for(let idx=0;idx<eventEleTarget.length;idx++){
//         eventEleTarget[idx].addEventListener('click',function(){
//             this.style.display = 'none'; 
//         })
//     }    
// }


function Chat(){//인사,전화,게임
        let popChat = document.querySelector('.wrap');
        // popChat.removeChild('div');
        // popChat.className('hide')
        // popChat.document.css('display:None;')
        // 그냥 한번나오고 안나오게 해야겠다..
        alert('안녕하세요!')
        Chat = false;
}
    let A = 0;
function Phone(){
    A++
    if(A==0){
    }else if(A==1){
        alert('한번더 눌러주세요!');
    }else if(A==2){
        alert('앞번호는 010!');
    }else if(A==3){
        alert('중간번호는 삼7팔9!');
    }else if(A==4){
        alert('마지막은 8오공4!');
    }else if(A==5){
        alert('입니다!');
    }else if(A<=10){
        alert('이제 더 누르셔도 같은말만 나와요');
    }else{
        alert('왜자꾸 누르시나용 ㅜ');
    }
}
// 슬라이드
let sliNum = 0
function up() {
    sliNum++
    slideOut()
}
function down() {
    sliNum--
    slideOut()
}
function slideOut(){
    let sli01 = document.getElementById('slide01')
    let sli02 = document.getElementById('slide02')
    let sli03 = document.getElementById('slide03')
    if(sliNum==0){
        sli01.classList.add('active')
        sli02.classList.remove('active')
        sli03.classList.remove('active')
    }else if(sliNum==1){
        sli02.classList.add('active')
        sli01.classList.remove('active')
        sli03.classList.remove('active')
    }else if(sliNum==2){
        sli03.classList.add('active')
        sli01.classList.remove('active')
        sli02.classList.remove('active')
    }else if(sliNum==3){
        sliNum=0
        slideOut()
    }else if(sliNum==-1){
        sliNum=2
        slideOut()
    }
}
