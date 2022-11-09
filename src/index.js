import _ from 'lodash';
import "./style.scss";

const element = document.getElementById('content');
element.innerHTML = _.join(['Hello', 'webpack'], ' ');