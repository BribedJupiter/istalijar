import { useState, useEffect } from 'react';

export default function FunnyDetector({joke}) {
    const [funny, setFunny] = useState("nah bruh"); // set intial state to empty string

    // Notice handler defined inside function
    function handleClick() {
        alert(funny);
    }

    return (
        <button onClick={handleClick}>
            Am I funny?
        </button>
    );
  }