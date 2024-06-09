let burger = document.getElementById('open-nav')
let burger2 = document.getElementById('close-nav')
const targetElement = document.querySelector('.container2')


burger.addEventListener('click', function(e){
    targetElement.classList.toggle('is-open');
});

burger2.addEventListener('click', function(e){
    targetElement.classList.toggle('is-open');
});
        
// Pobierz wszystkie przyciski
const buttons = document.querySelectorAll('.btn');

// Dodaj nasłuchiwanie na zdarzenie 'click' dla każdego przycisku
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Usuń klasę 'active' ze wszystkich przycisków
        buttons.forEach(btn => btn.classList.remove('active'));
        // Dodaj klasę 'active' do klikniętego przycisku
        button.classList.add('active');
    });
});


