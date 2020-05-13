import {ADD_FEATURE, REMOVE_FEATURE } from "../actions/CarActions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2019-ford-mustang-bullitt-99leadgallery-1536965630.jpg?crop=1.00xw:0.923xh;0,0.0769xh&resize=2048:*",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const CarReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      const addedFeatures = state.additionalFeatures.filter(feature => {
        return feature.id !== action.payload.id
      }) 
        return {
          ...state,
          car: {
            ...state.car,
            price: state.car.price + action.payload.price,
            features: [...state.car.features, action.payload]
          },
          additionalFeatures: addedFeatures

        }
        case REMOVE_FEATURE:
          const removedFeatures = state.car.features.filter(feature => {
            return feature.id !== action.payload.id
          })
          return {
            ...state,
            car: {
              ...state.car,
              price: state.car.price - action.payload.price,
              features: removedFeatures
            },
            additionalFeatures: [...state.additionalFeatures, action.payload]
          }
    default:
      return state;
  }
};
