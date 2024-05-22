document.addEventListener("DOMContentLoaded", function() {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const plusIcon = item.querySelector(".svg-plus");
        const minusIcon = item.querySelector(".svg-minus");

        question.addEventListener("click", function() {
            const isVisible = answer.style.display === "block";

            if (isVisible) {
                answer.style.display = "none";
                plusIcon.style.display = "inline";
                minusIcon.style.display = "none";
            } else {
                answer.style.display = "block";
                plusIcon.style.display = "none";
                minusIcon.style.display = "inline";
            }
        });
    });
});
