import React from 'react'
import memesData from '../memesData'

const Meme = () => {
  // const [memeImage, setMemeImage] = React.useState('')

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: ""
  })
  const [allMemeImages, setAllMemeImages] =React.useState(memesData.data.memes)

  const handleSubmit = (e) => {
    e.preventDefault()
    const randIndex = Math.floor(Math.random() * allMemeImages.length)
    console.log(allMemeImages[randIndex].url)
    setMeme(prevState =>({
      ...prevState, randomImage: allMemeImages[randIndex].url
    }))
  }


  return (
    <main>
      <form className="form">
        <input
          type="text"
          className='form--input'
          placeholder="Top text"
        />
        <input
          type="text"
          className='form--input'
          placeholder="Bottom text"
        />
        <button
          className='form--button'
          onClick={handleSubmit}
        >Get a new meme image 🖼</button>
      {meme.randomImage && <img className='meme--image' src={meme.randomImage} alt='meme' />}
      </form>
    </main>
  )
}


export default Meme