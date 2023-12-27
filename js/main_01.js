/*마우스를 아래로 스크롤할 때 header에 있는 메인메뉴 배경 색상 변경하기*/
const header = document.querySelector('.header');
const headerRect = header.getBoundingClientRect();
const headerHeight = headerRect.height;

document.addEventListener('scroll', function () {
    console.log(window.scrollY);
    if(window.scrollY > 300){
        header.classList.add('header-dark');

    }else{
        header.classList.remove('header-dark');
    }
}
)

const minju = document.querySelector('#home');
const sora =minju.getBoundingClientRect().height;

document.addEventListener( 'scroll', function(){
    if(window.scrollY > sora) {
        document.querySelector('.about_content').classList.add('appear');
    } else {
        document.querySelector('.about_content').classList.remove('appear');
    };
})


const min = document. querySelector('.testimonial_each');
const ju = document. querySelector('.testimonial_each');

document.addEventListener('click', function(){
    if(window.click) {
        document.querySelector('.testimonial_each');  
    }
    }

)
const text = document. querySelector('.dd');
text.addEventListener ('click', function(){
    text.style.color='pink';
})

const img = document. querySelector('.testimonial_img');
img.addEventListener ('click',function(){
    img.style.backgroundColor='pink';
} )

const gg = document.querySelector('#aa');
gg.addEventListener('click', function(){
    document.querySelector('#bb').style.backgroundColor='gray';

})










