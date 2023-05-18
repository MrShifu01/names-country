import '../index.css'
import { useState, useRef, useEffect } from 'react'

export default function Main() {
  const [country, setCountry] = useState('')
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  async function fetchCountry(name) {
    let res = await fetch(`https://api.nationalize.io?name=${name}`)
    let data = await res.json()

    let newCountry = data.country[0].country_id
    setCountry(newCountry)
  }

  async function handleClick() {
    const newName = inputRef.current.value
    await fetchCountry(newName)
  }

  return (
    <>
      <button onClick={handleClick}>Hit Me</button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <h1>The Country you are from is: {country}</h1>
    </>
  )
}
