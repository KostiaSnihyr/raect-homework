import React, { useState, createContext } from "react";
import { AccordionItem } from "../../elements/AccordionItem/AccordionItem";
import Styles from "./Accordion.module.scss";

export const Context = createContext();

export const Accordion = ({ source }) => {
	const [accordion, setAccordion] = useState({ source });

	const accordionItemsJSX = source.map((elem, index) => {
		if (elem.isOpen === false) {
			return (
				<AccordionItem setAccordion={setAccordion} source={elem} key={index} />
			);
		}
	});

	return (
		<section className={Styles.accordion}>
			<h1>Accordion</h1>
			{accordionItemsJSX}
		</section>
	);
};
