import React from "react";
import { Accordion } from "./components/Accordion/Accordion";

let accordion = [
	{
		question: "What is your name1?",
		answer: "My name is Andrii",
		isOpen: false,
	},
	{
		question: "What is your name2?",
		answer: "My name is Mihai",
		isOpen: true,
	},
	{
		question: "What is your name3?",
		answer: "My name is Kate",
		isOpen: false,
	},
];

export const App = () => {
	return (
		<>
			<Accordion source={accordion} />
		</>
	);
};
