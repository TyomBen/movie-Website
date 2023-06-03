import './styles.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router';

const InputForum = () => {
    const passwordRef = useRef();
    const emailRef = useRef();
    const navigate = useNavigate();
   
    const handleClick = () => {
        if (passwordRef.current.value === ''){
            passwordRef.current.style.border = '1px solid red';
        } else {
            passwordRef.current.style.border = 'none';
        } 
    
        if (emailRef.current.value === ''){
            emailRef.current.style.border = '1px solid red';
        } else {
            emailRef.current.style.border = 'none';
        }
        
        if (passwordRef.current.value === '1234' && emailRef.current.value === 'artyombenikyan'){
            navigate('/list-of-movies');
        }
    };
      
    return (
        <div className="container">
            <form>
                <p>Welcome</p>
                <input type="email" placeholder="UserName" ref={emailRef} /><br/>
                <input type="password" placeholder="Password" ref={passwordRef} /><br/>
                <input type="button" value="Sign in" onClick={handleClick} /><br/>
                {/* <a href="#">Forgot Password?</a> */}
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
