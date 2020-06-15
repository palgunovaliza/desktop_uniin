const staticHeightSquareLeft = () => {
    const contentHeight = document.getElementsByTagName('html')[0].scrollHeight;
    const footerHeight = document.querySelector('.footer').clientHeight;
    const squareLeft = document.querySelector('.square_left');

    squareLeft.style.minHeight = `${ contentHeight - footerHeight }px`;
}

staticHeightSquareLeft()

const like = document.querySelectorAll('.like-js')

for (let i = 0; i !== like.length; i++) {
    let statusLike = true;

    like[i].onclick = () => {
        if (statusLike) {
            like[i].setAttribute('src', 'img/heart_active.svg');
            statusLike = false
        } else {
            like[i].setAttribute('src', 'img/heart.svg');
            statusLike = true
        }
    }
}
