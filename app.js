//dog shop codes
var dogShop = [
  {
    title: 'Dogs',
    image: './dog14petstore.jpg',
    price: '1,100-$1,500',
    description:'Edward'
  },
  {
    title: 'Dogs',
    image: './dog16petstore.jpg',
    price: '3,000-$4,500',
    description:'Bruno'
  },
  {
    title: 'Dogs',
    image: './dog19petstore.jpg',
    price: '1,500-$2,500',
    description:'Hikaru'
  },
  {
    title: 'Dogs',
    image: './dog5petstore.jpg',
    price: '1,500-$2,500',
    description:'Kaoru'
  },
  {
    title: 'Dogs',
    image: './dog13petstore.jpg',
    price: '850-$1,500',
    description:'Scooter'
  },
  
  {
    title: 'Dogs',
    image: './dog17petstore.jpg',
    price: '1,500-$3,000',
    description:'Renji'
  },
  
  {
    title: 'Dogs',
    image: './dog3petstore.jpg',
    price: '1,200-$2,300',
    description:'Hunter'
  },
  
  {
    title: 'Dogs',
    image: './dog6petsstore.jpg',
    price: '2,000-$3,800',
    description:'Chloe'
  },
  
  {
    title: 'Dogs',
    image: './dog11petstore.jpg',
    price: '2,000-$4,500',
    description:'Thor'
  },
  
  {
    title: 'Dogs',
    image: './dog12petstore.jpg',
    price: '3,000-$5,500',
    description:'Panda'
  },
  {
    title: 'Dogs',
    image: './dog15petstore.jpg',
    price: '2,500-$4,500',
    description:'Skittles'
  },
  {
    title: 'Dogs',
    image: './dog18petstore.jpg',
    price: '2,000-$4,500',
    description:'Loki'
  },
  
  ]
  
  var dogHTML = " "







  for (var i=0; i < dogShop.length; i++){
      var heading = '<div class="card dogs' + '" ><h5>' + dogShop[i].title + '</h5>'
      var image = '<img class="card-img-top" src="' + dogShop[i].image + '"/ />'
      var price = '<p class="card-text"> $' + dogShop[i].price + '</p>'
      var description = '<div class="card-body"><p>'+ dogShop[i].description + "</p></div></div>";
      var concatThis = heading + image + price + description;
      dogHTML = dogHTML + concatThis
  }
  document.getElementById('dogMarket').innerHTML = dogHTML

  //cat shop codes

  var catShop = [
    {
      title: 'Cats',
      image: './cat8petstore.jpg',
      price: '1,000-$2,800',
      description:'Neko'
    },
    {
      title: 'Cats',
      image: './cat15petstore.jpg',
      price: '2,000-$2,300',
      description:'Chise'
    },
    {
      title: 'Cats',
      image: './cat17petstore (1).jpg',
      price: '1,500-$2,500',
      description:'Mirabel'
    },
    {
      title: 'Cats',
      image: './cat4petstore.jpg',
      price: '2,500-$4,500',
      description:'Tsuna'
    },
    {
      title: 'Cats',
      image: './cat13petstore.jpg',
      price: '1,400-$2,800',
      description:'Deidara'
    },
    {
      title: 'Cats',
      image: './cat3petstore.jpg',
      price: '2,100-$3,300',
      description:'Sasuke'
    },
    {
      title: 'Cats',
      image: './cat7petstore.jpg',
      price: '3,000-$4,000',
      description:'Shiro'
    },
    {
      title: 'Cats',
      image: './cat9petstore.jpg',
      price: '2,500-$4,300',
      description:'Anya'
    },
    {
      title: 'Cats',
      image: './cat10petstore.jpg',
      price: '2,000-$4,500',
      description:'Max'
    },
    
    {
      title: 'Cats',
      image: './cat1petstore.jpg',
      price: '3,000-$5,500',
      description:'Waffles'
    },
    {
      title: 'Cats',
      image: './cat16petstore.jpg',
      price: '2,500-$4,500',
      description:'Snickers'
    },
    {
      title: 'Cats',
      image: './cat12petstore.jpg',
      price: '4,000-$6,000',
      description:'Loki'
    },
    
    ]
    
    var catHTML = " "
  
  
  
  
  
  
  
    for (var i=0; i < catShop.length; i++){
        var heading = '<div class="card ' + '"><h5>' + catShop[i].title + '</h5>'
        var image = '<img class="card-img-top" src="' + catShop[i].image + '"/ />'
        var price = '<p class="card-text"> $' + catShop[i].price 
        var description = '<div class="card-body"><p>'+ catShop[i].description + "</p></div></div>";
        var concatThis = heading + image + price + description;
        catHTML = catHTML + concatThis
    }
    document.getElementById('catMarket').innerHTML = catHTML

    //fish shop codes

    var fishShop = [
      {
        title: 'Fish',
        image: './fish10petstore.jpg',
        price: '450-$600',
        description:'Apollo'
      },
      {
        title: 'Fish',
        image: './fish3petstore.jpg',
        price: '200-$300',
        description:'Gus'
      },
      {
        title: 'Fish',
        image: './fish9petstore.jpg',
        price: '375-$550',
        description:'Props'
      },
      {
        title: 'Fish',
        image: './fish1petstore.jpg',
        price: '350-$425',
        description:'Render'
      },
      {
        title: 'Fish',
        image: './fish2petstore.jpg',
        price: '350-$500',
        description:'Nico'
      },
      
      {
        title: 'Fish',
        image: './fish7petstore.jpg',
        price: '400-$550',
        description:'Armin'
      },
      
      {
        title: 'Fish',
        image: './fish6petstore.jpg',
        price: '500-$800',
        description:'Eren'
      },
      
      {
        title: 'Fish',
        image: './fish4petstore.jpg',
        price: '600-$1,100',
        description:'Pebbles'
      },
      
      {
        title: 'Fish',
        image: './fish11petstore.jpg',
        price: '1,500-$2,100',
        description:'Goku'
      },
      
      {
        title: 'Fish',
        image: './fish5petstore.jpg',
        price: '1,800-$2,400',
        description:'Belle'
      },
      {
        title: 'Fish',
        image: './fish13petstore.jpg',
        price: '1,100-$2,500',
        description:'Dot'
      },
      {
        title: 'Fish',
        image: './fish8petstore.jpg',
        price: '2,400-$3,500',
        description:'Rukia'
      },
      
      ]
      
      var fishHTML = " "
    
    



    
      for (var i=0; i < fishShop.length; i++){
          var heading = '<div class="card ' + '"><h5>' + fishShop[i].title + '</h5>'
          var image = '<img class="card-img-top" src="' + fishShop[i].image + '"/ />'
          var price = '<p class="card-text"> $' + fishShop[i].price 
          var description = '<div class="card-body"><p>'+ fishShop[i].description + "</p></div></div>";
          var concatThis = heading + image + price + description;
          fishHTML = fishHTML + concatThis
      }
      document.getElementById('fishMarket').innerHTML = fishHTML




    