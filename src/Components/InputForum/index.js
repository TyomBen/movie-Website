import './styles.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { valueLogin, valuePassword } from '../../store/action';

const InputForum = () => {
    const passwordRef = useRef();
    const emailRef = useRef();
    const dispatch = useDispatch ()
    const navigate = useNavigate();
    const login = useSelector (state => state.loginUser.login)
    const password = useSelector (state => state.passwordUser.password)
  
    const handleClick = () => {
        passwordRef.current.value === '' ? passwordRef.current.style.border = '1px solid red' : passwordRef.current.style.border = 'none';
        login === '' ?  emailRef.current.style.border = '1px solid red' : emailRef.current.style.border = 'none';
        if (password == 1234 && login === 'artyombenikyan'){
            navigate('/list-of-movies')
        } else {
            return;
        }
   
    }
      
    return (
        <div className="container">
            <form>
                <p>Welcome</p>
                <input type="email" placeholder="UserName" ref={emailRef} value={login} onChange={(event) => dispatch (valueLogin(event.target.value))}/><br/>
                <input type="password" placeholder="Password" ref={passwordRef} value={password} onChange={(event) => dispatch (valuePassword (event.target.value))} /><br/>
                <input type="button" value="Sign in" onClick={handleClick} /><br/>
            </form>

            <div className="drops">
                <div className="drop drop-1"></div>
                <div className="drop drop-2"></div>
                <div className="drop drop-3"></div>
                <div className="drop drop-4"></div>
                <div className="drop drop-5"></div>
            </div>
        </div>
    );
}

export default InputForum;
