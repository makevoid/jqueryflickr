// -------------------------------------
//    jQueryFlickr - get flickr photos by photoset and outputs fancybox gallery
// ------------------------------------- 
//  
// contact @makevoid for feature requests and bugfixes

function Photos() {
  this.all = []
  
  this.add = function (photo){
    this.all.push(photo)
  }
  
  this.randomized = function (){
    return this.all.sort(randOrd)
  }
  
  // non public
  function randOrd() {
    return Math.round(Math.random()) - 0.5
  }
}

var photos = new Photos()

function photo_url(photo, size) {
  return "http://farm"+photo.farm+".static.flickr.com/"+photo.server+"/"+photo.id+"_"+photo.secret+"_"+size+".jpg" 
}

function FlickrGallery() {
  
  this.init = function(tag, api_key, options) {
    this.elem = tag
    if (options == undefined) {
      options = {}
      options.size = 20
      options.fancybox_options = {}
    }
    this.photo_size = options.size
    this.fancybox_options = options.fancybox_options
    
    var photoset_id = this.elem.attr("data-set_id")
    var api_url = "http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key="+api_key+"&photoset_id="+photoset_id+"&format=json&nojsoncallback=1"
    
    var self = this
    
    $.getJSON(api_url, function(data) {
      
      if (data.photoset == undefined)
        console.log("Error loading the flickr photoset!")
        
      $.each(data.photoset.photo, function(idx, photo) {
        photos.add(photo)
      })
      
      self.render_images()
      
    })
  }
  
  this.render_images = function() {
    var self = this
    $.each(photos.randomized(), function(idx, photo) {
      klass = ""
      if (idx == 0)
        klass = " first"
      self.elem.append("<a rel='group' class='fancybox"+klass+"' href='"+photo_url(photo, "b")+"'><img src='"+photo_url(photo, "s")+"'></a>")

      $("a.fancybox").fancybox(self.fancybox_options)

      if (idx+1 >= self.photo_size)
        return false
    })
  }
}


$.fn.flickrGallery = function(api_key, options) {
  
  if (this.length != 0){
    var gallery = new FlickrGallery()
    console.log(this)
    gallery.init(this, api_key, options)
  }

}