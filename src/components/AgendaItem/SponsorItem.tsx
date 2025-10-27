import dayjs from "dayjs";
import type { Talk } from "../../content.config";

interface SponsorItemProps {
  talkInfo: Talk;
}

export default function SponsorItem({ talkInfo }: SponsorItemProps) {
  const { title, startDate, sponsors = [], description } = talkInfo;

  return (
    <article className="flex flex-col bg-[#DFF6FF] md:flex-row md:items-center min-h-14 p-2 rounded-lg">
      <p className="w-1/4 min-w-auto font-bold md:text-center text-sm md:text-base">
        {dayjs(startDate).format("hh:mm A")}
      </p>

      <div className="flex flex-col md:flex-row md:items-center w-full gap-3">
        {sponsors.map((sponsor) => (
          <img
            key={sponsor}
            src={`/assets/images/sponsors/${sponsor}.png`}
            alt={sponsor}
            className="w-16 object-contain"
          />
        ))}

        <div className="flex flex-col">
			<p className="font-bold text-sm md:text-base truncate max-w-[250px] md:max-w-none">
			{title}
			</p>
			
			{description && (
				<p className="italic text-xs md:text-sm text-gray-700">
				{description}
				</p>
			)}
		</div>
      </div>
    </article>
  );
}
