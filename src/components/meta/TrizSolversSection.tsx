import { TrizSolverCard } from "./TrizSolverCard";
import { TRIZ_SOLVERS } from "./trizSolvers";

type TrizSolversSectionProps = {
  interSansClassName: string;
};

const SOLVER_PAIRS = [TRIZ_SOLVERS.slice(0, 2), TRIZ_SOLVERS.slice(2, 4)] as const;

export function TrizSolversSection({ interSansClassName }: TrizSolversSectionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24 lg:px-[96px] lg:py-[120px]">
        <div className="max-w-[1060px]">
          <p className={`text-[10px] uppercase tracking-[0.4em] text-black/50 ${interSansClassName}`}>
            КОМАНДА РЕШАТЕЛЕЙ
          </p>
          <h2 className="mt-5 flex items-start font-serif text-[32px] leading-[1.05] tracking-[-0.02em] text-black md:text-[40px]">
            <span className="mr-1 -translate-x-[0.1em]">|</span>
            <span>Команда решателей</span>
          </h2>
          <p
            className={`mt-3 max-w-[520px] text-[17px] leading-[1.8] text-zinc-800 ${interSansClassName}`}
          >
            Четыре AI-ассистента с разными экспертизами для комплексного решения ваших задач.
          </p>

          <div className="mt-[58px] flex flex-wrap gap-[26px]">
            {SOLVER_PAIRS.map((pair) => (
              <div
                key={pair[0].id}
                className="flex min-w-0 flex-[1_1_340px] flex-wrap gap-[26px]"
              >
                {pair.map((solver) => (
                  <TrizSolverCard
                    key={solver.id}
                    solver={solver}
                    interSansClassName={interSansClassName}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
