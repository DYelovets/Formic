import './styles.css';
import Component from './Component';
import useless, * as MyMath from './math';

const container = document.getElementById('root');

console.log(Component);
const result = MyMath.pow(150, 5);
console.log(MyMath.div(50, 150));

console.log(useless());
