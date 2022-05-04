var dogShop = [
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
    description:'Thor'
  },
  {
    title: 'Dogs',
    image: './dog18petstore.jpg',
    price: '$4,000-$6,000',
    description:'Thor'
  },
  
  ]
  
  var dogHTML = " "







  for (var i=0; i < dogShop.length; i++){
      var heading = '<div class="card ' + '"><h5>' + dogShop[i].title + '</h5>'
      var image = '<img class="card-img-top" src="' + dogShop[i].image + '"/'
      var price = '<p class="card-text"> $' + dogShop[i].price + '</p>'
      var description = '<div class="card-body"><p>'+ dogShop[i].description;
      var concatThis = heading + image + price + description;
      dogHTML = dogHTML + concatThis
  }
  document.getElementById('dogMarket').innerHTML = dogHTML
