import {useEffect} from 'react'
// make sure you destructure below won't work
// import useEffect from 'react'

function useSetTitle(count){
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });
}
export default useSetTitle;