



let carousel_div = document.getElementById('carousel')
function carousel(){
    let images = ['https://cdn1.tripoto.com/media/filter/nxxl/img/2176903/Image/1641219664_rajasthan_04.jpg','https://www.scrolldroll.com/wp-content/uploads/2022/04/places-to-visit-in-rajasthan-featured.jpg','https://theenterpriseworld.com/wp-content/uploads/2022/11/UPSHOT.jpg','https://fastread.in/images/uploads/Ranthambore-fort-2019.jpg','https://fastread.in/images/uploads/Kumbhalgarh-Fort-Rajasthan.jpg','./mehrangarh.jpg','./Amer-Fort.jpg','./Junagarh.jpg']
    let imgElement = document.createElement('img');
         imgElement.src=images[0];
        carousel_div.append(imgElement);
        let i=1;
        setInterval(function(){
        if(i===images.length){
            i=0;
        }
        imgElement.src=images[i]
        carousel_div.append(imgElement);
        i++;
       },2500) ;
    }
carousel();       







    
