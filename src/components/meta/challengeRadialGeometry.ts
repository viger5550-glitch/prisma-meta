import type { RadialLayoutItem } from "./RadialCardsLayout";
import type { ChallengeTrack } from "./challengeTracks";

export const CHALLENGE_PENTAGON_LAYOUT = [
  { position: "top", angleDeg: -90, rotationDeg: 0 },
  { position: "rightTop", angleDeg: -18, rotationDeg: 60 },
  { position: "rightBottom", angleDeg: 54, rotationDeg: -60 },
  { position: "leftBottom", angleDeg: 126, rotationDeg: 60 },
  { position: "leftTop", angleDeg: 198, rotationDeg: -60 },
] as const;

export function mapChallengeTracksToRadialItems(
  tracks: ChallengeTrack[],
): RadialLayoutItem<ChallengeTrack>[] {
  return tracks.map((track, index) => {
    const geo = CHALLENGE_PENTAGON_LAYOUT[index] ?? CHALLENGE_PENTAGON_LAYOUT[0];
    return {
      id: `${geo.position}-${track.slug}`,
      angleDeg: geo.angleDeg,
      rotationDeg: geo.rotationDeg,
      data: track,
    };
  });
}
