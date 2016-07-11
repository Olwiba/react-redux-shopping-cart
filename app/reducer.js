import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  products: [
    {id: 1, name:'spaghetti'},
    {id: 2, name:'gold'},
    {id: 3, name:'rake'},
    {id: 4, name:'car'},
    {id: 5, name:'falcon'}
  ],
  cart: [1,4]
})

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return state.set('cart', state.get('cart').push(action.id))
    case 'REMOVE_PRODUCT_FROM_CART':
      const index = state.get('cart').indexOf(action.id)
      console.log('this is the index: ', index)
      return state.set('cart', state.get('cart').splice(index, 1))
    default:
      return state
  }
}
