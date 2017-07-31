import { EventEmitter } from 'es6-eventemitter/lib/esm';

const eventEmitter = new EventEmitter();

type EventManagedType = {
    // componentDidMount?(): void;
    // componentWillUnmount?(): void;
};

type EventManagedTypeConstructor = {
    new(...args: any[]): EventManagedType;
};

class EventManager {
    static subscription(mapping: { [key: string]: string }) {
        return function<T extends EventManagedTypeConstructor>(target: T) {
            return class extends target {
                componentDidMount(): void {
                    for (const eventName in mapping) {
                        eventEmitter.on(eventName, this[mapping[eventName]].bind(this));
                    }

                    if (super['componentDidMount'] !== undefined) {
                        super['componentDidMount'].apply(this, arguments);
                    }
                }

                componentWillUnmount(): void {
                    for (const eventName in mapping) {
                        eventEmitter.off(eventName, this[mapping[eventName]].bind(this));
                    }

                    if (super['componentWillUnmount'] !== undefined) {
                        super['componentWillUnmount'].apply(this, arguments);
                    }
                }
            }
        };
    }
}

export {
    EventManager
};

export default EventManager;
