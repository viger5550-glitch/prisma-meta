import type { HomeOffer } from "./homeOffers";

function ChallengeCover() {
  return (
    <div className="flex h-full items-end gap-0 px-[12%] pb-[10%] pt-[10%]">
      <span className="h-[22%] flex-1 border-r-4 border-t-4 border-[#3a3a3a]" />
      <span className="h-[40%] flex-1 border-r-4 border-t-4 border-[#5a5a5a]" />
      <span className="h-[58%] flex-1 border-r-4 border-t-4 border-[#8a8a8a]" />
      <span className="h-[76%] flex-1 border-r-4 border-t-4 border-[#d8d8d8]" />
      <span className="h-full flex-1 border-t-4 border-[#00e37a]" />
    </div>
  );
}

function TrizCover() {
  return (
    <div className="grid h-full grid-cols-2 grid-rows-2 place-items-center gap-[10%] p-[14%]">
      <span className="aspect-square w-[82%] rounded-full bg-[#0a0a0a]" />
      <span className="aspect-square w-[82%] rounded-full border-[2.5px] border-[#0a0a0a]" />
      <span className="aspect-square w-[82%] rounded-full border-[2.5px] border-[#5a5ad6]" />
      <span className="aspect-square w-[82%] rounded-full bg-[#5a5ad6]" />
    </div>
  );
}

function KnowledgeCover() {
  return (
    <div className="flex h-full flex-col justify-center gap-[6%] px-[12%] py-[14%]">
      <span className="h-[4%] w-full bg-[#d8d8d8]" />
      <span className="h-[4%] w-[78%] bg-[#5a5a5a]" />
      <span className="h-[4%] w-[92%] bg-[#5a5a5a]" />
      <span className="h-[4%] w-[46%] bg-[#00e37a]" />
      <span className="h-[4%] w-[84%] bg-[#5a5a5a]" />
      <span className="h-[4%] w-[62%] bg-[#3a3a3a]" />
    </div>
  );
}

function AgentsCover() {
  return (
    <div className="flex h-full w-full items-center justify-center px-[8%]">
      <span className="aspect-square w-[18%] bg-[#0a0a0a]" />
      <span className="h-[2px] w-[9%] bg-[#0a0a0a]" />
      <span className="flex aspect-square w-[26%] items-center justify-center border-[2.5px] border-[#5a5ad6]">
        <span className="aspect-square w-[36%] bg-[#5a5ad6]" />
      </span>
      <span className="h-[2px] w-[9%] bg-[#0a0a0a]" />
      <span className="aspect-square w-[18%] border-[2.5px] border-[#0a0a0a]" />
    </div>
  );
}

function AppsCover() {
  return (
    <div className="flex h-full items-center justify-center p-[12%]">
      <span className="flex aspect-[58/90] h-[78%] flex-col gap-[7%] border-[2.5px] border-[#0a0a0a] px-[14%] py-[12%]">
        <span className="h-[10%] w-full bg-[#0a0a0a]" />
        <span className="h-[6%] w-[72%] bg-[#c8c8c8]" />
        <span className="h-[6%] w-[90%] bg-[#c8c8c8]" />
        <span className="mt-auto h-[12%] w-full bg-[#5a5ad6]" />
      </span>
    </div>
  );
}

export function HomeCatalogCover({
  id,
  variant,
}: {
  id: HomeOffer["id"];
  variant: HomeOffer["variant"];
}) {
  const bg = variant === "dark" ? "bg-[#141414]" : "bg-[#f1f1f1]";

  return (
    <div className={`aspect-square w-full overflow-hidden ${bg}`}>
      <div className="h-full w-full origin-center transition-transform duration-500 ease-out motion-reduce:transition-none group-hover:scale-105">
        {id === "challenge" ? <ChallengeCover /> : null}
        {id === "triz" ? <TrizCover /> : null}
        {id === "knowledge" ? <KnowledgeCover /> : null}
        {id === "agents-dev" ? <AgentsCover /> : null}
        {id === "apps-dev" ? <AppsCover /> : null}
      </div>
    </div>
  );
}
