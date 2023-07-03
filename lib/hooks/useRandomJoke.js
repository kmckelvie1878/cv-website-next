import { useState, useEffect } from 'react';

function useRandomJoke(instance) {
  const [setup, setSetup] = useState('')
  const [joke, setJoke] = useState('')
  

  useEffect(() => {
    const fetchJoke = async () => {
      // fetch('https://api.chucknorris.io/jokes/random')
      fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(data => {
          setSetup(data.setup)
          setJoke(data.punchline)
          console.log(data)
        })
    }
    fetchJoke()
  }, [instance])
  return {setup, joke}
}

export default useRandomJoke