import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blogs'>
            <h2>Blog Section</h2>
            <div className='blog'>
                <h4>How does react work?</h4>
                <p>React basically maintains a tree for you. This tree is able to do efficient diff computations on the nodes.Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.</p>
            </div>
            <hr />
            <div className='blog'>
                <h4>Difference between props and state.</h4>
                <p>1. Props are used to pass data from one component to another. <br />
                2. The state is a local data storage that is local to the component only and cannot be passed to other components. <br />
                3. The this.setState property is used to update the state values in the component.</p>
            </div>
            <hr />
            <div className='blog'>
                <h4>Where we can use effect without loading data?</h4>
                <p> We use effect to fetching data. Beside that using use effect we can do directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>
        </div>
    );
};

export default Blog;