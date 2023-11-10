import { SpinnerContainer } from "./Spinner.style";

function Spinner({ character }) {
	return (
		<SpinnerContainer>
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
					font-size='22'
					letter-spacing='0.2em'
					className='run-text'>
					<text>
						<textPath href='#runs-path'>{character}</textPath>
					</text>
					<text transform='rotate(120,100,100)'>
						<textPath href='#runs-path'>{character}</textPath>
					</text>
					<text transform='rotate(240,100,100)'>
						<textPath href='#runs-path'>{character}</textPath>
					</text>
				</g>
			</svg>
		</SpinnerContainer>
	);
}

export default Spinner;
