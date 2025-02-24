const username = prompt ("ismingizni kiriting")
const username1 = prompt ("familiyangizni kiriting")
const username3 = prompt ("yosh  kiriting")      
const newtitle = document.createElement ("h1")
const newtitle1 = document.createElement ("h2")
const newtitle3 = document.createElement ("h3")
newtitle .textContent = username;
document.body.append(newtitle)
newtitle1 .textContent = username1;
document.body.append(newtitle1)
newtitle3 .textContent = username3;
document.body.append(newtitle3)