const { response } = require('express');
const express = require('express')

const app = express()
let port = 3000


app.use(express.static('public')) 


let albums = [{  
    id:0,
    name:"Port of Miami",
    description:"2006",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/f/f2/Port_of_miami.jpg",

   songTitles:[" Intro"," Push It", " TheBlow", " Over", " Hustlin'", " Cross That Line", " I'm Bad", " Boss", " For da Low", " Where My Money", " Get Away", " Hit U From the Back", " White House", " Pots and Pans", " It's My Time", " Street Life", " Hustlin'(remix)", " It Ain't a Problem", " I'm a G", " Prayer"]
 },
 {  
     id: 1,
    name:"Trilla",
    description:"2008",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/d/da/Trillaalbum.jpg",

   songTitles:[" Trilla Intro"," All I Have In This World", " The Boss" , " Speedin'", " We Shinin'", "Money Make Me Come", "DJ Khaled", "This Is the Life", "This Me", "Here I Am", "Maybach Music", "Billionaire", "Luxury Tax", "Reppin' My City", "I'm Only Human"]
 },
 {  
    id: 2,
    name:"Deeper Than Rap",
    description:"2009",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/8/8d/Deeper_than_rap.jpeg",

   songTitles:["Mafia Music"," Maybach Music 2", " Magnificent", " Yacht Club", " Usual Suspects", " All I Really Want", " Rich Off Cocaine", " Lay Back", " Murda Mami", " Gunplay", " Bossy Lady", " Face", " Valley of Death", "In Cold Blood"]
 },
 {  
    id: 3,
    name:"Teflon Don",
    description:"2010",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/4/46/20100603-TEFLONDON.jpg",

   songTitles:["I'm Not a Star", "Free Mason", " Tears of Joy", " Maybach Music III", " Live Fast, Die Young", " Super High", " No. 1", " MC Hammer", " B.M.F. (Blowin' Money Fast)", " Aston Martin Music", " All the Money in the World"]
 },
 {  
    id: 4,
    name:"God Forgives, I Don't ",
    description:"2012",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/2/2f/GodForgivesIDont.PNG",

   songTitles:["Pray for Us", " Pirates", " 3 Kings", " Ashamed", " Maybach Music IV", " Sixteen", " Amsterdam", " Hold Me Back", " 911", " So Sophisticated", " Presidential", " Ice Cold", "Touch'N You", "Diced Pineapples", "Ten Jesus Pieces"]
 },
 {  
    id: 5,
    name:"Mastermind ",
    description:"2014",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/a/aa/Rick_Ross_Mastermind.jpg",

   songTitles:["Intro", " Rich Is Gangsta", " Drug Dealers Dream", " Shots Fired", " Nobody", " The Devil Is a Lie", " Mafia Music III", " War Ready", " What a Shame", " Supreme", " Blk & Wht", " Dope Bitch", "In Vein", "Sanctified", "Walkin' on Air", "Thug Cry"]
 },
 {  
    id: 6,
    name:"Hood Billionaire ",
    description:"2014",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/3/30/HoodBillionaire.jpg",

   songTitles:["Intro", " Hood Billionaire", " Coke Like the 80’s", " Heavyweight", " Neighborhood Drug Dealer", " Phone Tap", " Trap Luv", " Elvis Presley Blvd.", " Movin’ Bass", " If They Knew", " Quintessential", " Keep Doin’ That (Rich Bitch)", "Nickel Rock", "Burn", "Family Ties", "Brimstone"]
 },
 {  
    id: 7,
    name:"Black Market ",
    description:"2015",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/1/10/Rick_Ross_Black_Market.jpg",

   songTitles:["Free Enterprise", " Smile Mama, Smile", " One of Us", " Silk Road", " Color Money", " Dope Dick", " Crocodile Python", " Ghostwriter", " Black Opium", " Can't Say No", " Peace Sign", " Very Best", "Sorry", "D.O.P.E."]
 },
 {  
    id: 8,
    name:"Rather You Than Me",
    description:"2017",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/b/b7/RickRossRYTM.png",

   songTitles:["Apple of My Eye", " Santorini Greece", " Idols Become Rivals", " Trap Trap Trap", " Dead Presidents", " She on My Dick", " I Think She Like Me", " Powers That Be", " Game Ain't Based On Sympathy", " Scientology", " Lamborghini Doors", " Triple Platinum", "Maybach Music V", "Summer Seventeen"]
 },
 {  
    id: 9,
    name:"Port of Miami 2",
    description:"2019",
    imgURL:"https://upload.wikimedia.org/wikipedia/en/a/ac/Port_of_Miami_2_by_Rick_Ross.jpeg",

   songTitles:["Act a Fool", " Turnpike Ike", " Nobody's Favorite", " Summer Reign", " White Lines", " Big Tyme", " Bogus Charms", " Rich Nigga Lifestyle", " Born to Kill", " Fascinated", " I Still Pray", " Running the Streets", "Vegas Residency", "Maybach Music VI", "Gold Roses"]
 }
 
]

let nav = ` 
<h1>Albums:</h1>  
<ul>
<li><a href="/albums/0"> Port of Miami </a></li>
<li><a href="/albums/1">Trilla </a></li>
<li><a href="/albums/2">Deeper Than Rap </a></li>
<li><a href="/albums/3">Teflon Don </a></li>
<li><a href="/albums/4">God Forgives, I Don't</a></li>
<li><a href="/albums/5">Mastermind </a></li>
<li><a href="/albums/6">Hood Billionaire </a></li>
<li><a href="/albums/7">Black Market </a></li>
<li><a href="/albums/8">Rather You Than Me </a></li>
<li><a href="/albums/9">Port of Miami 2 </a></li>
</ul>
`


app.get('/', (req, res) =>{

    res.send(`
    <h1>Rick Ross</h1>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Rick_Ross_Mastermind_Tour.jpg/517px-Rick_Ross_Mastermind_Tour.jpg" height="750px" align="center"">
    <p><b>William Leonard Roberts II</b> (born January 28, 19766) is an American rapper, songwriter, entrepreneur, and record executive.</p>
  
    <a href="/albums">See Albums</a>
 `)
})

app.get('/albums', (req, res) =>{

    res.send(`
    <a href="/">Home</a>
    ${nav} `)

})


app.get('/albums/:id', (req, res)=>{

    let id = req.params.id
    res.send(`
    <a href="/">Home</a>
        ${nav}
        <br>
        <h2>${albums[id].name}</h2>
        <h3>Released: ${albums[id].description}</h3>
        <img src="${albums[id].imgURL}" height="300px">
        
        <h3>Songs:</h3>
        <ul>
            <li>${albums[id].songTitles}</li>
        </ul>
    `)

})

app.get('*', (req, res)=>{
    res.send(`You've reached an error`)
})


app.listen(port, ()=>{
    console.log(`Server us running on port ${port}`);
})