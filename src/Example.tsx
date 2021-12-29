import { Sign } from "crypto"


type Props = {
    name: string; // not optional props
    age?: number; // optional props
}

export const Example = (props: Props): JSX.Element => {
    return <div>Example - {props.name} - {props.age}</div>
}

export const Example2: React.FC<Props> = (props) => {
    return <div>Example</div>
}