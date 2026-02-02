document.getElementsByTagName('fruits-container')
document.getElementsByTagName('fruits-container')[0]
document.getElementsByTagName('fruits-container')[0].innerHTML
// set inner 
document.getElementsByTagName('fruits-container')[0].innerHTML=''


const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1> My dynamic section</h1>
    <p>Extra text added inside paragraph</p>
    <ul>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
        <li>first item</li>
    </ul>
`
main.appendChild(section);