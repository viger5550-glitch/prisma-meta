import Image from "next/image";

import type { TrizSolver } from "./trizSolvers";

type TrizSolverCardProps = {
  solver: TrizSolver;
  interSansClassName: string;
};

export function TrizSolverCard({ solver, interSansClassName }: TrizSolverCardProps) {
  return (
    <article className="flex h-full flex-col bg-[#E6E6E6] p-[22px] pt-[26px] shadow-[0_8px_28px_rgba(0,0,0,0.09)] rounded-[2px]">
      <Image
        src={solver.imageSrc}
        alt={solver.imageAlt}
        width={136}
        height={136}
        className="mx-auto aspect-square size-full max-w-[136px] rounded-[18px] object-cover object-center"
      />
      <h3 className="mt-[18px] text-center font-serif text-[26px] leading-[1.1] text-black">
        {solver.name}
      </h3>
      <p
        className={`mt-2.5 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-black ${interSansClassName}`}
      >
        {solver.roleLabel}
      </p>
      <div className="mt-5 flex flex-col gap-4 border-t border-[#D2D2D2] pt-5">
        <SolverField
          label="РОЛЬ"
          text={solver.roleText}
          interSansClassName={interSansClassName}
        />
        <SolverField
          label="ОРУДИЯ"
          text={solver.tools}
          interSansClassName={interSansClassName}
        />
        <SolverField
          label="ИСПОЛЬЗУЙ"
          text={solver.useWhen}
          interSansClassName={interSansClassName}
        />
      </div>
    </article>
  );
}

function SolverField({
  label,
  text,
  interSansClassName,
}: {
  label: string;
  text: string;
  interSansClassName: string;
}) {
  return (
    <div>
      <p
        className={`text-[9px] font-bold uppercase tracking-[0.24em] text-black ${interSansClassName}`}
      >
        {label}
      </p>
      <p className={`mt-1.5 text-[12.5px] leading-[1.8] text-zinc-600 ${interSansClassName}`}>
        {text}
      </p>
    </div>
  );
}
