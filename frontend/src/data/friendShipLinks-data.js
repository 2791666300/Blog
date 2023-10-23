class FriendShipLink {
    constructor(linkName, href, imgsrc, imgAlt) {
        this.linkName = linkName;
        this.href = href;
        this.imgsrc = imgsrc;
        this.imgAlt = imgAlt;
    }
}

const DefaultFriendShipLinks = [
    new FriendShipLink(
        'React',
        'https://zh-hans.reactjs.org/docs/getting-started.html',
        '/imgLink/react.png',
        'React',
    ),
    new FriendShipLink(
        'ReactNative', 
        'https://www.reactnative.cn/',
        '/imgLink/reactnative.png',
        'ReactNative',
    ),
    new FriendShipLink(
        'reactNativegation',
        'https://reactnavigation.org/',
        '/imgLink/reactnavigation.jpg',
        'reactNativegation',

    ),
    new FriendShipLink(
        'Vue',
        'https://cn.vuejs.org/',
        '/imgLink/vue.jpeg',
        'Vue'
    ),
    new FriendShipLink(
        'Node',
        'https://nodejs.org/zh-cn/docs/',
        '/imgLink/node.png',
        'Node'
    ),
    new FriendShipLink(
        'JWT',
        'https://jwt.io/',
        '/imgLink/jwt.png',
        'JWT'
    ),
    new FriendShipLink(
        'Expo',
        'https://expo.dev/',
        '/imgLink/expo.jpg',
        'Expo'
    ),
    new FriendShipLink(
        'Iview',
        'https://www.iviewui.com/',
        '/imgLink/iview.jpeg',
        'Iview'
    ),
    new FriendShipLink(
        'Element',
        'https://element.eleme.cn/#/zh-CN/component/installation',
        '/imgLink/element.png',
        'Element'
    ),
    new FriendShipLink(
        'Netlify',
        'https://app.netlify.com/',
        '/imgLink/netlify.png',
        'Netlify'
    )
]

export default DefaultFriendShipLinks