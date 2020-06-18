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



function muchRandomPlanet(){
return Math.floor(Math.random() * 5)+1;
}


const randomPlanet = function() {
  const sendData = document.getElementById('send')
  const planetImg = document.getElementById('random-planet-img')
  sendData.onclick = (e) => {
    e.preventDefault()
    planetImg.setAttribute('class', `random-position-planet${muchRandomPlanet()}`)
    planetImg.setAttribute('src', `img/planet${muchRandomPlanet()}.1.svg`)
    console.log(muchRandomPlanet())
  }


 }
randomPlanet();

// $(document).ready(function(){
//   $('.header_burger').click(function(event){
//     $('.header_burger,.header_menu'),toggleClass('active');
//   })
// })


$('.img_menu').on('click', function(e) {

  e.preventDefault();
  $('#menuburger').toggleClass("active");
  $('.header').toggleClass("active");
});
