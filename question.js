const noButton = document.getElementById('noButton');
let noCount = 0;

const phrases = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely sure?",
    "This could be a mistake!",
];

noButton.addEventListener('click', () => {
    noCount++;
    const phrase = phrases[Math.min(noCount, phrases.length - 1)];
    const noText = noButton.querySelector('.no-text');
    noText.textContent = phrase;

    // Get card boundaries
    const card = document.querySelector('.card');
    const cardRect = card.getBoundingClientRect();
    
    // Ensure the button moves within the card
    const maxX = cardRect.width - noButton.offsetWidth - 20; // Padding to stay inside
    const maxY = cardRect.height - noButton.offsetHeight - 20;

    // Generate random position within card
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = 'absolute'; // Change to absolute so it stays in card
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});
