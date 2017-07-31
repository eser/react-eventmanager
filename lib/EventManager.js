"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = require("es6-eventemitter/lib/esm");
class EventManager extends esm_1.EventEmitter {
    subscription(mapping) {
        const self = this;
        return function (target) {
            return class extends target {
                componentDidMount() {
                    for (const eventName in mapping) {
                        self.on(eventName, this[mapping[eventName]].bind(this));
                    }
                    if (super['componentDidMount'] !== undefined) {
                        super['componentDidMount'].apply(this, arguments);
                    }
                }
                componentWillUnmount() {
                    for (const eventName in mapping) {
                        self.off(eventName, this[mapping[eventName]].bind(this));
                    }
                    if (super['componentWillUnmount'] !== undefined) {
                        super['componentWillUnmount'].apply(this, arguments);
                    }
                }
            };
        };
    }
}
exports.EventManager = EventManager;
const eventManager = new EventManager();
exports.eventManager = eventManager;
exports.default = eventManager;
//# sourceMappingURL=EventManager.js.map