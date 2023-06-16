/*import React, { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count +1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}*/

/*Diferentes Use...
1) useState
2) useEffect
3) useContext
4) useRef
5) useReducer
6) useMemo - Para mejorar el performance de la app. Memoriza un valor
7) useCallback - Para mejorar el performance de la app. Memoriza una función
8) useLayoutEffect */