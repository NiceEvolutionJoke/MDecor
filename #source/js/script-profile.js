const profileBtn = document.querySelectorAll('.profile-btn');
const profileContent = document.querySelectorAll('.profile-content');
for (let i = 0; i < profileBtn.length; i++) {
    profileBtn[i].addEventListener('click', () => {
        profileContent[i].classList.toggle('active');
        profileBtn[i].classList.toggle('active');
    });
};