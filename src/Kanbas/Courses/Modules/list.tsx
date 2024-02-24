import { useState } from "react";
import "../../index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaCheck, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
	const { courseId } = useParams();
	const modulesList = modules.filter((module) => module.course === courseId);
	const [selectedModule, setSelectedModule] = useState(modulesList[0]);

	return (
		<>
			<div className="buttons" style={{ display: 'flex' }}>
				<div className="flex-fill">
					<button type="button" className="btn btn-light">Collapse All</button>
					<button type="button" className="btn btn-light">View Progress</button>
					<select>
						<option>Publish All</option>
					</select>
					<button type="button" className="btn btn-danger">+ Module</button>

					<ul className="list-group wd-modules">
						<li className="list-group-item">
							<div>
								<FaEllipsisV/> Week 0 - INTRO
								<span className="float-end">
									<FaCheckCircle color="green"/>
									<FaPlusCircle/>
									<FaEllipsisV/>
								</span>
							</div>
							<ul className="list-group">
								<li className="list-group-item">
									<FaEllipsisV/> Introduction to the Course
									<span className="float-end">
										<FaCheckCircle color="green"/>
										<FaEllipsisV/>
									</span>
								</li>

								<li className="list-group-item">
									<FaEllipsisV/> Learn what is Web Development
									<span className="float-end">
										<FaCheckCircle color="green"/>
										<FaEllipsisV/>
									</span>
								</li>

								<li className="list-group-item">
									<FaEllipsisV/> Creating a development environment
									<span className="float-end">
										<FaCheckCircle color="green"/>
										<FaEllipsisV/>
									</span>
								</li>

								<li className="list-group-item">
									<FaEllipsisV/> Creating a Web Application
									<span className="float-end">
										<FaCheckCircle color="green"/>
										<FaEllipsisV/>
									</span>
								</li>

								<li className="list-group-item">
									<FaEllipsisV/> Getting started with the 1st assignment
									<span className="float-end">
										<FaCheckCircle color="green"/>
										<FaEllipsisV/>
									</span>
								</li>
							</ul>
						</li>

						<li className="list-group-item">
							<div>
								<FaEllipsisV/> Week 1 - HTML
								<span className="float-end">
									<FaCheck/>
									<FaPlus/>
									<FaEllipsisV/>
								</span>
							</div>
							<ul className="list-group">
								<li className="list-group-item">
									<FaEllipsisV/> More introduction to the course
									<span className="float-end">
										<FaCheckCircle color="green"/>
										<FaEllipsisV/>
									</span>
								</li>

								<li className="list-group-item">
									<FaEllipsisV/> Learn more what is Web Development
									<span className="float-end">
										<FaCheckCircle color="green"/>
										<FaEllipsisV/>
									</span>
								</li>

								<li className="list-group-item">
									<FaEllipsisV/> Creating another development environment
									<span className="float-end">
										<FaCheckCircle color="green"/>
										<FaEllipsisV/>
									</span>
								</li>

								<li className="list-group-item">
									<FaEllipsisV/> Creating another Web Application
									<span className="float-end">
										<FaCheck/>
										<FaEllipsisV/>
									</span>
								</li>

								<li className="list-group-item">
									<FaEllipsisV/> Getting started with the 2nd assignment
									<span className="float-end">
										<FaCheck/>
										<FaEllipsisV/>
									</span>
								</li>
							</ul>
						</li>

						<li className="list-group-item">
							<div>
								<FaEllipsisV/> Week 2 - OUTRO
								<span className="float-end">
									<FaCheck/>
									<FaPlus/>
									<FaEllipsisV/>
								</span>
							</div>
							<ul className="list-group">
								<li className="list-group-item">
									<FaEllipsisV/> Shower
									<span className="float-end">
										<FaCheck/>
										<FaEllipsisV/>
									</span>
								</li>

								<li className="list-group-item">
									<FaEllipsisV/> Go to sleep
									<span className="float-end">
										<FaCheck/>
										<FaEllipsisV/>
									</span>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<ul className="list-group wd-modules">
				{modulesList.map((module, index) => (
					<li key={index} className="list-group-item" onClick={() => setSelectedModule(module)}>
						<div>
							<FaEllipsisV className="me-2" />
							{module.name}
							<span className="float-end">
								<FaCheckCircle className="text-success" />
								<FaPlusCircle className="ms-2" />
								<FaEllipsisV className="ms-2" />
							</span>
						</div>
						{selectedModule._id === module._id && (
							<ul className="list-group">
								{module.lessons?.map((lesson, index) => (
									<li className="list-group-item" key={index}>
										<FaEllipsisV className="me-2" />
										{lesson.name}
										<span className="float-end">
											<FaCheckCircle className="text-success" />
											<FaEllipsisV className="ms-2" />
										</span>
									</li>
								))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</>
	);
}

export default ModuleList;
