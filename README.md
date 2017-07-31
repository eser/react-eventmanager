# [React-EventManager](https://github.com/eserozvataf/react-eventmanager)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the React-EventManager?

React-EventManager is an alternative method of handling states on React views.


## Quick start

Execute `npm install react-eventmanager` to install react-eventmanager and its dependencies into your project directory.


## Usage

```js
import eventManager from 'react-eventmanager';

@eventManager.subscription({
    sessionChanged: 'onSessionChanged'
})
class SampleContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {
                name: 'User-1'
            }
        };
    }

    onSessionChanged(user) {
        console.log(user);

        this.setState({
            user: user
        });
    }

    render() {
        return (
            <div>
                {this.state.user.name}
            </div>
        );
    }
}
```


## Todo List

See [GitHub Projects](https://github.com/eserozvataf/react-eventmanager/projects) for more.


## Requirements

* node.js (https://nodejs.org/)


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/react-eventmanager/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)


[npm-image]: https://img.shields.io/npm/v/react-eventmanager.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-eventmanager
[download-image]: https://img.shields.io/npm/dt/react-eventmanager.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/react-eventmanager.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/react-eventmanager
[license-image]: https://img.shields.io/npm/l/react-eventmanager.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/react-eventmanager/blob/master/LICENSE
