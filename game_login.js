
function addUser()
{
    var username1 = document.getElementById("player_1name_input").value;

    var username2 = document.getElementById("player_2name_input").value;

    localStorage.setItem("username1", username1);
    localStorage.setItem("username2", username2);

    window.location = "game_page.html";
}