// Get DOM Elements
const menuToggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

// Event Listeners
// 1. Listen for click on Toggle button
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
});

// 2. Listen for click on Open button
open.addEventListener('click', () => modal.classList.add('show-modal'));

// 3. Listen for click on Close button
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// 4. Listen for click  outside of modal
window.addEventListener('click', e =>
    e.target === modal ? modal.classList.remove('show-modal') : false
);