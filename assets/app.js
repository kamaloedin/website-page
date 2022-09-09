const previews = document.querySelectorAll('.circle');
const result = document.querySelectorAll('.result-box')




for (const preview of previews) {
    preview.addEventListener('click', function (event) {

        const target = event.target

        if (target.classList.contains('brown')) {
            result[0].classList.add('brown')
            result[0].classList.remove('black')
            result[0].classList.remove('blue')
            result[0].innerHTML = 'Style 1'
            return;
        }

        if (target.classList.contains('black')) {
            result[0].classList.add('black')
            result[0].classList.remove('brown')
            result[0].classList.remove('blue')
            result[0].innerHTML = 'Style 2'
            return;
        }

        if (target.classList.contains('blue')) {
            result[0].classList.add('blue')
            result[0].classList.remove('black')
            result[0].classList.remove('brown')
            result[0].innerHTML = '<strong>Style 3</strong>'
            return;
        }
    })
}
