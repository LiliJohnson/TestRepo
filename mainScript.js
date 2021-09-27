// import { stateObj, timerButtonDiv, timerButton } from './timerScript.js';
// Adding new data for Behram

var buttonDiv = document.createElement("div");
buttonDiv.innerHTML = `<div>
<button id="myBtn">Avaza Timer</button>
	<div id="myModal" class="modal">
		<div id="insideModal" class="modal-content">
				<span class="close">&times;</span>
		</div>
	</div>
</div>`;
document.body.appendChild(buttonDiv);
// document.getElementById("insideModal").appendChild(timerButtonDiv);

let headData = `<meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
        }
        /* The Modal (background) */
        
        .modal {
            display: none;
            /* Hidden by default */
            position: fixed;
            /* Stay in place */
            z-index: 1;
            /* Sit on top */
            padding-top: 100px;
            /* Location of the box */
            left: 0;
            top: 0;
            width: 100%;
            /* Full width */
            height: 100%;
            /* Full height */
            overflow: auto;
            /* Enable scroll if needed */
            background-color: rgb(0, 0, 0);
            /* Fallback color */
            background-color: rgba(0, 0, 0, 0.4);
            /* Black w/ opacity */
					}
					/* Modal Content */
					
					.modal-content {
						background-color: #fefefe;
            margin: auto;
            padding: 20px;
            border: 1px solid #888;
            width: 80%;
						min-height: 100px;
        }
        /* The Close Button */
        
        .close {
            color: #aaaaaa;
            float: right;
            font-size: 28px;
            font-weight: bold;
        }
        
        .close:hover,
        .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
        }
    </style>`;
document.getElementsByTagName("head")[0].innerHTML += headData;
// GTOKEN_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
// new branch with token

var modal;
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


addModalDiv = () => {
    document.getElementsByTagName("body")[0].innerHTML += modalDiv;
}

btn.onclick = function() {
    let url = `https://any.colonise.com/oauth2/authorize?response_type=code&client_id=26&redirect_uri=${window.location.href}&scope=&hidesignup=true&hideexternal=true&code_challenge_method=S256&code_challenge=hg-tvboe3FDWn2_SqXDXE9IZK_uv0RNW_HntGv6pHEc`;
    // let url = "https://any.colonise.com/oauth2/authorize?response_type=code&client_id=26&redirect_uri=avazatstest://login&scope=&hidesignup=true&hideexternal=true&code_challenge_method=S256&code_challenge=hg-tvboe3FDWn2_SqXDXE9IZK_uv0RNW_HntGv6pHEc";
    // let url = "https://www.colonise.com";
    var loginWindow = window.open(
        url,
        "Avaza Login",
        `width=800,height=400,top=${screen.height/2-200},left=${screen.width/2-400}`
    );

    loginWindow.addEventListener = ('error', (err) => {
            console.log('err', err);
        })
        // modal = document.getElementById("myModal");
        // modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}