import {useState} from "react";
import styled from "styled-components";
import {ReactUtils} from "./utils/ReactUtils";

const Input = styled.input({
	border: '2px solid #ccc',
	backgroundColor: '#f2f2f2',
	padding: '8px',
	borderRadius: '4px',
	fontSize: '16px',
	'&:hover': {
	  borderColor: '#999',
	},
	'&:focus': {
	  outline: 'none',
	  borderColor: '#4d90fe',
	  boxShadow: '0 0 5px rgba(77,144,254,.5)',
	},
	'&::placeholder': {
	  color: '#999',
	},
});

const Form = styled.div({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	"> label": {
		marginBottom: "10px",
	}
});


const NumberSpan = (props: {value: number}) =>
{
	return (
		<span className={ReactUtils.cls({warning: props.value < 200})}>{props.value}</span>
	);
};

export default function App()
{
	const [lengthOfWholePlank, setLengthOfWholePlank] = useState<number>(0);
	const [lengthOfRoom, setLengthOfRoom] = useState<number>(0);
	const [lengthOfOneEndOfPlank, setLengthOfOneEndOfPlank] = useState<number>(0);

	const wholePieces = Math.floor((lengthOfRoom - lengthOfOneEndOfPlank) / lengthOfWholePlank) ?? 0;
	const lengthOfOtherEndOfPlank = (lengthOfRoom - (wholePieces * lengthOfWholePlank + lengthOfOneEndOfPlank)) ?? 0;

	return (
		<div>
			<h2>
				Floor Layout Helper (mm)
			</h2>
			<Form>
				<label>
					Length of One Whole plank:
					<Input type="number" value={lengthOfWholePlank} onChange={(event) => setLengthOfWholePlank(parseFloat(event?.target.value ?? 0))} />
				</label>
				<label>
					Length of Room:
					<Input type="number" value={lengthOfRoom} onChange={(event) => setLengthOfRoom(parseFloat(event?.target.value ?? 0))} />
				</label>
				
				<label>
					Length of plank on one end of the row:
					<Input type="number" value={lengthOfOneEndOfPlank} onChange={(event) => setLengthOfOneEndOfPlank(parseFloat(event?.target.value ?? 0))} />
				</label>
			</Form>
			<label>
				Layout for row: <NumberSpan value={lengthOfOneEndOfPlank} /> + {wholePieces} of whole planks + <NumberSpan value={lengthOfOtherEndOfPlank} />
			</label>
		</div>
	);
}
