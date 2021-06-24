// @ts-nocheck
export const initialState = {
  basket: [],
  user: null,
  location: 'Nigeria'
};

// reducer is of type: (state, action) => state
// i.e. it takes a state and an action and returns a new state
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Check if item is in the basket
      const index1 = state.basket.findIndex(
        basketId => basketId["id"] === action.item.id
      );
      // let quantity: any;
      // If item is in the basket, check quantity
      if (index1 !== -1) {
        // This will execute if there is same item already in the basket
        state.basket[index1].quantity++;
        return {
          ...state,
          basket: [...state.basket]
        };
      }
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "REMOVE_FROM_BASKET":
      // Check if item is in the basket
      // If item is in the basket, check quantity
      // If quantity is 1, remove from basket
      // else remove 1
      const index = state.basket.findIndex(
        basketItem => basketItem["id"] === action.id
      );

      //// We can implement it this way
      // let newBasket = [...state.basket];
      // filter over the basket and remove anyitem that matches the index

      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } else {
      //   console.warn(
      //     `Can't remove product {id: ${action.id} as its not in basket!`
      //   );
      // }

      return {
        ...state,
        // or we can implement it this way
        basket: state.basket.filter((_, i) => i !== index)
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case 'SET_LOCATION':
      return {
        ...state,
        location: action.location
      }
    default:
      return state;
  }
};

export default reducer;
