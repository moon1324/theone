import React, { useEffect, useRef, useState } from "react";
import S from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ data, onChange }) => {
    const selectRef = useRef(null);
    const [currentValue, setCurrentValue] = useState(data[0]);
    const [showOptions, setShowOptions] = useState(false);

    const handleOnChangeSelectValue = (selectedValue) => {
        setCurrentValue(selectedValue);
        setShowOptions(false); // 옵션 클릭 시 드롭다운 닫기

        if (onChange) {
            onChange(selectedValue);
        }
    };

    useEffect(() => {
        // dropdown 바깥쪽을 클릭시 사라짐
        const handleClickOutside = (e) => {
            if (selectRef.current && !selectRef.current.contains(e.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <S.SelectBox ref={selectRef}>
            <S.Label onClick={() => setShowOptions((prev) => !prev)}>
                {currentValue}
                <FontAwesomeIcon icon={faAngleDown} className="icon" />
            </S.Label>
            {showOptions && (
                <S.SelectOptions>
                    {data.map((item, index) => (
                        <S.Option key={index} onClick={() => handleOnChangeSelectValue(item)}>
                            {item}
                        </S.Option>
                    ))}
                </S.SelectOptions>
            )}
        </S.SelectBox>
    );
};

export default Dropdown;
