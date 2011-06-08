# jQueryFlickr 
## get flickr photos by photoset and outputs fancybox gallery

See the demo example: [http://makevoid.github.com/jqueryflickr](http://makevoid.github.com/jqueryflickr)

### basic usage

in the page head add:

    <link href="css/fancybox.css" rel="stylesheet">
    <script src="js/jquery.js"></script>
    <script src="js/jquery-fancybox.js"></script>
    <script src="js/jquery-flickr.js"></script>
    <script>
      var api_key = "ceedea54d4a6a93de57f7f0f8b448106"
      $(function(){
        $("#photos").flickrGallery(api_key)
      })
    </script>
  
and this will go into the body:

     <div id="photos" data-set_id="72157625778631893"></div>

note: you have to change the dataset id to the one you want to show, also remember to change the api key!

you can find the "set_id" like this:

- login to flickr.com
- go to: "You" > "Your Sets" 
- choose the set you want to make a gallery of
- look at the url, it will be something like: http://www.flickr.com/photos/makevoid/sets/72157604299605007/
- the SET_ID is the number in the url! (in my case 72157604299605007)


### configuration:

you can pass options to flickrGallery like the photo size and some [fancybox options](http://fancybox.net/api)
    
    $("#photos").flickrGallery(api_key, { size: 30, fancybox_options: {} })
  
### notes

feel free to fork the project and submit pull requests!