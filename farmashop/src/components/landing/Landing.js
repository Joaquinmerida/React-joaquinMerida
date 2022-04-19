import React from 'react'
import ReactPlayer from 'react-player'
import Animation from './Animation'

const Landing = () => {

  return (
        <div className="landing">
            <ReactPlayer playing={true} muted={true} height="auto" width="100%" url="https://assets.mixkit.co/videos/preview/mixkit-pressing-down-on-a-bottle-of-perfume-20766-large.mp4" />
            <Animation/>
        </div>
  )
}

export default Landing