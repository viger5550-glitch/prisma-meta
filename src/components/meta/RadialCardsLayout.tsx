import type { CSSProperties, ReactNode } from "react";

export type RadialLayoutItem<T> = {
  id: string;
  angleDeg: number;
  rotationDeg: number;
  data: T;
};

export function radialOffset(angleDeg: number, radiusPx: number): { x: number; y: number } {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: radiusPx * Math.cos(rad),
    y: radiusPx * Math.sin(rad),
  };
}

type RadialCardsLayoutProps<T> = {
  items: RadialLayoutItem<T>[];
  radiusPx: number;
  center: ReactNode;
  renderCard: (item: RadialLayoutItem<T>, index: number) => ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function RadialCardsLayout<T>({
  items,
  radiusPx,
  center,
  renderCard,
  className = "",
  style,
}: RadialCardsLayoutProps<T>) {
  return (
    <div className={`relative mx-auto hidden aspect-square lg:block ${className}`} style={style}>
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">{center}</div>

      {items.map((item, index) => {
        const { x, y } = radialOffset(item.angleDeg, radiusPx);
        return (
          <div
            key={item.id}
            className="absolute z-[5] hover:z-[35]"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: `translate(-50%, -50%) rotate(${item.rotationDeg}deg)`,
            }}
          >
            {renderCard(item, index)}
          </div>
        );
      })}
    </div>
  );
}
