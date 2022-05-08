export const initialState = {
    count: 0,
  }

export const countChange = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
          return {
            count: state.count + 1,
          }
        case 'DECREMENT':
          return {
            count: state.count - 1,
          }
        default:
          return state
      }
}
