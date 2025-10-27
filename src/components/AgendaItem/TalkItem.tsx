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
		speakers = []
		// speaker,
		// position,
		// descripion,
		// speakerImage
	} = talkInfo;

	// const speakerSrc = speakerImage
	// 	? `/assets/images/speakers/${speakerImage}`
	// 	: `/assets/images/speakers/undefined.png`;

	return (
		<article className="flex flex-col md:flex-row items-start">
			<p className="w-1/4 min-w-auto mt-2 font-bold md:text-center text-sm md:text-base">
				{dayjs(startDate).format("hh:mm A")}
			</p>
			<div className=" w-full">
				<h4 className="font-bold my-2 text-sm md:text-base">{title}</h4>

				{/* <div className="flex flex-col gap-4"> */}
				<div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
					{speakers.map((spk, index) => {
						const speakerSrc = spk.image
							? `/assets/images/speakers/${spk.image}`
							: `/assets/images/speakers/undefined.png`;

						return (
							<div key={index} className="flex flex-row gap-4 items-center p-2">
								<img src={speakerSrc} aria-hidden alt={`Speaker photo ${speakerSrc}`} className="w-14 rounded-full"
									onError={(e) => {
										e.currentTarget.src = `/assets/images/speakers/undefined.png`
									}}
								/>
								<div className="flex flex-col">
									<p className="font-semibold">{spk.name}</p>
									{spk.position && (
										<p className="text-sm text-gray-700">{spk.position}</p>
									)}
									{spk.description && (
										<p className="text-xs italic text-gray-600">{spk.description}</p>
									)}
								</div>
							</div>
						);
					})}
				</div>

				<p className="font-light my-2">{description}</p>
			</div>
		</article>
	);
}
