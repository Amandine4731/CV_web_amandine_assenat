const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        
        accordionItemHeader.classList.toggle("active");

        if (accordionItemHeader.classList.contains("active")) {
            // Expansion de l'élément vers le bas
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            // Retrait de la classe active et réduction de la hauteur à 0
            accordionItemBody.style.maxHeight = null;
        }
    });
});
