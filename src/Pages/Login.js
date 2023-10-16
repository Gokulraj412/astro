import loginBG from "../assests/LoginBG.png"
import loginStar from "../assests/astrostar.png"
import "../Stylesheets/Login.css"
import logo from "../assests/Logo.png"
import icons from "../assests/icons.png"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useEffect, useState } from "react"



function Login() {
  

    // function validateMobileNumber(mobile) {
    //     let regex = new RegExp(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/);
    //     if (mobile == null) {
    //         return "false";
    //     }

    //     if (regex.test(mobile) == true) {
    //         return "true";
    //     }
    //     else {
    //         return "false";
    //     }
    // }


    
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState();

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    };

    const validatePhoneNumber = (value) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(value);
    };

    // function display() {
    //     let regex = new RegExp(/^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6, 15}[0-9]{1}$/);
    //     if (phoneNumber == null) {
    //         return setValid(false)
    //     }

    //     if (regex.test(phoneNumber) == true) {
    //         return setValid(true)

    //     }
    //     else {
    //         return setValid(false)

    //     }
    // }
    return (
        <div id="login">
            <div className="loginContainer">
                <img src={logo} alt="navLogo" />
                <p>Duis et ligula id felis gravida vulputate. Class aptent taciti sociosqu ad litora torquent.</p>
                <label>
                    Enter your mobile number:
                    <PhoneInput
                        country={'in'}
                        value={phoneNumber}
                        onChange={handleChange}
                        inputProps={{
                            required: true,
                        }}
                        countryCodeEditable={false}
                        onlyCountries={["in"]}
                        disableDropdown= {false}
                    />
                </label>
                {valid ? (
                    <p>correct</p>
                ): (<p>Please enter a valid phone number.</p>)}
                <button>Click</button>

                {/* <label>
                    <PhoneInput country={'in'} placeholder="Enter Mobile Number" inputProps={{
                        required: true,
                        autoFocus: true
                    }}
                        value={mob}
                        onChange={handleChange} />
                </label>
                <button onClick={display}>Click</button>
                {!valid && <p>Plase enter valid mobile number</p>} */}
            </div>

            <div className="loginImgContainer">
                <img src={icons} alt="icons" className="iocns" />
                <img src={loginStar} alt="star" className="logoStar" />
            </div>
        </div>
    )
}



export default Login