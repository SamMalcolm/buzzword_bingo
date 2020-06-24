import React, { useState } from 'react'

export default function BingoTile(props) {
	const [selected, setSelected] = useState(false);

	return (
		<div
			className={(selected) ? "bingoTile selected" : "bingoTile"}
			style={{
				'width': 'calc(100% / ' + props.dimension,
				'paddingBottom': 'calc(100% / ' + props.dimension
			}}

			onClick={(e) => {
				setSelected(true);
				props.clickEvent(props.x, props.y);
			}}>
			<div className="bingoTileTitle">
				<h3>{props.name}</h3>
			</div>
		</div>
	)
}
