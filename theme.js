const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme", "dark");

        toggleTheme.innerText = "☀️";

    }else{

        localStorage.setItem("theme", "light");

        toggleTheme.innerText = "🌙";

    }

});

window.onload = () => {

    const theme = localStorage.getItem("theme");

    if(theme === "dark"){

        document.body.classList.add("dark");

        toggleTheme.innerText = "☀️";

    }

}