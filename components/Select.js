import { Selected, Option } from "../styles/components/Select.style";

const Select = ({ label = "null", values = [] }) => {
    return <Selected>
        <Option>{label}</Option>
        {
            values.map(i => <Option value={i}>{i}</Option>)
        }
    </Selected>
}

export default Select;