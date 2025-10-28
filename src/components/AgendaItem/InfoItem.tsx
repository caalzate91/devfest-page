import dayjs from "dayjs";
import type { Talk } from "../../content.config";

interface TalkItemProps {
	talkInfo: Talk;
}

export default function InfoItem({ talkInfo }: TalkItemProps) {
	const { title, startDate } = talkInfo;
	return (
		<article className="flex flex-col bg-[#FFE7A5] p-2 md:flex-row md:items-center min-h-14">
			<p className="w-1/4 min-w-auto font-bold md:text-center text-sm md:text-base">
				{dayjs(startDate).format("hh:mm A")}
			</p>
			<p className="w-full font-bold">{title}</p>
		</article>
	);
}
