import Image from "next/image";

import type { TrizSolver } from "./trizSolvers";

type TrizSolverCardProps = {
  solver: TrizSolver;
  interSansClassName: string;
};

export function TrizSolverCard({ solver, interSansClassName }: TrizSolverCardProps) {
  return (
    <article className="flex flex-col gap-4 bg-[#F2F2F2] px-6 py-7">
      <Image
        src={solver.imageSrc}
        alt={solver.imageAlt}
        width={120}
        height={120}
        className="mx-auto size-[120px] rounded-full object-cover object-center"
      />
      <div className="flex flex-col items-center gap-2">
        <h3 className="font-serif text-[26px] font-normal leading-none text-[#0a0a0a]">
          {solver.name}
        </h3>
        <p
          className={`text-[9.5px] font-semibold uppercase leading-none tracking-[0.24em] text-[#5a5ad6] ${interSansClassName}`}
        >
          {solver.roleLabel}
        </p>
      </div>
      <div className="flex flex-col gap-4 border-t border-[#e0e0e0] pt-5">
        <SolverField
          label="Роль"
          text={solver.roleText}
          interSansClassName={interSansClassName}
        />
        <SolverField
          label="Орудия"
          text={solver.tools}
          interSansClassName={interSansClassName}
        />
        <SolverField
          label="Используй"
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
    <div className="flex flex-col gap-1.5">
      <p
        className={`text-[8.5px] font-bold uppercase leading-none tracking-[0.24em] text-[#0a0a0a] ${interSansClassName}`}
      >
        {label}
      </p>
      <p
        className={`text-[11.5px] leading-[1.8] text-[#4a4a4a] [text-wrap:pretty] ${interSansClassName}`}
      >
        {text}
      </p>
    </div>
  );
}
