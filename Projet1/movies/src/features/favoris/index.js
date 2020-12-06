import React from "react";
import FavoriList from "../films/components/favori-list /FavoriList";

export default props => {
	return (
		<div className="d-flex flex-row flex-fill pt-4 p-2">
			<FavoriList favori={props.favoris} removeFavori={props.removeFavori} />
		</div>
	);
};
