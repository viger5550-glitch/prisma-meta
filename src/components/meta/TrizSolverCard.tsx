import Image from "next/image";

import type { TrizSolver } from "./trizSolvers";

type TrizSolverCardProps = {
  solver: TrizSolver;
  interSansClassName: string;
};

export function TrizSolverCard({ solver, interSansClassName }: TrizSolverCardProps) {
  return (
    <article
      className="flex min-w-0 flex-[1_1_160px] flex-col bg-[#E6E6E6] px-[22px] pb-[22px] pt-[26px]"
      style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.09)" }}
    >
      <Image
        src={solver.imageSrc}
        alt={solver.imageAlt}
        width={136}
        height={136}
        className="mx-auto block aspect-square h-auto w-full max-w-[136px] rounded-[18px] object-cover object-center"
      />
      <h3
        className="mt-[18px] text-center font-serif text-[26px] font-normal leading-[1.1] text-black"
      >
        {solver.name}
      </h3>
      <p
        className={`mt-[10px] text-center text-[10px] font-bold uppercase tracking-[0.22em] text-[#0a0a0a] ${interSansClassName}`}
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
        className={`text-[9px] font-bold uppercase tracking-[0.24em] text-[#0a0a0a] ${interSansClassName}`}
      >
        {label}
      </p>
      <p
        className={`mt-1.5 text-[12.5px] leading-[1.8] text-[#5f5f5f] ${interSansClassName}`}
      >
        {text}
      </p>
    </div>
  );
}
