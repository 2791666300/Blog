import { CardBackContainer } from "./CardBack.style";

function CardBack() {
	return (
		<CardBackContainer>
			<svg viewBox='0 0 200 200' style={{ height: "120px", width: "120px" }}>
				<defs>
					<path
						d='M100 100 m -75 0 a75 75 0 1 0 150 0 a 75 75 0 1 0 -150 0'
						id='runs-path'></path>
				</defs>
				<circle
					cx='100'
					cy='100'
					r='88'
					stroke='#fff'
					stroke-width='8'
					fill='#C2A813'></circle>
				<g className='run-circle'>
					<circle cx='100' cy='100' r='50' fill='#fff'></circle>
					<circle
						cx='100'
						cy='100'
						r='45'
						fill='#C2A813'
						className='run-circle'></circle>
					<circle
						cx='100'
						cy='100'
						r='35'
						fill='#fff'
						className='run-circle'></circle>
					<circle
						cx='100'
						cy='100'
						r='25'
						fill='#C2A813'
						className='run-circle'></circle>
					<circle
						cx='100'
						cy='100'
						r='15'
						fill='#fff'
						className='run-circle'></circle>
				</g>
				<g
					fill='#fff'
					font-weight='bold'
					font-size='26'
					letter-spacing='0.2em'
					className='run-text'>
					<text>
						<textPath href='#runs-path'>RUNS</textPath>
					</text>
					<text transform='rotate(90,100,100)'>
						<textPath href='#runs-path'>RUNS</textPath>
					</text>
					<text transform='rotate(180,100,100)'>
						<textPath href='#runs-path'>RUNS</textPath>
					</text>
					<text transform='rotate(270,100,100)'>
						<textPath href='#runs-path'>RUNS</textPath>
					</text>
				</g>
			</svg>
		</CardBackContainer>
	);
}

export default CardBack;
