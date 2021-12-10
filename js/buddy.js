const loadBuddy = ()  => {
    fetch('https://randomuser.me/api/?results=500')
    .then(res => res.json())
    .then(data => displayBuddy(data));
}
loadBuddy ()
const displayBuddy = data =>{
    const buddies = data.results;
 const buddyDiv = document.getElementById('buddies')
//  console.log(data.results);
for (const buddy of buddies) {
    console.log(buddy.email);
    const p = document.createElement('p');
    p.innerText = `Name: ${buddy.name.first} ${buddy.name.secend}
    Email: ${buddy.email}
    Cell: ${buddy.cell} 
    Gender: ${buddy.gender}
    Location: ${buddy.location.city}
    
    `;
    buddyDiv.appendChild(p);
}

}