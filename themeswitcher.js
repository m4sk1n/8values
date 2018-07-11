function set_dark() {
    localStorage.setItem("dark-theme", 'true');
    let sheet = document.createElement('style');
    sheet.id = 'dark';
    sheet.innerHTML = "body {background-color: #222222; border-color: #111111} p.question {color: #cccccc; background-color: #111111} p {color: #bbbbbb} h1 {color: #dddddd} h2 {color: #cccccc} #values p {color: #ffffff} a:link {color: #ffffff} a:visited {color: #aaaaff} .small_button_off {background-color: #222222}"
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
