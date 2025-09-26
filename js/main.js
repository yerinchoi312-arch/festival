document.addEventListener("DOMContentLoaded",()=>{
    const $slide_a = document.querySelectorAll('#slide a');
    let i= 0;
    const fading = ()=>{
        $slide_a.forEach(e=>{
            e.style.opacity =0;
        });
        $slide_a[i].style.opacity =1;
        i=(i+1)%3;
    }
    setInterval(fading,2800);

    const $tab = document.querySelectorAll('nav button');
    const $notice = document.getElementById('notice');
    const $gallery = document.getElementById('gallery');

    $tab.forEach((i,j)=>{
        i.addEventListener('click',()=>{
            $tab.forEach((e)=>{
                e.classList.remove('active');
            });
            i.classList.add('active');

            if (j===0){
                $notice.style.display='block';
                $gallery.style.display='none';
            }else{
                $notice.style.display='none';
                $gallery.style.display='flex';

            }
        });
        
    });
})