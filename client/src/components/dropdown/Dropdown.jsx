import React, { useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = (props) => {
    // console.log(props.props.data);
    const list = props.props.data;
    const [currentValue, setCurrentValue] = useState(list[0]);
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (e) => {
        setCurrentValue(e.target.getAttribute("value"));
    };

    return (
        <S.SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <S.Label>
                {currentValue}
                <FontAwesomeIcon icon={faAngleDown} className="icon" />
            </S.Label>
            <S.SelectOptions show={showOptions}>
                {list.map((data, index) => (
                    <S.Option key={index} value={data} onClick={handleOnChangeSelectValue}>
                        {data}
                    </S.Option>
                ))}
            </S.SelectOptions>
        </S.SelectBox>
    );
};

export default Dropdown;
