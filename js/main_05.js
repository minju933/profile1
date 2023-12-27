//프로젝트 클릭하면 해당 프로젝트만 표현하기//

const categories = document.querySelector('.category');
const projects = document.querySelectorAll('.project');

categories.addEventListener('click',(event)=>{
    console.log(event);

    const filter = event.target.dataset.category;
    console.log(filter);

    projects.forEach((project)=>{
        console.log(project.dataset.type);
 

        if (filter ==='all'|| filter === project.dataset.type){
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
        if (filter == null) {
            return;
        }
    })

    //클릭한 버튼에 category_selected 설정하기
    const active_button = document.querySelector('.category_selected');
    active_button.classList.remove('category_selected')
    //.category_selected하면 오류입니다-마침표 생략 //
    event.target.classList.add('category_selected');
    console.log(event.target);
    //콘솔 화면을 확인해보면 클릭한 버튼에 category_selected가 추가된 것을 확인할 수 있습니다
})
