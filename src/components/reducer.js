export default function reducer(state, action) {

    switch (action.type) {
      case "image/increaseSize":
        return {
            ...state,
            image: {
                width: state.image.width * (1+action.payload),
                height: state.image.height * (1+action.payload)
            }
        };
        case "image/decreaseSize":
            return {
                ...state,
                image: {
                    width: state.image.width * (1-action.payload),
                    height: state.image.height * (1-action.payload)
                }
            };
    }
  
    return state;
  }