import React from 'react'

const Meme = () => {
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
        {/* <input className='form--button' type='submit' value="Get a new meme image 🖼" /> */}
        <button className='form--button'>Get a new meme image 🖼</button>
      </form>
    </main>
  )
}

export default Meme