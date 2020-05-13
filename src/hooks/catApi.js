import {useEffect, useState} from 'react';

// This is using the cat api
function useCatApi(count) {
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
//     !IMPORTANT - deps if no defined it will run on every render, if empty it runs on init only, other wise it watches value
//     \/
  },[count])
  return {loading, data};
}

export default useCatApi