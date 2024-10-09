function num() {
    let wins = parseInt(document.getElementById('wins').value);
    let losses = parseInt(document.getElementById('losses').value);
    let draws = parseInt(document.getElementById('draws').value);

    if (isNaN(wins) || isNaN(losses) || isNaN(draws))//isnan  is a javascript function
     {
        alert("Please enter valid numbers for wins, draws, and losses.");
        return;
    }

    let totalPoints = (wins * 3) + (draws * 1);
    alert(`The football team has ${totalPoints} points.`);
}