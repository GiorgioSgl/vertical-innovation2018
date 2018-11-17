import React from 'react';

const style = {
    backgroundColor: '#0068a7'
};

const Header = () =>
    <div>
        <div className="row">
            <img src="/images/buffer.PNG" alt="buffer not found" />
        </div>
        <header className="jumbotron my-4 text-center text-white"
            style={style}
        >
            <h3 className="display-3">Welcome back!</h3>
            <p className="lead">Welcome back to back&forth! It's great to see you again!</p>
        </header>
    </div>;

export default Header;