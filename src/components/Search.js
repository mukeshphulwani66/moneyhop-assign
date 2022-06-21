import React,{useState,useEffect} from 'react'

const Search = ({getGif}) => {
  const [query, setQuery] = useState("")

  useEffect(() => {
    if (query) {
      getGif(query)
    }
  }, [query])
  return (
    <input
    type="text"
    placeholder='search gif here'
    value={query}
    onChange={e => setQuery(e.target.value)}
  />
  )
}

export default Search