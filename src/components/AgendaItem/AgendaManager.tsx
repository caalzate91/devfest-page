import { useState } from "react";
import type { Talk } from "../../content/content.config";

type DataDevFestDays = "DataDay" | "DevFest";

interface AgendaManagerProps {
	talks: Talk[];
}

export default function AgendaManager({ talks }: AgendaManagerProps) {
	const [agendaDay, setAgendaDay] = useState<DataDevFestDays>("DataDay");

	console.log(talks);

	function changeAgendaDay(day: DataDevFestDays) {
		setAgendaDay(day);
	}

	return (
		<section className="bg-amber-200 flex flex-col w-full px-10">
			<div className="flex flex-row justify-center items-center mx-auto gap-11 w-1/3 h-auto text-sm md:text-base">
				<button
					type="button"
					onClick={() => changeAgendaDay("DataDay")}
					className="flex flex-col py-3 px-6 gap-1  bg-pink-200 min-w-36 w-auto cursor-pointer rounded-full "
				>
					<span className="font-bold">DataDay</span>
					<span className="text-xs md:text-sm">7 de noviembre</span>
				</button>
				<button
					type="button"
					onClick={() => changeAgendaDay("DevFest")}
					className="flex flex-col py-3 px-6 gap-1  bg-pink-200 min-w-36 w-auto cursor-pointer rounded-full "
				>
					<span className="font-bold">DevFest</span>
					<span className="text-xs md:text-sm">8 de noviembre</span>
				</button>
			</div>

			<section className="bg-cyan-200">
				{agendaDay === "DataDay" ? "a" : "Nu"}
			</section>
		</section>
	);
}
