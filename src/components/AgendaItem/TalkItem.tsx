import React from "react";

import dayjs from "dayjs";
import type { Talk } from "../../content.config";

interface TalkItemProps {
	talkInfo: Talk;
}

export default function TalkItem({ talkInfo }: TalkItemProps) {
	const {
		startDate,
		title,
		description,
		speaker,
	} = talkInfo;

	const speakerImg = `/assets/images/speakers/undefined.png`

	return (
		<article className="flex flex-col md:flex-row items-start">
			<p className="w-1/4 min-w-auto mt-2 font-bold md:text-center text-sm md:text-base">
				{dayjs(startDate).format("hh:mm A")}
			</p>
			<div className=" w-full">
				<h4 className="font-bold my-2 text-sm md:text-base">{title}</h4>
				<div className="flex flex-row gap-6 items-center">
					<img src={speakerImg} alt={`Speaker photo ${speaker}`} className="w-14 rounded-full" />
					<div className="flex flex-col">
						<p className="font-semibold">{speaker}</p>
						<p>Cargo de la persona</p>
					</div>
				</div>
				<p className="font-light my-2">{description}</p>
			</div>
		</article>
	);
}
