export const Card = ({ BackgroundSVG, CompanysImage, data }) => {
  return (
    <div className="card">
      <div className="company">
        <div className="company-logo">
          <img src={CompanysImage} alt="company's logo" />
        </div>
        <div className="info">
          <div className="info-header">
            <h2 className="company-name">Photosnap</h2>
            <div className="adds-on">
              <span className="new-tag">new!</span>
              <span className="featured-tag">featured</span>
            </div>
          </div>
          <div className="info-body">
            <h2 className="job-role">Senior Frontend Developer</h2>
          </div>
          <div className="info-footer">
            <a className="job-info job-date">1d ago</a>
            <span className="dot">•</span>
            <a className="job-info job-type">Full Time</a>
            <span className="dot">•</span>
            <a className="job-info job-country">USA only</a>
          </div>
        </div>
      </div>
      <div className="tags">
        <h2 className="tag">Frontend</h2>
        <h2 className="tag">Senior</h2>
        <h2 className="tag">HTML</h2>
        <h2 className="tag">CSS</h2>
        <h2 className="tag">Javascript</h2>
      </div>
    </div>
  )
}
