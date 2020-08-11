import React from "react";
import Style from "../../components/Accordion/Accordion.module.scss";

export const AccordionItem = ({ source, setAccordion }) => {
	console.log(source);

	const handleAccordionItem = (event) => {
		source.isOpen = true;
		console.log(123);
		console.log(source);
		// console.log(event.currentTarget);
		// // source.source[0].isOpen = true;
		// setAccordion(source.source);
	};

	return (
		<div
			onClick={handleAccordionItem}
			className={`${Style["accordion-item"]} ${Style["selected"]}`}
		>
			<div className={Style["accordion-question"]}>
				<span>1. What business are you doing?</span>
			</div>
			<p className={Style["accordion-answer"]}>
				In the past few years India has made attempts to get back several
				historic items. Some historians claim that the Kohinoor was taken away
				from India by force.
			</p>
		</div>
	);
};
