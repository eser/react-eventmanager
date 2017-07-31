"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = require("es6-eventemitter/lib/esm");
const eventEmitter = new esm_1.EventEmitter();
class EventManager {
    static subscription(mapping) {
        return function (target) {
            return class extends target {
                componentDidMount() {
                    for (const eventName in mapping) {
                        eventEmitter.on(eventName, this[mapping[eventName]].bind(this));
                    }
                    if (super['componentDidMount'] !== undefined) {
                        super['componentDidMount'].apply(this, arguments);
                    }
                }
                componentWillUnmount() {
                    for (const eventName in mapping) {
                        eventEmitter.off(eventName, this[mapping[eventName]].bind(this));
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
exports.default = EventManager;
//# sourceMappingURL=EventManager.js.map