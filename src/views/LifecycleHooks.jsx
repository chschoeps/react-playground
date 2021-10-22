import React from "react";
import UserContext from "../context/user";

const LifecycleHooks = () => {
    return (
        <LifecycleHooksContent testProp="testProp" />
    )
}

const Button = props => <button onClick={props.onClick}>{props.text}</button>;

class LifecycleHooksContent extends React.Component {
    state = {
        count: 33,
    };

    static contextType = UserContext;

    reset() {
        console.log("reset()");
        this.setState({ count: 0 });
    }

    setTo(value) {
        console.log("setToEleven()");
        this.setState({ count: value });
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps()");
        console.log("props: ", props);
        console.log("state: ", state);

        if (state.count === 0) {
            return state;
        } else {
            return { count: 54 }
        }

    };

    componentDidMount() {
        console.log("componentDidMount()");
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate()");
        console.log("nextProps: ", nextProps);
        console.log("nextState: ", nextState);
        console.log("nextContext: ", nextContext);

        return nextState.count !== 55;
    }

    /* getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate();")
    } */

    render() {
        return (
            <div>
                <h1>Lifecycle Hooks</h1>
                <Button text={"reset"} onClick={() => this.reset()} />
                <Button text={"set to 11"} onClick={() => this.setTo(11)} />
                <Button text={"set to 55"} onClick={() => this.setTo(55)} />
                <h2>{this.state.count}</h2>
                <h2>getDerivedStateFromProps()</h2>
                <p>{this.state.count}</p>
                <h2>componentDidMount()</h2>
                {this.context.logger("test2")}
            </div>
        );
    };

}

export default LifecycleHooks;

