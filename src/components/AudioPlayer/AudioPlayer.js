import React from 'react'
import imellow from './imellow.mp3'

class AudioPlayer extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src={imellow} controls autoPlay/>
      </div>
    );
  }
}

export default AudioPlayer;