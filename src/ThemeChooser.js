import React from 'react';

const themes = ['default', 'yeti', 'superhero', 'paper', 'lumen', 'darkly',
                'simplex', 'cerulean', 'sandstone', 'cosmo', 'cyborg', 'slate',
                'flatly', 'journal', 'readable', 'spacelab', 'united'].sort();

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.substring(1);
}

class ThemeChooser extends React.Component {
  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
    this.doCallback = this.doCallback.bind(this);
  }

  doCallback() {
  }

  onSelect(e) {
    e.preventDefault();
    let chosenTheme = e.target.getAttribute('data-theme');
    this.context.themeSwitcher.load(chosenTheme);
  }

  render() {
    const menu =
      <div className="dropdown dropdown-menu-right">
        <button className="btn btn-default dropdown-toggle" type="button" id="theme-menu"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          Select Theme
          &nbsp;<span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          {themes.map((theme) => {
            //var active = (theme === currentTheme ? 'active' : '');
            var active = '';
            return <li key={theme} className={active}>
              <a href="#" data-theme={theme} onClick={this.onSelect}>{capitalize(theme)}</a>
            </li>
          })}
        </ul>
      </div>

    return menu;
  }
}

ThemeChooser.contextTypes = {
  themeSwitcher: React.PropTypes.object
};

export { ThemeChooser };
