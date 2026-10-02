/** Общие токены и мелкие элементы главной студии. Шрифты задаёт MetaHomePage. */

export const serif = "font-[family-name:var(--font-studio-playfair),Georgia,serif] font-normal";
export const sans = "font-[family-name:var(--font-studio-montserrat),Helvetica,Arial,sans-serif]";

export const GREEN = "#00e37a";
export const VIOLET = "#5a5ad6";
export const shell = "px-[6vw]";
export const lift =
  "transition-[transform,box-shadow,border-color] duration-[400ms] ease-[cubic-bezier(.2,.8,.2,1)]";

export function Dot({ size = 6 }: { size?: number }) {
  return (
    <span
      className="inline-block shrink-0 rounded-full"
      style={{ width: size, height: size, background: GREEN }}
    />
  );
}

export function Eyebrow({ children, color = "#a8a8a8" }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className="m-0 flex items-center gap-[10px] text-[8.5px] font-medium uppercase leading-[1.4] tracking-[.32em]"
      style={{ color }}
    >
      <Dot />
      {children}
    </p>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-4">
      <Eyebrow>{eyebrow}</Eyebrow>
      <div className="flex items-center gap-[18px]">
        <span className="block h-[34px] w-[3px] flex-none bg-[#0a0a0a]" />
        <h2 className={`m-0 text-[30px] leading-[1.2] text-pretty ${serif}`}>{title}</h2>
      </div>
    </div>
  );
}
