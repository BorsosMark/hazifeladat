let menuSzoveg=` <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html">Nyitolap</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="elso.html">Elsö</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="masodik.html">Második</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="harmadik.html">Harmadik</a>
      </li>
    </ul>
  </div>
</div>
</nav>`

document.getElementById("menu").innerHTML=menuSzoveg

function kattintas(){
    //alert("Hello")
    let knev=document.getElementById("keresztnev").value
    document.getElementById("kiiras").innerHTML=`Zene a minden  ${knev} !!! `
}

function sarga(){
    document.getElementById("vezeteknev").style.backgroundColor="yellow"
}

function feher(){
    document.getElementById("vezeteknev").style.backgroundColor="white"
  }


























