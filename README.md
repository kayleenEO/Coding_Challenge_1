# Coding Challenge Test 1

This will be used to test you programming skills in a real-world situation. You may use any of the following programming languages to complete this task: PHP, Node, React, Vue, Python. When you are completed you will need to send a link to a public git repository that contains the code used with a formatted readme file that has detailed instructions on how to boot the application up, and how to use it.

API ENDPOINT: https://api.data.gov/ed/collegescorecard/v1/schools/

API Query String : school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size**range=1..&school.degrees_awarded.predominant**range=1..3&school.degrees_awarded.highest\_\_range=2..4&id=240444&api_key={API_KEY_HERE}

Requirements
A page that will display the most recent school year data in a modern looking page.
• School name, and if they have a School name alias
• School Website
• School City
• School State
• School Zip
• Total # of students
• A Donut chart of Program Percentages out of 100 (Only values of not null)
• A Donut chart of Race/Ethnicity (Only values of not null)
• A Graph of any type to display net price -> public->by income level
• Any Graph of your choosing for any other metrics in the API Call.
• A button to save the page as a pdf
• A button to download the data that populated the page
• A button to print the page

## Setup

The Coding Challenge is deployed at: https://coding-challenge-test-1-ea.herokuapp.com/

To access this code on your local machine, please follow the steps below:

1.  Open your terminal
2.  cd Desktop
    (if you want to self-title your own folder complete step 3-6, otherwise skip to step 5)
3.  mkdir Coding_Challenge_for_Kayleen_Offringa
4.  cd Coding_Challenge_for_Kayleen_Offringa
5.  git clone https://github.com/kayleenEO/Coding_Challenge_1.git
6.  Open in your text editor of choice

## Start

Early in the project, I provisioned a database and test database in case I wanted to add users and administors. Before 'npm run start-dev' will spin up, please run 'createdb coding_challenge' and 'createdb coding_challenge_test'. I used a PostgreSQL database. There is no need to run the seed as I did not use this feature.

Once you have opened the project in your editor of choice, are inside the directory, and have provisioned for the databases, the terminal command `npm run start-dev` will open the project in the development environment. It will be available in the browser for viewing at localhost:8080
