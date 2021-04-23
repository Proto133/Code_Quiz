//Input User name and change the value of #input to reflect their response
var nameBtn = document.querySelector("#nameBtn");


function nameSubmit() {
    var greetingBlock = document.querySelector("#greetingBlock")
    var userName = document.querySelector("#input").value;
    var glUser = document.querySelector("#glUser");

    glUser.textContent = "Good luck, " + userName;

    greetingBlock.setAttribute("style", "display:none;");
    quiz();
}
nameBtn.addEventListener("click", nameSubmit);


function quiz() {
    var tag = document.createElement("h2");
    var span = document.querySelector("#questSpan");
    tag.textContent = "This is where questions will go.";
    span.appendChild(tag);
}