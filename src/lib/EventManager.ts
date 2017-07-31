import { EventEmitter } from 'es6-eventemitter/lib/esm';

type EventManagedType = {
    // componentDidMount?(): void;
    // componentWillUnmount?(): void;
};

type EventManagedTypeConstructor = {
    new(...args: any[]): EventManagedType;
};

class EventManager extends EventEmitter {
    subscription(mapping: { [key: string]: string }) {
        const self = this;

        return function<T extends EventManagedTypeConstructor>(target: T) {
            return class extends target {
                componentDidMount(): void {
                    for (const eventName in mapping) {
                        self.on(eventName, this[mapping[eventName]].bind(this));
                    }

                    if (super['componentDidMount'] !== undefined) {
                        super['componentDidMount'].apply(this, arguments);
                    }
                }

                componentWillUnmount(): void {
                    for (const eventName in mapping) {
                        self.off(eventName, this[mapping[eventName]].bind(this));
                    }

                    if (super['componentWillUnmount'] !== undefined) {
                        super['componentWillUnmount'].apply(this, arguments);
                    }
                }
            }
        };
    }
}

const eventManager = new EventManager();

export {
    EventManager,
    eventManager
};

export default eventManager;
