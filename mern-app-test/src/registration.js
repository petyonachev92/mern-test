import React from 'react';

function register(){
    return (
        <div>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="repeatPassword" placeholder="Repeat Password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default register;