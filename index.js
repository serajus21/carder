// light & dark mode
let x = 0;
function changeMode() {
    ++x;
    if(x%2!=0) {

        // header
        document.getElementById('page').style.backgroundColor = "rgb(30,30,30)";
        document.getElementById('switchContainer').style.justifyContent = "flex-end";
        document.getElementById('nav').style.backgroundColor = "rgb(30,30,30)";
        document.querySelectorAll('.link--nav').forEach((element) => {
            element.style.color = "aqua";
            element.addEventListener('mouseenter', function() {
                element.style.color = "gray";
            })
            element.addEventListener('mouseleave', function() {
                element.style.color = "aqua";
            })
        })

        // heroSection
        document.querySelectorAll('.i').forEach((element) => {
            element.style.backgroundColor = "black";
            element.style.color = "white";
        })
    }
    
    if(x%2==0) {

        // header
        document.getElementById('page').style.backgroundColor = "white";
        document.getElementById('switchContainer').style.justifyContent = "flex-start";
        document.getElementById('nav').style.backgroundColor = "white";
        document.querySelectorAll('.link--nav').forEach((element) => {
            element.style.color = "rgb(26, 171, 171)";
            element.style.opacity = "0.6";
            element.addEventListener('mouseenter', function() {
                element.style.color = "rgb(26, 171, 171)";
                element.style.opacity = "1.0";
            })
            element.addEventListener('mouseleave', function() {
                element.style.color = "rgb(26, 171, 171)";
                element.style.opacity = "0.6";
            })
        })

        // heroSection
        document.querySelectorAll('.i').forEach((element) => {
            element.style.backgroundColor = "white";
            element.style.color = "black";
        })
    }
}



// mobileMenu
function viewM() {
    document.getElementById('viewMenu').style.display = "none";
    document.getElementById('hideMenu').style.display = "inline-block";
    document.getElementById('nav').style.right = "0";
}
function hideM() {
    document.getElementById('hideMenu').style.display = "none";
    document.getElementById('viewMenu').style.display = "inline-block";
    document.getElementById('nav').style.right = "-100%";
}





// createCard
let stData = {};
function createCard() {
    event.preventDefault();
    // input
    stData = {
        gfname : document.getElementById('ifname').value,
        glname : document.getElementById('ilname').value,
        fullName : function() {
            return stData.gfname + " " + stData.glname;
        },
        gbatch : document.getElementById('ibatch').value,
        gmidCode : document.getElementById('imidCode').value,
        glastCode : document.getElementById('ilastCode').value,
        studentID : function() {
            return stData.gbatch+"-"+stData.gmidCode+"-"+stData.glastCode;
        },
        gdept : document.getElementById('idept').value,
        guni : document.getElementById('iuni').value,
        gemail : document.getElementById('iemail').value
    };
    // output
    document.getElementById('pr--name').innerHTML=stData.fullName();
    document.getElementById('pr--id').innerHTML=stData.studentID();
    document.getElementById('pr--dept').innerHTML=stData.gdept;
    document.getElementById('pr--uni').innerHTML=stData.guni;
    document.getElementById('pr--email').innerHTML=stData.gemail;
}
// imageInput
document.getElementById('iimg').onchange = function() {
    document.getElementById('contain-img').src = URL.createObjectURL(this.files[0]);
}
//colorEdit
document.getElementById('icolortxt').onchange = function() {
    document.querySelectorAll('.pData').forEach((element) => {
        element.style.color = this.value;
    })
    document.querySelectorAll('.pr').forEach((element) => {
        element.style.color = this.value;
    })
}
document.getElementById('icolorbg').onchange = function() {
    document.getElementById('card').style.backgroundColor = this.value;
}


/* 
<section class="cardContainer" id="cardContainer">
    <div class="card">
        <input type="file" class="iimg" id="iimg">
        <label for="iimg" class="iimg--label">
            <img src="https://i.postimg.cc/ZKS36RC5/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="" class="contain-img" id="contain-img">
        </label>
        <span class="pData pData--name" id="pData--name">
            <samp class="cardLabel">Name</samp> <samp class="pr pr--name" id="pr--name"></samp>
        </span>
        <span class="pData pData--id" id="pData--id">
            <samp class="cardLabel">Student ID</samp> <samp class="pr pr--id" id="pr--id"></samp>
        </span>
        <span class="pData pData--dept" id="pData--dept">
            <samp class="cardLabel">Department</samp> <samp class="pr pr--dept" id="pr--dept"></samp>
        </span>
        <span class="pData pData--uni">
            <samp class="cardLabel">University</samp> <samp class="pr pr--uni" id="pr--uni"></samp>
        </span>
        <span class="pData pData--email">
            <samp class="cardLabel">Email</samp> <samp class="pr pr--email" id="pr--email"></samp>
        </span>
    </div>
    <div class="cardDesign" id="cardDesign">
        <input type="color" class="icolor" id="icolortxt">
        <label for="icolortxt" class="colorCh colorCh--text">Text</label>
        <input type="color" class="icolor" id="icolorbg">
        <label for="icolorbg" class="colorCh colorCh--bg">Background</label>
    </div>
</section>
*/
