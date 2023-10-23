import { Routes, Route } from "react-router-dom";

import CreatorHome from "../CreatorHome/creatorHome.component";
import CreatorEditor from "../CreatorEditor/CreatorEditor.component";
const CreatorPage = () => {
	return (
		<Routes>
			<Route index element={<CreatorHome />} />
			<Route path='/editor' element={<CreatorEditor />} />
			<Route path='/editor/:articleId' element={<CreatorEditor />} />
		</Routes>
	);
};

export default CreatorPage;
