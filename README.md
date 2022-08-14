# test-react-redux-2

## Description
- Online store simulation with cart and items to add to cart. 
- Cart badge indicate number of items in cart
- Click on cart reveal/hide Cart component with list of items iside
- Calculated total price for all similar items in cart
- Press on Add to cart - adds item pressed to cart
- Ability to increase and decrease item quantity from cart
- Items data taken from dummy files
- Check how all components interact with store to get data and use actions

## Topics tested 
- Cart badge take total items from store
- Add to cart and + dispatch action to add
- - dispatch action to remove
- Shoping cart access items from store


## Components
- App which renders:
  - Layout - wrapper which render:
    - MainHeader
      - CartButton
  - Cart (if isShown true) render:
    - Card - wrapper
    - CartItem
  - Products - import dummy array and map it to items which render:
    - ProductsItem
- Card - UI for card to show children 

## Store
- index
  - cartIsShown
  - cartItems [{},{},{}...]
  - totalQuantity
  - toggleCartShown()
  - addItemToCart()
    - find item and update if exist
  - removeItemFromCart()
    - find item and update if not 1

