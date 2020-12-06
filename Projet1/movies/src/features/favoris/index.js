import React from "react";
import FavoriList from "./components/favori-list /FavoriList";
import Loading from "../../components/utils/loading.js";

export default props => {
	return (
		<div className="d-flex flex-row flex-fill pt-4 p-2">
			{props.loaded ? (
				<FavoriList favori={props.favoris} removeFavori={props.removeFavori} />
			) : (
				<Loading />
			)}
		</div>
	);
};
