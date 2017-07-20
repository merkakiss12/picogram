import React from 'react';
import Icon from '../components/icon';
import Logo from '../components/logo';
import Menu from '../components/menu';
import Like from '../components/like';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <Icon />
          <Logo name="Roberts"/>
        </header>
        <nav className="navigation">
          <Menu />
        </nav>
        <main className="content">
           Sveiks!
        </main>
        <footer className="footer">
          <p>&copy; 2017 Roberts</p>
        </footer>
      </div>
    );
  }
}

export default About;
