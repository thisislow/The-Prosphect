var profileLogon = document.getElementById('profilelogon');
var powerBtn = document.getElementById('powerbutt');
var bootTransition = document.getElementById('boottransition');
var transitionText = document.getElementById('transitiontext');

if (bootTransition) {
    bootTransition.style.display = 'none';
}

function startLogin(userName) {
    localStorage.setItem('activeUser', userName);
    if (profileLogon) {
        profileLogon.style.display = 'none';
    }
    if (bootTransition) {
        bootTransition.style.display = 'flex';
    }
    if (transitionText) {
        transitionText.textContent = 'Welcome Back ' + userName + '....';
    }
    setTimeout(function () {
        window.location.href = '01.html';
    }, 1500);
}

if (profileLogon) {
    profileLogon.addEventListener('click', function () {
        startLogin('MARROW VANTAGE');
    });
}

if (powerBtn) {
    powerBtn.addEventListener('click', function () {
        document.body.style.transform = 'scaleY(0.005)';
        setTimeout(function () {
            alert('SYSTEM SHUT DOWN');
            document.body.style.transform = 'scaleY(1)';
        }, 450);
    });
}