import type { Talk } from "../../content.config";
import type { DataDevFestDays } from "./AgendaManager";
import InfoItem from "./InfoItem";

import TalkItem from "./TalkItem";
import SponsorItem from "./SponsorItem";
import { useIsMobile } from "../../hooks/useIsMobile";

interface AgendaDayProps {
  talks: Talk[];
  eventDay: DataDevFestDays;
}

export default function AgendaDay({ talks, eventDay }: AgendaDayProps) {
  const isMobile = useIsMobile();
  console.log(isMobile);

  function renderMobileAgenda() {
    const track1Items = talks.filter(t => t.track.includes("track1"));
    const track2Items = talks.filter(t => t.track.includes("track2"));

    return (
      <>
        {eventDay === "devfest" && (
          <>
            <h3 className="font-bold text-3xl mx-auto">Auditorio Xepia</h3>

            {track1Items.map((t) => {
              switch (t.type) {
                case "talk":
                  return <TalkItem key={t.id} talkInfo={t} />;
                case "break":
                  return <InfoItem key={t.id} talkInfo={t} />;
                case "sponsor":
                  return <SponsorItem key={t.id} talkInfo={t} />;
                default:
                  return <p key={t.id}>{t.title}</p>;
              }
            })}

            <h3 className="font-bold text-3xl mx-auto my-5">Torreón</h3>
            {track2Items.map((t) => {
              switch (t.type) {
                case "talk":
                  return <TalkItem key={t.id} talkInfo={t} />;
                case "break":
                  return <InfoItem key={t.id} talkInfo={t} />;
                case "sponsor":
                  return <SponsorItem key={t.id} talkInfo={t} />;
                default:
                  return <p key={t.id}>{t.title}</p>;
              }
            })}
          </>
        )}
        {eventDay === "dataday" && (
          <>
            <h3 className="font-bold text-3xl mx-auto my-2">
              Auditorio Quincha
            </h3>

            {track1Items.map((t) => {
              switch (t.type) {
                case "talk":
                  return <TalkItem key={t.id} talkInfo={t} />;
                case "break":
                  return <InfoItem key={t.id} talkInfo={t} />;
                case "sponsor":
                  return <SponsorItem key={t.id} talkInfo={t} />;
                default:
                  return <p key={t.id}>{t.title}</p>;
              }
            })}
          </>
        )}
      </>
    );
  }

  if (isMobile) {
    return renderMobileAgenda()
  }

  return (
    <>
      {/* ONLY FOR DEVFEST, WE NEED TO PUT A TITLE FOR EACH TRACK */}
      {eventDay === "devfest" && (
        <>
          <h3 className="font-bold text-3xl mx-auto my-2">Auditorio Quincha</h3>
          <h3 className="font-bold text-3xl mx-auto my-2">Aulas 1, Torreón 3</h3>
        </>
      )}
      {eventDay === "dataday" && (
        <>
          <h3 className="font-bold text-3xl mx-auto my-2">Auditorio Quincha</h3>
        </>
      )}

      {/* RENDER ALL JSON DATA */}
      {talks.map((t) => {
        switch (t.type) {
          case "talk":
            return <TalkItem key={t.id} talkInfo={t} />;
          case "break":
            return <InfoItem key={t.id} talkInfo={t} />;
          case "sponsor":
            return <SponsorItem key={t.id} talkInfo={t} />;
          default:
            return <p key={t.id}>{t.title}</p>;
        }
      })}
    </>
  );
}
