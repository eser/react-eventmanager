declare class EventManager {
    static subscription(mapping: {
        [key: string]: string;
    }): <T extends new (...args: any[]) => {}>(target: T) => {
        new (...args: any[]): {
            componentDidMount(): void;
            componentWillUnmount(): void;
        };
    } & T;
}
export { EventManager };
export default EventManager;
