import {FC} from "react";

interface BtnProps {
    name: string
}
const Btn:FC<BtnProps> = ({name}) => {
    return <div>
        {name}
    </div>
}

export default Btn