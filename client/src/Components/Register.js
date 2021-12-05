import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";
import styles from "./Register.module.css";
import termsOfUse from "../db/termsOfUse";

function Register() {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "닉네임",
            errorMessage: "영문 4~16. 특수문자는 사용 할 수 없습니다.",
            required: true,
            pattern: "^[A-Za-z0-9]{4,16}$",
            label: "Username",
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "이메일",
            errorMessage: "올바른 이메일을 적어주세요.",
            required: true,
            label: "Email",
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "비밀번호",
            errorMessage: "8~20자. 문자와 숫자 1개를 포함하여야 합니다.",
            required: true,
            pattern: `^(?=.*?[a-z])(?=.*?[0-9]).{8,20}$`,
            label: "Password",
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "비밀번호 확인",
            errorMessage: "비밀번호가 일치하지 않습니다.",
            required: true,
            pattern: values.password,
            label: "Confirm Password",
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        console.log(e.target.name);
    };

    console.log(values);
    return (
        <div className={styles.register}>
            <div className={styles.loginbox}>
                <div className={styles.top}>
                    <h4>회원가입</h4>
                </div>

                <form action="/register" method="POST" className={styles.mid}>
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            onChange={onChange}
                        />
                    ))}

                    {/* <label for={styles.checkbox}>이용약관</label> */}
                    <div className={styles.termsOfUse}>{termsOfUse}</div>

                    <label for={styles.checkbox}>
                        <input
                            id={styles.checkbox}
                            type="checkbox"
                            placeholder="닉네임"
                            required
                        />
                        (필수)
                        <strong>이용약관</strong>에 동의합니다.
                    </label>
                    <button type="submit">회원가입</button>
                </form>

                <div className={styles.bot}>
                    <Link to="/login">로그인</Link>
                    <Link to="/findpassword">비밀번호 찾기</Link>
                </div>
            </div>
        </div>
    );
}

export default Register;
