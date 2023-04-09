import styled from "styled-components";

const ButtonStyled = styled.div({
	cursor: "pointer",
	border: "1px solid black",
});

interface IProps
{
	label: string;
	onClick: () => void;
}

export default function Button(props: IProps)
{
	return (
		<ButtonStyled onClick={props.onClick}>{props.label}</ButtonStyled>
	);
}

