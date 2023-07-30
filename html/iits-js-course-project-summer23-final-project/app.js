const item = [

{
    category : "Coffee",
    Image :https://medien.bremen.de/media/464/288/cappuccino.jpg,
title : Expresso, 
description:"Refreshing and taking out your stress.",
cartbtn : "Add to cart",
id : 1,
},
{
    category : "Burger",
    Image : https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg,
title : Chicken Burgers,
description:"Juicy, big, loaded with toppings of my choice.High quality beef medium to well with cheese and bacon on a multigrain bun.",
cartbtn : "Add to cart",
id : 1,
},
{
  category : "Coffee",
  Image :https://medien.bremen.de/media/464/288/cappuccino.jpg,
title : Expresso ,
description:"Refreshing and taking out your stress.",
cartbtn : "Add to cart",
id : 1,
},
{
    category : "Burger",
    Image : https://www.chicken.ca/wp-content/uploads/2013/05/Moist-Chicken-Burgers-1180x580.jpg,
title : Chicken Burgers,
description:"Juicy, big, loaded with toppings of my choice.High quality beef medium to well with cheese and bacon on a multigrain bun.",
cartbtn : "Add to cart",
id : 1,
}

];
function showfood(food)
{
  return ` <div class="item col-md-6 col-lg-4 p-3" data-category="coffee">
  <div class="card">
    <div class="img-container">
      <img src="${food.Image}" alt="Coffee" />
      <span class="category-pill">${food.category}</span>
    </div>
    <div class="card-body">
      <h5 class="card-title">${food.title}</h5>
      <p class="card-text">${food.description}</p>
  
  
      <button class="addToCartBtn btn w-100">${food.Cartbtn}</button>
    </div>
  </div>
  </div>
  `;
}


const allItem = document.getElementById("iits-items")

function renderItem()
{
    allItem.innerHTML = '';
   item.map(function(food){
allItem.innerHTML = allItem.innerHTML + showfood(food);
   }) 
}
renderItem();
