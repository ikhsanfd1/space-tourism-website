import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleHamburgerMenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsHamburgerMenuOpen((prev) => !prev);
  };

  const closeHamburgerMenu = () => {
    setIsHamburgerMenuOpen(false);
  };

  const handleScroll = () => {
    setScrolled(window.scrollY > 100);
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100; // Adjust for the header height

    sections.forEach((section) => {
      if (
        section.offsetTop <= scrollPos &&
        section.offsetTop + section.offsetHeight > scrollPos
      ) {
        setActiveTab(section.getAttribute('id'));
      }
    });
  };

  useEffect(() => {
    document.addEventListener('click', closeHamburgerMenu);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', closeHamburgerMenu);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar -mt-4 ${scrolled ? 'scrolled' : ''}`}>
      <div className="flex-2 py-6">
        <img src="/shared/logo.svg" alt="logo" />
      </div>
      <div className="flex-1 h-px ms-6 -me-8 z-10 sm:bg-transparent md:bg-transparent lg:bg-white"></div>
      <div className="flex-none">
        <a
          className="hmb-toggle text-3xl"
          href="#"
          onClick={toggleHamburgerMenu}
        >
          ☰
        </a>
        <nav className="header">
          <ul
            className={`flex items-center py-4 px-1 bg-[#979797] rounded-md barlow-condensed-light text-xl pe-24 ps-10 text-white font-bold ${
              isHamburgerMenuOpen ? 'slide' : ''
            }`}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(50px)',
            }}
          >
            <li>
              <a
                href="#home"
                className={`tab text-white text-xl ${
                  activeTab === 'home'
                    ? 'border-b-2 rounded-none border-white'
                    : ''
                }`}
                onClick={() => setActiveTab('home')}
              >
                <span className="font-bold me-1">00</span> HOME
              </a>
            </li>
            <li>
              <a
                href="#destination"
                className={`tab text-white text-xl ${
                  activeTab === 'destination'
                    ? 'border-b-2 rounded-none border-white'
                    : ''
                }`}
                onClick={() => setActiveTab('destination')}
              >
                <span className="font-bold me-1">01</span> DESTINATION
              </a>
            </li>
            <li>
              <a
                href="#crew"
                className={`tab text-white text-xl ${
                  activeTab === 'crew'
                    ? 'border-b-2 rounded-none border-white'
                    : ''
                }`}
                onClick={() => setActiveTab('crew')}
              >
                <span className="font-bold me-1">02</span> CREW
              </a>
            </li>
            <li>
              <a
                href="#technology"
                className={`tab text-white text-xl ${
                  activeTab === 'technology'
                    ? 'border-b-2 rounded-none border-white'
                    : ''
                }`}
                onClick={() => setActiveTab('technology')}
              >
                <span className="font-bold me-1">03</span> TECHNOLOGY
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
