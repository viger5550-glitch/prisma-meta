const pages = [
  "/",
  "/challenge",
  "/triz",
  "/agents",
  "/apps",
  "/about",
  "/mentorship",
  "/meta/manifesto",
];

async function main() {
  for (const path of pages) {
    const res = await fetch(`http://127.0.0.1:3055${path}`);
    const html = await res.text();
    const hasPrismaArrow = html.includes("← PRISMA") || html.includes("&larr; PRISMA");
    const hasBack = html.includes("← назад") || html.includes("BackButton");
    console.log(
      path,
      res.status,
      "arrowPrisma",
      hasPrismaArrow,
      "back",
      hasBack,
      "headerPrisma",
      html.includes(">PRISMA<"),
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
