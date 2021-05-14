var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

let projects = [
    {
        name: "Bulletroof Coffee",
        description:"<b>Digital, Social, Retail, And Beyond</b><br>Bulletproof Coffee is more than just home to the delicious, buttery blend, aptly named Bulletproof Coffee. Sporting a diverse portfolio of supplements, snacks, and smart fats, this startup believes in empowering people to find their awesome. As the resident brand copywriter, my day-to-day tasks include everything from homepage edits, product naming, digital redesigns, retail marketing, social ad creation, and everything in-between.<br><b>Tagline</b>: Eat Well. Ignite Your Potential. ",
        imgSRC:"",
        caption:"",
        resources: null
    },
    {
        name: "Sami After Hours",
        description: " <b>Current & Past Collaborators : Holl & Lane Magazine, Belong Magazine, Driftless Magazine, Pussypedia, Distinction Music Management, and…</b><br><br> My first book  was called Super Bunny. Written in marker and bound with Scotch Tape, this illustrated adventure lit a fire in my belly that’s never gone out. Passion projects fuel me, inspire me, and remind me why I do what I do. I’m always looking for new collaborations that move me, and ideally, bring something positive into the world. For samples of my work, please email me at samihross@gmail.com.",
        imgSRC: "./projectImg/passionProj.jpeg",
        caption: "<b>WHERE THE MAGIC/ PROCRASTINATION HAPPENS:</b> Dust, smudge, and chaos- this is the side you DON’T see on <a href='https://www.instagram.com/beetliever'>Instagram.</a>",
        resources: null
    },
    {
        name: "Humana Social",
        description:"Sure, sexy brands have a certain je ne sais quoi, but if you ask me, there was something creatively invigorating about creating social content for a healthcare brand. Targeting baby boomers, we served up a variety of content made with one goal in mind: to inspire our audience to take microactions that would positively impact their health. We partnered with the National Park Service, hosted a Facebook Live series, and made a bunch of quote posts that were a real HIT with the 50+ set. At the end of the day, it's fun to have fun, and that's what this work was all about.  ",
        imgSRC:"",
        caption:"",
        resources: null
    },
    {
        name: "Made Together",
        description:"<b>COOKBOOK</b><br>In collaboration with FCB's Cultural Inclusion Team, I helped to concept and create a cookbook compiled of recipes collected from our coworkers. Made Together was sold at FCB's Winter Market, and all proceeds were donated to Off the Street Club. The excessive pun play was an added bonus. ",
        imgSRC:"./projectImg/madeTogether.jpeg",
        caption:"Art Director: Chris Warner",
        resources: null
    },
    {
        name: "Gender Equity Panel",
        description:"",
        imgSRC:"",
        caption:"",
        resources: null
    },
    {
        name: "Evolution Fresh",
        description:"",
        imgSRC:"",
        caption:"",
        resources: null
    },
    {
        name: "Nature's Recipe",
        description:"",
        imgSRC:"",
        caption:"",
        resources: null
    },
    {
        name: "Motley Fool",
        description:"",
        imgSRC:"",
        caption:"",
        resources: null
    },
    {
        name: "Gus Soda",
        description:"",
        imgSRC:"",
        caption:"",
        resources: null
    },
    {
        name: "The Hideout",
        description:"",
        imgSRC:"",
        caption:"",
        resources: null
    }
];

function redirect() {
    let x = getUrlParameter("proj");
    let project = projects[x];
    let n = document.getElementById("title");
    let d = document.getElementById("description");
    let img = document.getElementById("imgg");
    let cap = document.getElementById("caption");
    let res = document.getElementById("resources");
    n.textContent = project.name;
    d.innerHTML = project.description;
    img.src = project.imgSRC;
    cap.innerHTML = project.caption;
    if (project.resources != null) {
        res.textContent = project.resources;
    }
}
