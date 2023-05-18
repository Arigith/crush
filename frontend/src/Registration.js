import React, { useEffect, useRef, useState } from 'react'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registration = () => {
    const userRef = useRef();

    const [user, setUser] = useState(['']);
    const [validname, setValidname] = useState(false);

    const [pwd, setPwd] = useState(['']);
    const [validpwd, setValidpwd] = useState(false);

    const [matchpwd, setMatchpwd] = useState(['']);
    const [validmatch, setValidmatch] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidname(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidpwd(PWD_REGEX.test(pwd));
        setValidmatch(pwd === matchpwd);
    }, [pwd, matchpwd])

    function handleSubmit(evt) {
        evt.preventDefault();

        fetch('http://127.0.0.1:8000/registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'username': user,
                'password': pwd
            })
        })
        .then(resp => resp.json())
        .then(data => {console.log(data)})
        .catch(err => console.log(err))
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                </label>
                <br/>

                <input
                    type='text'
                    ref={userRef}
                    value={user}
                    placeholder='Wanted Username'
                    required
                    autoComplete="off"
                    onChange={(evt) => setUser(evt.target.value)}
                />
                <br/>

                <label>
                    Password:
                </label>
                <br/>

                <input
                    type='password'
                    placeholder='Wanted Password'
                    value={pwd}
                    required
                    onChange={(evt) => setPwd(evt.target.value)}
                />
                <br/>

                <label htmlFor='confirm_pwd'>
                    Confirm Password:
                </label>
                <br/>

                <input
                    type='password'
                    placeholder='Confirm Password'
                    value={matchpwd}
                    required
                    onChange={(evt) => setMatchpwd(evt.target.value)}
                />
                <br/>

                <button disabled={!validname || !validpwd || !validmatch ? true : false}>Test</button>
            </form>
        </>
    )
}

export default Registration