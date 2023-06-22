import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ReactToPrint from 'react-to-print';

const Blogs = () => {

    const ref = useRef();
    return (
        <div className='print'>
            <div ref={ref} className='ms-12 pb-14 pt-14 a '>
            <div><p className='text-red-500 pb-4'>1.Tell us the differences between uncontrolled and controlled component</p>
           <p className='pb-10'>Ans: controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p></div>


           <div>
            <p className='text-red-500 pb-4'>2. How to validate React props using PropTypes</p>
            <p className='pb-10'>Ans: App.propTypes is used for props validation in react component. When some of the props are passed with an invalid type, you will get the warnings on JavaScript console. After specifying the validation patterns, you will set the App.defaultProps.</p>
           </div>


           <div>
            <p className='text-red-500 pb-4'>3. Tell us the difference between nodejs and express js.</p>
            <p className='pb-10'>Ans: Node.js and Express.js are both JavaScript-based technologies that are used for building web applications. Node.js is a JavaScript runtime environment, while Express.js is a web framework that runs on top of Node.js. Here are the main differences between the two:

1. Node.js is a runtime environment: Node.js is used for running JavaScript code outside the browser, on the server side. It allows developers to build scalable and high-performance applications using JavaScript. On the other hand, Express.js is a web framework built on top of Node.js, which provides a set of tools and libraries for building web applications.

2. Express.js provides a higher level of abstraction: Express.js provides a higher level of abstraction compared to Node.js. It provides a simpler and more concise way of building web applications by abstracting away some of the low-level details of the Node.js runtime. This makes it easier for developers to build web applications quickly and efficiently.

3. Node.js provides more flexibility: Node.js provides a lot of flexibility to developers as it allows them to build applications using any technology or framework they prefer. Node.js can be used for building server-side applications using any framework, not just Express.js.

4. Express.js provides built-in middleware: Express.js provides a set of built-in middleware that can be used for common tasks like parsing request data, handling cookies, and serving static files. This makes it easier for developers to build web applications quickly without having to write all of the code from scratch.

</p>
           </div>


           <div>
            <p className='text-red-500 pb-4'>4. What is a custom hook, and why will you create a custom hook?</p>
            <p className='pb-10'>Ans: In React, a custom hook is a JavaScript function that uses one or more built-in hooks and/or other custom hooks to encapsulate some specific behavior or functionality that can be reused across multiple components.

The main benefit of creating a custom hook is that it allows developers to encapsulate complex logic and reuse it across multiple components without having to duplicate the code. Custom hooks can also make code more readable and maintainable by abstracting away implementation details and exposing a simpler API.</p>
           </div>
            </div>
<div className="card-actions justify-center pb-14">
<ReactToPrint trigger={()=><button  className="btn btn-primary"><Link>Print</Link></button>} content={()=>ref.current}/>
</div>
           
        </div>
       
    );
};

export default Blogs;