import "./Glaciers.css";
import Header from "./Components/Header/Header";
import { bg1, bg2, bg3, bg4, bg5 } from "./Resources/Resources";

function Glaciers() {
	function onHeaderBtnClicked() {}

	return (
		<div className="glaciers">
			<Header onClick={onHeaderBtnClicked} />

			<div className="banner">
				<img src={bg2} />
			</div>
		</div>
	);
}

export default Glaciers;
