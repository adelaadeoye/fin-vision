import { useState, useRef } from 'react'
import './Features.css'

function Features() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)

  const handlePlayVideo = async () => {
    if (videoRef.current) {
      try {
        // Unmute and show controls
        videoRef.current.muted = false
        videoRef.current.controls = true
        
        // Play the video
        await videoRef.current.play()
        setIsPlaying(true)
        setShowPlayButton(false)
      } catch (err) {
        console.error('Play failed:', err)
        // Fallback: try with muted if unmuted fails
        try {
          videoRef.current.muted = true
          videoRef.current.controls = true
          await videoRef.current.play()
          setIsPlaying(true)
          setShowPlayButton(false)
          alert('Video started muted. Click the volume icon to unmute.')
        } catch (mutedErr) {
          console.error('Muted play also failed:', mutedErr)
          alert('Unable to play video. Please try refreshing the page.')
        }
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
                playsInline
                preload="metadata"
                className="feature-video-player"
              >
                <source src="PitchVideo.mp4" type="video/mp4" />
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
