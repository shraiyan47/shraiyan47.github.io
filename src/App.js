import 'bootstrap/dist/css/bootstrap.css';
import './assets/fontawesome/css/all.min.css'
import Profile from './Profile';
// import Projects from './Projects';

function App() {
  return (
    <div className="">
      <section style={{ backgroundColor: "#eee" }} >
        <div className="container py-5">

          {/* Nav  */}
          {/* <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="/">Home</a></li> 
                  <li className="breadcrumb-item active" aria-current="page">Shahadat Hossain's Profile</li>
                </ol>
              </nav>
            </div>
          </div> */}

          <h3 className='text-center mt-2'>
            Shahadat Hossain's Portfolio
          </h3>
          <hr />

          {/* Profile Container  */}

          <Profile />

          {/* 
          
          <h3 className='text-center mt-5'>
            Projects
          </h3>
          <hr /> 
          
          */}

          {/* Project Container  */}

          {/* <Projects /> */}

        </div>
      </section>
    </div>
  );
}

export default App;
