// Fetch the content of data.json from GitHub
fetch('https://raw.githubusercontent.com/devalfie/robux-bank/main/data.json')
    .then(response => response.json())
    .then(data => {
        // Display the content on the webpage
        document.getElementById('points-container').innerHTML = `
            <h2>Austin Point: ${data.Austin_Point}</h2>
            <h2>Rems Points: ${data.Rems_Points}</h2>
        `;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
