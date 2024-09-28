document.addEventListener('DOMContentLoaded', (event) => {
    const image = document.getElementById('clickable-image');
    const audio = document.getElementById('hidden-audio');
    let a=0;
    image.addEventListener('click', () => {
        a=a+1;
        if(a%2==0){
            audio.pause();
        }
        else{
            audio.play();
        }
        
    });
});