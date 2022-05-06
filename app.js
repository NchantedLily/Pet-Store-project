//dog shop codes
var dogShop = [
  {
    title: 'Dogs',
    image: './dog13petstore.jpg',
    price: '$2,000-$4,500',
    description:'Panda'
  },
  
  {
    title: 'Dogs',
    image: './dog17petstore.jpg',
    price: '$2,000-$4,500',
    description:'Panda'
  },
  
  {
    title: 'Dogs',
    image: './dog3petstore.jpg',
    price: '$2,000-$4,500',
    description:'Panda'
  },
  
  {
    title: 'Dogs',
    image: './dog6petsstore.jpg',
    price: '$2,000-$4,500',
    description:'Panda'
  },
  
  {
    title: 'Dogs',
    image: './dog11petstore.jpg',
    price: '$2,000-$4,500',
    description:'Panda'
  },
  
  {
    title: 'Dogs',
    image: './dog12petstore.jpg',
    price: '$3,000-$5,500',
    description:'Thor'
  },
  {
    title: 'Dogs',
    image: './dog15petstore.jpg',
    price: '$2,500-$4,500',
    description:'Skittles'
  },
  {
    title: 'Dogs',
    image: './dog18petstore.jpg',
    price: '$4,000-$6,000',
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
      image: './cat13petstore.jpg',
      price: '$2,000-$4,500',
      description:'Max'
    },
    {
      title: 'Cats',
      image: './cat3petstore.jpg',
      price: '$2,000-$4,500',
      description:'Max'
    },
    {
      title: 'Cats',
      image: './cat7petstore.jpg',
      price: '$2,000-$4,500',
      description:'Max'
    },
    {
      title: 'Cats',
      image: './cat9petstore.jpg',
      price: '$2,000-$4,500',
      description:'Max'
    },
    {
      title: 'Cats',
      image: './cat10petstore.jpg',
      price: '$2,000-$4,500',
      description:'Max'
    },
    
    {
      title: 'Cats',
      image: './cat1petstore.jpg',
      price: '$3,000-$5,500',
      description:'Waffles'
    },
    {
      title: 'Cats',
      image: './cat16petstore.jpg',
      price: '$2,500-$4,500',
      description:'Skittles'
    },
    {
      title: 'Cats',
      image: './cat12petstore.jpg',
      price: '$4,000-$6,000',
      description:'Loki'
    },
    
    ]
    
    var catHTML = " "
  
  
  
  
  
  
  
    for (var i=0; i < catShop.length; i++){
        var heading = '<div class="card ' + '"><h5>' + catShop[i].title + '</h5>'
        var image = '<img class="card-img-top" src="' + catShop[i].image + '"/ />'
        var price = '<p class="card-text"> $' + catShop[i].price + "</p></div></div>";
        var description = '<div class="card-body"><p>'+ catShop[i].description;
        var concatThis = heading + image + price + description;
        catHTML = catHTML + concatThis
    }
    document.getElementById('catMarket').innerHTML = catHTML

    //fish shop codes

    var fishShop = [
      {
        title: 'Fish',
        image: './fish2petstore.jpg',
        price: '$2,000-$4,500',
        description:'Nico'
      },
      
      {
        title: 'Fish',
        image: './fish7petstore.jpg',
        price: '$2,000-$4,500',
        description:'Nico'
      },
      
      {
        title: 'Fish',
        image: './fish6petstore.jpg',
        price: '$2,000-$4,500',
        description:'Nico'
      },
      
      {
        title: 'Fish',
        image: './fish4petstore.jpg',
        price: '$2,000-$4,500',
        description:'Nico'
      },
      
      {
        title: 'Fish',
        image: './fish11petstore.jpg',
        price: '$2,000-$4,500',
        description:'Nico'
      },
      
      {
        title: 'Fish',
        image: './fish5petstore.jpg',
        price: '$3,000-$5,500',
        description:'Belle'
      },
      {
        title: 'Fish',
        image: './fish13petstore.jpg',
        price: '$2,500-$4,500',
        description:'Dot'
      },
      {
        title: 'Fish',
        image: './fish8petstore.jpg',
        price: '$4,000-$6,000',
        description:'Rukia'
      },
      
      ]
      
      var fishHTML = " "
    
    
    
    
    
    
    
      for (var i=0; i < fishShop.length; i++){
          var heading = '<div class="card ' + '"><h5>' + fishShop[i].title + '</h5>'
          var image = '<img class="card-img-top" src="' + fishShop[i].image + '"/ />'
          var price = '<p class="card-text"> $' + fishShop[i].price + "</p></div></div>";
          var description = '<div class="card-body"><p>'+ fishShop[i].description;
          var concatThis = heading + image + price + description;
          fishHTML = fishHTML + concatThis
      }
      document.getElementById('fishMarket').innerHTML = fishHTML
