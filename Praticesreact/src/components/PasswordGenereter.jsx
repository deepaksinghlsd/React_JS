import { useState, useCallback, useEffect } from "react";

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) str += "1234567890";
        if (charAllowed) str += "!@#$%^&*()_+";

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length);
            pass += str.charAt(char);
        }
        setPassword(pass);

    }, [length, numberAllowed, charAllowed]);

    useEffect( ()=>{
        passwordGenerator();
    },
[length, numberAllowed ,charAllowed])

    return (
        <div>
            <div>Password Generator</div>
            <div>
                <input type="text" 
                value={password}
                readOnly
                />
            </div>
            <div>
                <input type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e)=>{setLength(e.target.value)}}
                />
            </div>
            <div>
                <input
                 type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>{setNumberAllowed((prev)=>!prev)}}
                />
                <label >Number Allowed</label>
            </div>

            <div>
                <input type="checkbox"
                defaultValue={charAllowed}
                id="charInput"
                onChange={()=>{setCharAllowed((prev)=>!prev)}}
                />
                <label >Char Allowed</label>
            </div>
        </div>
    );
};

export default PasswordGenerator;