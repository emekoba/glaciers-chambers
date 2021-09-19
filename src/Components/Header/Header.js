import React from "react";
import "./Header.css";
import { logo } from "../../Resources/Resources";

export default function Header({ onClick }) {
	const btns = [
		"Home",
		"Our Services",
		"",
		"08076607130",
		"About IRI",
		"Where We Operate",
		"",
		"rjemekoba@gmail.com",
	];

	return (
		<div className="header">
			<img src={logo} alt="" />

			<div className="header-btn-aisle">
				{/* <div className="header-btn-aisle-col1"> */}
				{btns.map((e) => (
					<div className="header-btn-superior">
						<button
							style={{
								borderBottomColor: `${e !== "" ? "white" : "transparent"}`,
								cursor: `${e !== "" ? "pointer" : "auto"}`,
							}}
							className="header-btn"
							key={e}
							id={e}
							onClick={onClick}
						>
							{e}
						</button>
					</div>
				))}
				{/* </div> */}

				{/* <div className="header-btn-aisle-col2">
					<button className="header-btn" onClick={onClick}>
						08076607130
					</button>

					<button className="header-btn" onClick={onClick}>
						08076607130
					</button>
				</div> */}
			</div>
		</div>
	);
}
