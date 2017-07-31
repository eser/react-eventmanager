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

To handle events in React view:

```js
import * as React from 'react';
import eventManager from 'react-eventmanager';

@eventManager.subscription({
    sessionChanged: 'onSessionChanged'
})
class SampleContainer extends React.Component {
    constructor() {
        super();

        this.state = {
            userName: 'User-1'
        };
    }

    onSessionChanged(userName) {
        this.setState({
            userName: userName
        });
    }

    render() {
        return (
            <div>
                {this.state.userName}
            </div>
        );
    }
}
```

To invoke a change:

```js
import eventManager from 'react-eventmanager';

eventManager.emit('sessionChanged', { userName: 'Eser Ozvataf' });
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
