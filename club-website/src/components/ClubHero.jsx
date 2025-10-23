import './ClubHero.css';

function ClubHero({ logo, title, tagline, bgColor, accentColor }) {
  return (
    <div className="club-hero" style={{ background: bgColor }}>
      <div className="club-hero-content">
        <img src={logo} alt={title} className="club-hero-logo" />
        <h1 className="club-hero-title" style={{ color: accentColor }}>{title}</h1>
        {tagline && <p className="club-hero-tagline">{tagline}</p>}
      </div>
    </div>
  );
}

export default ClubHero;
