
import { useEffect, useState } from "react";
import type { TalkEntry } from "../../content.config";
import AgendaDay from "./AgendaDay";

export type DataDevFestDays = "dataday" | "devfest";

interface AgendaManagerProps {
	talks: TalkEntry[];
}

export default function AgendaManager({ talks }: AgendaManagerProps) {
	const [selectedAgendaDay, setSelectedAgendaDay] =
		useState<DataDevFestDays>("devfest");
	const [agendaInfo, setAgendaInfo] = useState(talks[1].data.talks);

	const oneTrackStyles = " w-full grid grid-cols-1 gap-4  my-8";
	const twoTrackStyles =
		" w-full grid grid-cols-1 md:grid-cols-2 gap-4  my-8";

	useEffect(() => {
		const selectedDay = talks.find((t) => t.id === selectedAgendaDay);

		if (!selectedDay || selectedDay.data === undefined)
			throw new Error(
				"Nombre de archivo json para la carpeta talks no tratado.",
			);
		// Change the agenda depending on the selected day
		setAgendaInfo(selectedDay.data.talks);
	}, [selectedAgendaDay]);

	function changeAgendaDay(day: DataDevFestDays) {
		setSelectedAgendaDay(day);
	}

	function detectDevFestDay() {
		const isDevFestDay = 1;
	}

	return (
		<section className="flex flex-col w-full px-10">
			<div className="flex flex-row justify-center items-center mx-auto gap-11 w-1/3 h-auto text-sm md:text-base">
				<button
					type="button"
					onClick={() => changeAgendaDay("dataday")}

					className="flex flex-col py-3 px-6 gap-1  bg-pink-200 hover:bg-[#F5A8CC] min-w-36 md:min-w-52 w-auto cursor-pointer rounded-full "
				>
					<span className="font-bold">DataDay</span>
					<span className="text-xs md:text-sm">7 de noviembre</span>
				</button>
				<button
					type="button"
					onClick={() => changeAgendaDay("devfest")}
					className="flex flex-col py-3 px-6 gap-1  bg-[#CCF6C5] hover:bg-[#BEECA0] min-w-36 md:min-w-52 w-auto cursor-pointer rounded-full "
				>
					<span className="font-bold">DevFest</span>
					<span className="text-xs md:text-sm">8 de noviembre</span>
				</button>
			</div>


			<section
				className={
					selectedAgendaDay === "dataday" ? oneTrackStyles : twoTrackStyles
				}
			>
				<AgendaDay talks={agendaInfo} eventDay={selectedAgendaDay} />

			</section>
		</section>
	);
}
