var menuLinks = [
    { text: 'about', href: '/about' },
    {
        text: 'catalog', href: '#', subLinks: [
            { text: 'all', href: '/catalog/all' },
            { text: 'top selling', href: '/catalog/top' },
            { text: 'search', href: '/catalog/search' },
        ]
    },
    {
        text: 'orders', href: '#', subLinks: [
            { text: 'new', href: '/orders/new' },
            { text: 'pending', href: '/orders/pending' },
            { text: 'history', href: '/orders/history' },
        ]
    },
    {
        text: 'account', href: '#', subLinks: [
            { text: 'profile', href: '/account/profile' },
            { text: 'sign out', href: '/account/signout' },
        ]
    },
];

let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)'

let h1 = document.createElement('h1');
h1.textContent = 'SEI Rocks!';

mainEl.appendChild(h1);

mainEl.classList = 'flex-ctr';

let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

topMenuEl.classList = 'flex-around';

for (let i = 0; i < menuLinks.length; i++) {
    let a = document.createElement('a');
    a.setAttribute('href', menuLinks[i].href)
    a.textContent = menuLinks[i].text;
    topMenuEl.appendChild(a);
}

let subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList = 'flex-around';
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

let showingSubMenu = false;

let topMenuLinks = document.querySelector('topMenuEl');
topMenuEl.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target.nodeName)
    if (e.target.nodeName !== 'A') {
        return
    } else {
        console.log(a);
    }
    if (e.target.classList.contains('active')) {
        e.target.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0'
        return;
    }
    topMenuLinks.classList.foreach(Element => {
        Element.classList.remove('active');
    })


});

// e.target.classList.add('active');
// let subLink;

// menuLinks.forEach(Element => {
//     if (Element.text === e.target.textContent) {
//         let link = Element; {
//             if (

//             )
//         }

//     }
// }
// )





