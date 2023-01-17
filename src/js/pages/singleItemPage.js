import singleItem from './../singleItem/singleItemController';

export default function (state) {
    document.querySelector('#app').innerHTML = '';

    singleItem(state);
}