//selectors
const themeToggleBtn = document.querySelector('.theme-toggle');
//state
const theme = localStorage.getItem('theme');

//on mount
theme && document.body.classList.add(theme); //short-circuiting

//handlers
const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');

    if(document.body.classList.contains('light-mode')){
        localStorage.setItem('theme', 'light-mode');
    }else{
        localStorage.removeItem('theme');
    }
}
//events
themeToggleBtn.addEventListener('click', handleThemeToggle);

$(document).ready(function(){
    $('.toggle-collapse').click(function(){
        $('.navbar-collapse').toggleClass("collapse");
    })
})