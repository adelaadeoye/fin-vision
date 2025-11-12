import { useState, useRef } from 'react'
import './Features.css'

function Features() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)

  const handlePlayVideo = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = false
        await videoRef.current.play()
        setIsPlaying(true)
        setShowPlayButton(false)
      } catch (err) {
        console.log('Play failed:', err)
      }
    }
  }

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="features-title">Watch Our Pitch</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-video">
              {showPlayButton && (
                <button className="play-button-overlay" onClick={handlePlayVideo}>
                  <div className="play-icon">▶</div>
                  <span>Click to Play with Audio</span>
                </button>
              )}
              <video 
                ref={videoRef}
                loop 
                playsInline
                controls
                className="feature-video-player"
              >
                <source src="/PitchVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="feature-icon">🎬</div>
            <h3>Our Pitch Video</h3>
            <p>Watch our complete pitch presentation to learn more about our vision and goals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
