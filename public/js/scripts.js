function findbook(){
    var userSearch = document.getElementById('userinput').value;
    var bookResult = document.getElementById('result');

    bookResult.innerHTML = "";

    $.ajax({
        type:"GET",
        url : "https://www.googleapis.com/books/v1/volumes?q="+userSearch,
        dataType:"JSON",
        success:function(bkk){
            console.log(bkk);

            for(var i=0; i<bkk.items.length; i++){

            //create a media div
            var mediadiv = document.createElement('div');
            mediadiv.className = 'media';

            //create an image
            var mediaimage = document.createElement("img");
            mediaimage.src = bkk.items[i].volumeInfo.imageLinks.thumbnail;
            mediaimage.className = 'mr-3';
            
            //create a media body
            var mediabodydiv = document.createElement('div');
            mediabodydiv.className = 'media-body';
            //create a h5
            var mediaheadingh5 = document.createElement('h5');
            mediaheadingh5.className = 'mt-0';
            mediaheadingh5.innerHTML = bkk.items[i].volumeInfo.title;
            //create a h6 to display authors
            var bkauthors = document.createElement('h6');
            bkauthors.innerHTML = "AUTHORS : ";
            try {
                for(var z=0; z<bkk.items[i].volumeInfo.authors.length;z++)
                {
                    
                        bkauthors.innerHTML += bkk.items[i].volumeInfo.authors[z] + "."; 
                    
                        
                }   
            } catch (error) {
                console.log(error);
            } 

            //create a paragraph with the description
            var bkdesc = document.createElement('p');
            if(bkk.items[i].volumeInfo.description != null)
                bkdesc.innerHTML = bkk.items[i].volumeInfo.description;

            mediabodydiv.appendChild(mediaheadingh5);
            mediabodydiv.appendChild(bkauthors);
            mediabodydiv.appendChild(bkdesc);

            
            //append the image and media body to the media div
            mediadiv.appendChild(mediaimage);
            mediadiv.appendChild(mediabodydiv);            

            //append the media div to the result div
            bookResult.appendChild(mediadiv);
            bookResult.appendChild(document.createElement('hr'));

            }
        }
    })
}