// selecting the elements
let img = document.querySelector("#img");
let userName = document.querySelector("#name > p");
let age = document.querySelector("#age > p");
let email = document.querySelector("#email > p");
let btn = document.querySelector("#submit");


// Function which displays the fetched data.
const displayData = (data) => {
    img.src = data.results[0].picture.medium;
    userName.textContent = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
    age.textContent = data.results[0].dob.age;
    email.textContent = data.results[0].email;
}

// creating a async function which fetches the data from the API and after fetching , it calls another function to display the data on HTML.
const getData = async () => {

    try {
        const fetchApi = await fetch("https://randomuser.me/api/");
        const data = await fetchApi.json();
        displayData(data)
    }

    catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please try again later.');
    }
}


// Adding event listners. 
btn.addEventListener("click", getData);
window.addEventListener("load", getData);
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        getData();
    }
})

