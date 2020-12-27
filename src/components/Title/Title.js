// Title.js

// 外部のライブラリやファイルを参照するインポートの部分
import React from 'react';
import './Title.css';


// JSXやメソッドを定義する実質上の中身
const Title = (props) => {
 return(
    <div className="titleSection">
        <h2
        style={props.titleStyle}
        id="versionStatement"
        >{props.children}</h2>
    </div>
 );
}

// 外部のファイルがこのcomponentを利用できるようにするエクスポートの部分
export default Title;