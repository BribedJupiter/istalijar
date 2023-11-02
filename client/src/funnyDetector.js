import React, { useState, useEffect } from 'react';

export default function FunnyDetector({joke}) {
    function handleClick() {
        alert("Nope!");
    }

    return (
        <button onClick={handleClick}>
            Am I funny?
        </button>
    );
  }