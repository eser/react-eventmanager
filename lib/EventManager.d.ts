import { EventEmitter } from 'es6-eventemitter/lib/esm';
declare class EventManager extends EventEmitter {
    subscription(mapping: {
        [key: string]: string;
    }): <T extends new (...args: any[]) => {}>(target: T) => {
        new (...args: any[]): {
            componentDidMount(): void;
            componentWillUnmount(): void;
        };
    } & T;
}
declare const eventManager: EventManager;
export { EventManager, eventManager };
export default eventManager;
