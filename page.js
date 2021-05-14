let projects = [
    {name:"Sami After Hours", 
    description: " <b>Current & Past Collaborators : Holl & Lane Magazine, Belong Magazine, Driftless Magazine, Pussypedia, Distinction Music Management, and…</b><br><br> My first book  was called Super Bunny. Written in marker and bound with Scotch Tape, this illustrated adventure lit a fire in my belly that’s never gone out. Passion projects fuel me, inspire me, and remind me why I do what I do. I’m always looking for new collaborations that move me, and ideally, bring something positive into the world. For samples of my work, please email me at samihross@gmail.com.",
    imgSrc: "https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1538104505520-3GZ6J36SANM641B8A1D4/ke17ZwdGBToddI8pDm48kL-PDEV0kc4nkv6ZO74dbct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UfdVC79UZfxPkMeg9HFyXpQQifYSi4HMBv5Z68sTGDeU_XaCZ2eR_PUwOvzfpR6u4g/IMG_8827.JPG?format=2500w",
    caption:"<b>WHERE THE MAGIC/ PROCRASTINATION HAPPENS:</b> Dust, smudge, and chaos- this is the side you DON’T see on Instagram.",
    resources: null
    }
    ];

    function redirect(x){
    let project = projects[x];
    let n = document.getElementById("title");
    let d = document.getElementById("description");
    let img = document.getElementById("imgg");
    let cap = document.getElementById("caption");
    let res = document.getElementById("resources");
    n.textContent = project.name;
    d.innerHTML = project.description;
    img.src = project.imgSrc;
    cap.innerHTML = project.caption;
    if(project.resources != null){
    res.textContent = project.resources;
    }
    }
    