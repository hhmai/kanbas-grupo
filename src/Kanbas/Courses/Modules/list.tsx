import { useState } from "react";
import "../../index.css";
import { modules } from "../../Database";
import { FaEllipsisV } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
	const { courseId } = useParams();
	const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
	const module = useSelector((state: KanbasState) => state.modulesReducer.module);
	const dispatch = useDispatch();

	return (
		<>
			<div className="buttons" style={{ display: "flex" }}>
				<div className="flex-fill">
					<button type="button" className="btn btn-light">
						Collapse All
					</button>
					<button type="button" className="btn btn-light">
						View Progress
					</button>
					<select>
						<option>Publish All</option>
					</select>
					<button type="button" className="btn btn-danger">
						+ Module
					</button>

					<ul className="list-group">
						<li className="list-group-item">
							<input value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))} />
							<button className="btn btn-danger" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
								Add
							</button>

							<textarea value={module.description} onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))} />

							<br />

							<button className="btn btn-danger" onClick={() => dispatch(updateModule(module))}>
								Update
							</button>
						</li>
					</ul>
					<ul className="list-group wd-modules">
						{moduleList
							.filter((module) => module.course === courseId)
							.map((module, index) => (
								<li key={index} className="list-group-item">
									<FaEllipsisV />
									{module.name}

									<span className="float-end"></span>

									<button className="float-end btn btn-danger" onClick={() => dispatch(deleteModule(module._id))}>
										Delete
									</button>

									<button className="float-end btn btn-secondary" onClick={() => dispatch(setModule(module))}>
										Edit
									</button>

									<ul className="list-group">
										<li className="list-group-item">
											<p className="float-left">
												<FaEllipsisV /> {module.description}{" "}
											</p>
										</li>
									</ul>
								</li>
							))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default ModuleList;
