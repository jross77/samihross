

function setBack() {
    const urls=["url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1538103700903-M2QSR6C2FNP1ZXTL62NT/ke17ZwdGBToddI8pDm48kDKiJEsE6bgtFfU9Ub_pOVx7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmaHJ0CCIp0h94CjFWATtzupzA5AWhPHiGeA3JO1ocdtQvDkG7-Xn7NkFxz8Qwol_V/DSC_0704.JPG?format=500w')",
    "url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1538094486081-TD0RHU7WKM0GO9V3Q8RK/ke17ZwdGBToddI8pDm48kOITnxRd4Ty9KVIo89g3zYt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmFk_H6M1tkD9NpL7mXac0oWDMuYJcGfvm-TMHjscJKS7ih56OKhJHZjmno-H1Xkhi/DSC_0707.jpg?format=500w')",
    "url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1488139143289-2A6D1X00DL4GDH8AU3F2/ke17ZwdGBToddI8pDm48kBzwTKN_sAjR129z_fG4LPpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwUp9TVT94anYMumcGli4qd1yG8_43V_MAvH0jVlurqbtB2xpfIBasdPQDujd8K2a8/image1.JPG?format=500w')",
    "url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1486398346492-H28I8O3XIPFGQVBEKVS0/ke17ZwdGBToddI8pDm48kMipLFZthJCkdjAEe2oFFnBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI2jcmWC-98mS5vOpYYq6MW47sYRe6iUJv_0B_18Cuo3kKMshLAGzx4R3EDFOm1kBS/IMG_5518.JPG?format=500w')",
    "url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1486397986541-KSPRT05RGDAC07LOVFBU/ke17ZwdGBToddI8pDm48kBzQH4RWPYqW2DD4NX3pz-JZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIXoIj3dGgW2Ixwx4aXp4djhyfY9ERP0-kvCTQrNqWACsKMshLAGzx4R3EDFOm1kBS/IMG_5525.JPG?format=500w')",
    "url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1486398022107-7HN2CBQXLR8E1689J6GD/ke17ZwdGBToddI8pDm48kO64cfEUMxn2I16b6poYf_9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxmUdhN-nrKVzHX1UdmqRIfO8MhEqcAr1QC2XrtPq6e7CeyzqSpSQV6jQ44cjO4lPE/IMG_5523.JPG?format=500w')",
    "url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1486398160323-FXUIZZVAMZ8HZ73INBOY/ke17ZwdGBToddI8pDm48kISp4Aq3gnog-PJC2GBc_-RZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIHSOBZjGGlu0ZQ0IC5V2-tVxc-LVTR3hj4a5ONDBY3wEKMshLAGzx4R3EDFOm1kBS/IMG_5521.JPG?format=500w')",
    "url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1486398053772-2YXOWZBW6V9455LXCJQH/ke17ZwdGBToddI8pDm48kE01NrNK9gDlheOczO4RCCNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIIJYmXizKGvW3X4ZuIRL5J1mUPkwg89aifJCQI82NdMgKMshLAGzx4R3EDFOm1kBS/IMG_5520.JPG?format=500w')",
    "url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1486398395288-MTIXPMPESSADNZJ6QG26/ke17ZwdGBToddI8pDm48kJPweELuaj2VFXEyAZyK6JtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIHkX5LRHFlsA8WcglvZ4hyUfpX7VJ1iV8d5AfUIFYYg8KMshLAGzx4R3EDFOm1kBS/IMG_5527.JPG?format=500w')",
    "url('https://images.squarespace-cdn.com/content/v1/52d568dae4b0002632d347ae/1486398083903-50JFXSSQB8TDIQRFY4BU/ke17ZwdGBToddI8pDm48kPg3kkMSlDqGprD-21e6kCJZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIpppx-FWaxK7i6rVdWZNGy6SGN0ZVlswpj22aI6j1zesKMshLAGzx4R3EDFOm1kBS/IMG_5522.JPG?format=500w')"
    ];

    for(let i=0;i<10;i++){
        let back = document.getElementById(i);
        back.style.backgroundImage=urls[i];
        back.style.backgroundSize = "30vmin 30vmin";
    }
    
    
}

setBack();

function seeMore (){
    let cells = document.querySelectorAll(".cell");
    cells.forEach(runFlipOnClick);
    function runFlipOnClick(element) {
        element.addEventListener("click", link);
    }

}
function link (event){
    let cell=event.target;
    let index=cell.id;
    index.href="passionprojects.html";

}

function indirect(x){


}



