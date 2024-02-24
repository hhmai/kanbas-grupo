import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";

function Assignments() {
	const { courseId } = useParams();
	const assignmentList = assignments.filter((assignment) => assignment.course === courseId);
	return (
		<>
			<div>
				<input type="text" placeholder="Search for Assignments" />
				<button type="button" className="btn btn-light">
					Group
				</button>
				<button type="button" className="btn btn-danger">
					+ Assignment
				</button>
				<button type="button" className="btn btn-light">
					<FaEllipsisV />
				</button>
			</div>
			<ul className="list-group wd-modules">
				<li className="list-group-item">
					<div>
						<FaEllipsisV className="me-2" /> ASSIGNMENTS
						<span className="float-end">
							<FaCheckCircle className="text-success" />
							<FaPlusCircle className="ms-2" />
							<FaEllipsisV className="ms-2" />
						</span>
					</div>
					<ul className="list-group">
						{assignmentList.map((assignment) => (
							<li className="list-group-item">
								<FaEllipsisV className="me-2" />
								<Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
								<span className="float-end">
									<FaCheckCircle className="text-success" />
									<FaEllipsisV className="ms-2" />
								</span>
							</li>
						))}
					</ul>
				</li>
                <li className="list-group-item">
					<ul className="list-group">
						<li className="list-group-item">
							<FaEllipsisV /> Introduction to the Course
							<span className="float-end">
								<FaCheckCircle color="green" />
								<FaEllipsisV />
							</span>
						</li>

						<li className="list-group-item">
							<FaEllipsisV /> Learn what is Web Development
							<span className="float-end">
								<FaCheckCircle color="green" />
								<FaEllipsisV />
							</span>
						</li>

						<li className="list-group-item">
							<FaEllipsisV /> Creating a development environment
							<span className="float-end">
								<FaCheckCircle color="green" />
								<FaEllipsisV />
							</span>
						</li>

						<li className="list-group-item">
							<FaEllipsisV /> Creating a Web Application
							<span className="float-end">
								<FaCheckCircle color="green" />
								<FaEllipsisV />
							</span>
						</li>

						<li className="list-group-item">
							<FaEllipsisV /> Getting started with the 1st assignment
							<span className="float-end">
								<FaCheckCircle color="green" />
								<FaEllipsisV />
							</span>
						</li>
					</ul>
				</li>
			</ul>
		</>
	);
}

export default Assignments;
