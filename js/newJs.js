const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            document.getElementById("overlay").classList.add("fadeInRight");
            document.getElementById("overlay").classList.remove("fadeOutRight");
        }
        else
        {
            document.getElementById("overlay").classList.add("fadeOutRight");
            document.getElementById("overlay").classList.remove("fadeInRight");
        }
    })
    observer.observe(document.getElementById("container"));
})