import React, { useState } from "react";
import styles from "./FormInput.module.css";

function FormInput(props) {
    const { label, errorMessage, onChange, id, ...otherProps } = props;
    const [focused, setFocused] = useState(false);

    const handleFocus = (e) => {
        setFocused(true);
    };
    return (
        <div className={styles.formInput}>
            {/* <label>{label}</label> */}
            <input
                {...otherProps}
                onChange={onChange}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    );
}

export default FormInput;
