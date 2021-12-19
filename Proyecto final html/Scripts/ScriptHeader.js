function boton(){
    const btn__theme = document.querySelector('#btn__theme');
    const body = document.querySelector('body')

    btn__theme.addEventListener('click', e =>{
    body.classList.toggle('whitemode');
});
}
window.onload=boton();