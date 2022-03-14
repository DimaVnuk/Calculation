import React, { Component } from "react";

export default class SettingPage extends Component {
  handleClear = () => {
    localStorage.clear();
  };
  render() {
    const selected = localStorage.getItem("Color");
    return (
      <div className="setting-cont">
        <p className="setting-cont_title">Settings</p>
        <div>
          <p className="title-theme">Switch Theme</p>
          <select
            defaultValue={selected}
            className="dropdown-theme"
            onChange={this.props.changeTheme}
          >
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
            <option value="colored">Colored Theme</option>
          </select>
        </div>
        <div>
          <button className="btn-clear" onClick={this.handleClear}>
            Clear All History
          </button>
        </div>
      </div>
    );
  }
}
