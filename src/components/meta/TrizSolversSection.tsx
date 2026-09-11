import { TrizSolverCard } from "./TrizSolverCard";
import { TRIZ_SOLVERS } from "./trizSolvers";

type TrizSolversSectionProps = {
  interSansClassName: string;
};

export function TrizSolversSection({ interSansClassName }: TrizSolversSectionProps) {
  return (
    <section id="solvers" className="bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-[22px] px-6 py-16 md:px-12 md:py-20 lg:px-[96px] lg:py-[76px]">
        <p
          className={`m-0 text-[8.5px] font-medium uppercase leading-[1.4] tracking-[0.32em] text-[#a8a8a8] ${interSansClassName}`}
        >
          Команда решателей
        </p>
        <h2 className="flex items-center gap-[18px] font-serif text-[26px] font-normal leading-[1.2] text-[#0a0a0a] md:text-[34px]">
          <span className="block h-[34px] w-[3px] shrink-0 bg-[#0a0a0a]" aria-hidden />
          <span>Четыре экспертизы</span>
        </h2>
        <p
          className={`m-0 mb-4 max-w-[56ch] text-[12.5px] leading-[1.9] text-[#4a4a4a] [text-wrap:pretty] ${interSansClassName}`}
        >
          Четыре AI-ассистента с разными экспертизами для комплексного решения ваших задач.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {TRIZ_SOLVERS.map((solver) => (
            <TrizSolverCard
              key={solver.id}
              solver={solver}
              interSansClassName={interSansClassName}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
