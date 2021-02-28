const toggles = document.querySelectorAll(".toggle")
const good = document.querySelector("#good")
const bad = document.querySelector("#bad")
const average = document.querySelector("#average")

toggles.forEach(toggle => toggle.addEventListener("change", (e) => doTheTrick(e.target)))


function doTheTrick(theClickedone) {
    if(good.checked && bad.checked && average.checked)  {
        if(good === theClickedone) {
            bad.checked = false;
        }
        if(bad === theClickedone) {
            good.checked = false;
        }
        if(average === theClickedone) {
            bad.checked = false
        }
    }
}
