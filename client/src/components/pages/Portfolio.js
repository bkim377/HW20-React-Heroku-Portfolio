import React from "react";

import Project from '../Project';

function Portfolio() {
    return (
        <div class="container">
        <div class="row">
          <div class="col-sm-1"></div>
            <div class="col-sm-10">
                <div class="card">
                <div class = "card-body">
                    <h2 class="card-title">My Programming Projects</h2>
                    <h5>*If you are viewing this page on a smartphone, please rotate it to landscape format to read the text.*</h5>
                    <br></br>
                
            <Project 
                imageSource="assets/imgs/3-MyLibraryNewPortrait.png" 
                altLabel="VideoStar"
                header="Group Project Name: VideoStar"
                description="A group project that lets the user add videos to their library, lend videos to other users, and keep track of and delete their videos in their library."
                deployedLink="https://video-starr.herokuapp.com/"
                githubLink="https://github.com/bkim377/video-star"
                />

            <Project 
                imageSource="assets/imgs/PokeBattle.png" 
                altLabel="PokéBattle"
                header="Group Project Name: PokéBattle"
                description="A group project that takes in 2 users, chooses 1 random Pokémon for each of them, and then simulates a battle."
                deployedLink="https://sleepy-headland-32384.herokuapp.com/"
                githubLink="https://github.com/bkim377/PokeBattle"
                />

            <Project 
                imageSource="assets/imgs/ConcertHunt.png" 
                altLabel="ConcertHunt"
                header="Group Project Name: ConcertHunt"
                description="A group project that searches up the top music artists in your area and what concerts they're hosting soon."
                deployedLink="https://tomaspz.github.io/concerthunt/"
                githubLink="https://github.com/bkim377/concerthunt"
                />

            <Project 
                imageSource="assets/imgs/UserDirectory3.png" 
                altLabel="UserDirectory"
                header="Project Name: User Directory"
                description="A page that allows the user to search for specific employees from a given database by entering letters in the search bar.  Only supports filtering by name, case-sensitive.  Must refresh the page after each search to reset the table."
                
                githubLink="https://github.com/bkim377/HW19-User-Directory"
                />

            <Project 
                imageSource="assets/imgs/ProgressiveBudget.png" 
                altLabel="ProgressiveBudget"
                header="Project Name: Progressive Budget"
                description="A page that allows the user to enter multiple deposits or withdrawals for specified amounts of money.  Shows a line graph of all transactions made and the overall trend over time.  Can be performed both online and offline."
                deployedLink="https://thawing-fortress-98587.herokuapp.com/"
                githubLink="https://github.com/bkim377/HW18-Progressive-Budget"
                />

            <Project 
                imageSource="assets/imgs/BurgersServer.png" 
                altLabel="BurgersServer"
                header="Project Name: Eat-A-Burger!"
                description="A page that lets the user list any number of burgers they choose and click buttons to let the site know they've been
                'devoured.' Starts with a list of 3 burgers by default."
                deployedLink="https://sleepy-cove-85461.herokuapp.com/"
                githubLink="https://github.com/bkim377/HW13-Node-Express-Handlebars"
                />

            <Project 
                imageSource="assets/imgs/NoteTaker.png" 
                altLabel="NoteTaker"
                header="Project Name: Note Taker"
                description="A page that lets the user create, save, modify, and delete notes on a single page.  Uses persistent notes 
                so that the user can return to the page later and pick up where they left off."
                
                githubLink="https://github.com/bkim377/HW11-Note-Taker"
                />

            <Project 
                imageSource="assets/imgs/WeatherDashboard.png" 
                altLabel="WeatherDashboard"
                header="Project Name: Weather Dashboard"
                description="A page that retrieves the current weather for a requested city as well as the forecast for the next 5 days.  
                Saves the data of all searched cities so they remain in the search history even if you close the browser window."
                deployedLink="https://bkim377.github.io/HW6-Weather-Dashboard/"
                githubLink="https://github.com/bkim377/HW6-Weather-Dashboard"
                />

            <Project 
                imageSource="assets/imgs/PasswordGenerator.png" 
                altLabel="PasswordGenerator"
                header="Project Name: Password Generator"
                description="A page that asks the user to set parameters for generating a random password: password length, 
                and whether they want to use special characters, numbers, and/or lowercase and uppercase letters."
                deployedLink="https://bkim377.github.io/HW3-Password-Generator/"
                githubLink="https://github.com/bkim377/HW3-Password-Generator"
                />
            
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;