const userOne = document.querySelectorAll('#user1');
const userTwo = document.querySelectorAll('#user2');

const nextButton = document.getElementById('next').addEventListener('click', change);
const prevButton = document.getElementById('prev').addEventListener('click', change);

function change() {
    
    if(userTwo[0].classList[1] === 'hidden'){
            
        userTwo[0].classList.remove('hidden');
        userTwo[1].classList.remove('hidden')

        userOne[0].classList.add('hidden');
        userOne[1].classList.add('hidden');

    }else {
        userTwo[0].classList.add('hidden')
        userTwo[1].classList.add('hidden')

        userOne[0].classList.remove('hidden')
        userOne[1].classList.remove('hidden')

    }
    
}