// we are using Functional component in Home
// import React from 'react'

// function Home() {
//     const handleClick = () => {
//         console.log('Button is clicked');
//     };
//     return(
//     <>
//       <h3>Home Component</h3>
//       <p>Main content for Home page</p>
//       <button onClick={handleClick}>Home Component</button>
//     </>
//   );
// }

// export default Home;

///////////////////

import React from 'react';

function Home() {
  return (
    // <div> adding style
    <div className="welcome-page">
      <h2>Welcome to Technical Products Company!</h2>
      <p>We're glad you're here. Our company is dedicated to providing high-quality products and services to our customers. Please take a look around and let us know if there's anything we can do to help.</p>
      <a href="/about-us">Learn more about our company</a>
      {/* <p>We're glad you're here. Our company is dedicated to providing high-quality products and services to our customers. Please take a look around and let us know if there's anything we can do to help.</p> */}
     {/* <h3> We provide all Technologies Product and Services on Cloud soltuions</h3> */}
    </div>
  );
}

export default Home;



















