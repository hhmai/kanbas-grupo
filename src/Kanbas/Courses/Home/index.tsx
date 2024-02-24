import ModuleList from "../Modules/list";

function Home() {
	return (
		<div>
			<h2>Home</h2>
            <div className="status" style={{display: 'flex'}}>
			<ModuleList />
            <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
                <h2>Course Status</h2>
                <button type="button" className="btn btn-light" style={{ width: "230px", textAlign: "left" }}>
                    Import Existing Content
                </button>
                <button type="button" className="btn btn-light" style={{ width: "230px", textAlign: "left" }}>
                    Import from Commons
                </button>
                <button type="button" className="btn btn-light" style={{ width: "230px", textAlign: "left" }}>
                    Choose Home Page
                </button>
                <button type="button" className="btn btn-light" style={{ width: "230px", textAlign: "left" }}>
                    View Course Stream
                </button>
                <button type="button" className="btn btn-light" style={{ width: "230px", textAlign: "left" }}>
                    New Announcement
                </button>
                <button type="button" className="btn btn-light" style={{ width: "230px", textAlign: "left" }}>
                    New Analytics
                </button>
                <button type="button" className="btn btn-light" style={{ width: "230px", textAlign: "left" }}>
                    View Course Notifications
                </button>
                <h4>To Do</h4>
                <hr/>
                <h5 style={{color:"red"}}>Object 1</h5>
                <h6 style={{color:"gray"}}>Object 1 Description</h6>
                <h5 style={{color:"red"}}>Object 2</h5>
                <h6 style={{color:"gray"}}>Object 2 Description</h6>
            </div>
            </div>
		</div>
	);
}
export default Home;
