import React, { useEffect, useRef, useState } from 'react'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Trial = () => {
    const userRef = useRef();
    // const errRef = useRef();

    const [user, setUser] = useState(['']);
    const [validName, setValidName] = useState(false);
    // const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState(['']);
    const [validPwd, setValidPwd] = useState(false);
    // const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState(['']);
    const [validMatch, setValidMatch] = useState(false);
    // const [matchFocus, setMatchFocus] = useState(false);

    // const [errMsg, setErrMsg] = useState('');
    // const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    // useEffect(() => {
    //     setErrMsg('');
    // }, [user, pwd, matchPwd])

    // const handleSubmit = (evt) => {
    //     evt.preventDefault();

    //     const v1 = USER_REGEX.test(user);
    //     const v2 = PWD_REGEX.test(pwd);

    //     if (!v1 || !v2) {
    //         setErrMsg('Invalid entry');
    //         return;
    //     }

    //     try {
    //         fetch('http://127.0.0.1:8000/registration', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 'username': user,
    //                 'password': pwd
    //             })
    //         })
    //         .then(resp => resp.json())
    //         .then(data => {console.log(data)})
    //     } catch (err) {
    //         if (!err?.response) {
    //             setErrMsg('No Server Response');
    //         } else if (err.response?.status === 409) {
    //             setErrMsg('Username Taken');
    //         } else {
    //             setErrMsg('Registration Failed')
    //         }
    //         errRef.current.focus();
    //     }
    // }

    return (
        <>
            {/* {success ? ( */}
                {/* <section> */}
                    {/* <h1>Success!</h1> */}
                    {/* <p>
                        <a href="#">Sign In</a>
                    </p> */}
                {/* </section> */}
            {/* ) : ( */}
                {/* <section> */}
                    {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                    <h1>Register</h1>
                    <form>
                        {/* <label htmlFor="username">
                            Username:
                        </label> */}
                        <input
                            type="text"
                            // id="username"
                            value={user}
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            // onFocus={() => setUserFocus(true)}
                            // onBlur={() => setUserFocus(false)}
                        />

                        {/* <label htmlFor="password">
                            Password:
                        </label> */}
                        <input
                            type="password"
                            // id="password"
                            value={pwd}
                            required
                            onChange={(e) => setPwd(e.target.value)}
                            // onFocus={() => setPwdFocus(true)}
                            // onBlur={() => setPwdFocus(false)}
                        />

                        {/* <label htmlFor="confirm_pwd">
                            Confirm Password:
                        </label> */}
                        <input
                            type="password"
                            // id="confirm_pwd"
                            value={matchPwd}
                            required
                            onChange={(e) => setMatchPwd(e.target.value)}
                            // onFocus={() => setMatchFocus(true)}
                            // onBlur={() => setMatchFocus(false)}
                        />

                        <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                    </form>
                    {/* <p> */}
                        {/* Already registered?<br /> */}
                        {/* <span className="line"> */}
                            {/*put router link here*/}
                            {/* <a href="#">Sign In</a> */}
                        {/* </span> */}
                    {/* </p> */}
                {/* </section> */}
            )
            {/* } */}
        </>
    )
}

export default Trial