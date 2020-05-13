import {useState} from 'react'

function useCountState(initial) {
  return useState(initial);
}

export default useCountState;