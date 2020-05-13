import {useEffect, useState} from 'react';

// This is using the cat api
function useCatApi() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null)
  useEffect(()=>{
    async function getCats() {
      setLoading(true)
      const response = await fetch(
        'https://api.thecatapi.com/v1/images/search'
      )
      const data = await response.json()
      console.log(data);
      setData(data)
      setLoading(false);
    }
    getCats()
  },[])
  return {loading, data};
}

export default useCatApi