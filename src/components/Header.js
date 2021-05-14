import React, { useState } from 'react';
import Link from './Link';
const Header = ({ active }) => {
  const [activeHeader, setActiveHeader] = useState(active);

  return (
    <div className="ui secondary pointing menu">
      <Link
        href="/images"
        className={`item ${activeHeader === 'images' ? 'active' : ''}`}
        onLinkClick={() => setActiveHeader('images')}
      >
        Image Search
      </Link>
      <Link
        href="/youtube"
        className={`item ${activeHeader === 'youtube' ? 'active' : ''}`}
        onLinkClick={() => setActiveHeader('youtube')}
      >
        YouTube Search
      </Link>
      <Link
        href="/wiki"
        className={`item ${activeHeader === 'wiki' ? 'active' : ''}`}
        onLinkClick={() => setActiveHeader('wiki')}
      >
        Wiki Search
      </Link>
      <Link
        href="/weather"
        className={`item ${activeHeader === 'weather' ? 'active' : ''}`}
        onLinkClick={() => setActiveHeader('weather')}
      >
        My Weather
      </Link>
      <Link
        href="/translate"
        className={`item ${activeHeader === 'translate' ? 'active' : ''}`}
        onLinkClick={() => setActiveHeader('translate')}
      >
        Translate
      </Link>
      <Link
        href="/blog"
        className={`item ${activeHeader === 'blog' ? 'active' : ''}`}
        onLinkClick={() => setActiveHeader('blog')}
      >
        Blog
      </Link>
    </div>
  );
};

export default Header;
