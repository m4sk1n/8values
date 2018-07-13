function set_dark() {
    localStorage.setItem("dark-theme", 'true');
    let sheet = document.createElement('style');
    sheet.id = 'dark';
    sheet.innerHTML = "body {background-color: #222; border-color: #111} p.question {color: #ccc; background-color: #111} p {color: #bbb} h1 {color: #ddd} h2 {color: #ccc} #values p {color: #fff} a:link {color: #fff} a:visited {color: #aaf} .small_button_off {color: #ddd; border: 2px solid #ddd; background-color: #222}"
    document.body.appendChild(sheet);
}

function set_light() {
    localStorage.setItem("dark-theme", 'false');
    document.getElementById("dark").remove();
}

function theme_load() {
    let theme = "light";
    try {
        if (localStorage.getItem('dark-theme') == "true") {
            theme = "dark";
        }
    } catch (err) {}

    if (theme == "dark") {
        set_dark();
    }
}

function switch_theme() {
    let theme = "light";
    try {
        if (localStorage.getItem('dark-theme') == "true") theme = "dark";
    } catch (err) {}
    if (theme == "dark") {
        set_light();
    } else set_dark();
}
