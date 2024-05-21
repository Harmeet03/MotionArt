import './App.css';

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Sora:wght@100..800&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>

      <nav>
        <div className='left'>
          <img src='https://qodematrix.com/wp-content/uploads/2023/10/MotionArtEffect-logo.png' alt='Error'></img>
        </div>
        <div className='right'>
          <button> Purchase Now </button>
        </div>
      </nav>
      
      <body>
        <div className='intro'>
          <div className='left'>
            <h4> Transform Your Website </h4>
            <h4> With Motion Art Effect </h4>
          </div>
          <div className='right'>
            <h1> Attract Your Visitors Attention With Colorful <span> Motion Art Effect </span> </h1>
            <p> Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website. </p>
          </div>
        </div>

        <h3 style={{textAlign: 'center', color: 'white', width: '90%', margin: 'auto', marginBottom: '40px', }}> Trusted by thousands of users around the world </h3>
        <div className='trust'>
          <div className='left'>
            <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img2.png' alt='Error'></img>&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png' alt='Error'></img>
              <p> 4.5 Score, 9 Reviews </p>
            </div>
          </div>
          <div className='center'>
            <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img1.png' alt='Error'></img>&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png' alt='Error'></img>
              <p> 4.5 Score, 9 Reviews </p>
            </div>
          </div>
          <div className='right'>
            <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img3.png' alt='Error'></img>&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
              <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img4.png' alt='Error'></img>
              <p> 4.5 Score, 9 Reviews </p>
            </div>
          </div>
        </div>

        <div className='purchase'>
          <div className='left'>
            <h1> Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors </h1>
            <p> Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements. </p>
            <button href='#'> Purchase From Envato </button>
          </div>
          <div className='right'>
            <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img5.png'></img>
          </div>
        </div>

        <h1 className='h1'> Apply On Any Section Or Enable For Whole Page </h1>
        <div className='apply'>
          <div className='left'>
            <h2> Apply On Section </h2>
            <p> Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
            <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img11.png'></img>
          </div>
          <div className='right'>
            <h2> Apply On Page </h2>
            <p> Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation. </p>
            <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img10.png'></img>
          </div>
        </div>
        
        <div className='versions'>
          <h2> Supported by All Popular Browsers </h2>
          <p> Rest assured, Motion Art is designed to be compatible with all major web browsers. </p>
          <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img8.png'></img>
        </div>

        <div className='plugin'>
          <div className='about'>
            <h1> An All-Round Plugin With Powerful Features </h1>
            <p> Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience. </p>
          </div>
          <div className='boxes'>
            <div className='left'>
              <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img9.png'></img>
              <h3> Light Weight </h3>
              <p> Motion Art for Elementor is designed to be lightweight. </p>
            </div>
            <div className='center'>
              <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img6.png'></img>
              <h3> 100% Responsive </h3>
              <p> Create a consistent visual experience across all devices. </p>
            </div>
            <div className='right'>
              <img src='https://qodematrix.com/wp-content/uploads/2023/10/motionarteffect-img7.png'></img>
              <h3> User Friendly Interface </h3>
              <p> Ensure a smooth experience for both applicants and administrators. </p>
            </div>
          </div>
        </div>
      </body>

      <footer>
        <p> © 2023 Copywrite. All rights reserved by QodeMatrix </p>
        <div>
          <a href='#'> Documentation </a>
          <a href='#'> Support </a>
        </div>
      </footer>
    </>
  );
}

export default App;
