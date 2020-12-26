import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Title.jsをインポートする。
import Title from './components/Title/Title';



class App extends Component {

  // イベントハンドラー
  onClickHandler = () => {
    // 「Hello World」のh2タグをここで取得
    let title = document.getElementById('versionStatement');
    // 「upgrade」のpタグをここで取得
    let upgradeButton = document.getElementById('upgradeButton');
    // 取得したh２タグのテキストを変更
    title.textContent = "Hello World 4.0";
    // 取得したpタグを非表示にする。
    upgradeButton.style.display = "none";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title
            title="Hello World 3.0"
            titleStyle={{color: 'orange'}}
            onClick={this.onClickHandler}
          />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
