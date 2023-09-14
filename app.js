const learnMoreBtn = document.querySelector(".learn-more-btn");
const text = document.querySelector(".text");

learnMoreBtn.addEventListener('click', ()=>{
    text.classList.toggle('show-more');
    if(learnMoreBtn.innerHTML === "Learn More"){
        learnMoreBtn.innerHTML = "Less";
    }
    else{
        learnMoreBtn.innerHTML = "Learn More"
    }
})

