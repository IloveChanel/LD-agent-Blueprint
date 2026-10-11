const themes = {
  futuristic: { label: "Futuristic", primary: "#39FF14", secondary: "#7C3AED", background: "#0B0F14" },
  modern: { label: "Modern", primary: "#2563EB", secondary: "#111827", background: "#F8FAFC" },
  clean: { label: "Clean", primary: "#57534E", secondary: "#A8A29E", background: "#FAFAF9" },
};

export function buildBlueprint({ projectName, description = "", theme = "modern", notes = "" }) {
  const colors = themes[theme] || themes.modern;
  const text = `${projectName} ${description}`.toLowerCase();
  const target = /mobile|iphone|android/.test(text) ? "mobile" : /desktop|terminal/.test(text) ? "desktop" : "web";
  const frame = target === "mobile" ? "tab bar" : target === "desktop" ? "window and side navigation" : "side navigation";
  const file = `export const palette = ${JSON.stringify({ primary: colors.primary, secondary: colors.secondary, background: colors.background })};
const themeName = process.env.THEME || ${JSON.stringify(theme)};
const githubToken = process.env.GITHUB_TOKEN || "PLACEHOLDER";
export function run() { return { themeName, palette, frame: ${JSON.stringify(frame)}, notes: ${JSON.stringify(notes)}, githubToken, ok: true }; }
`;
  return {
    projectName,
    theme,
    frame,
    colors,
    file,
    github: process.env.GITHUB_TOKEN ? "saved" : "placeholder",
    todo: ["Pick a theme button if this look is wrong.", "Type one note if you want a change."],
    missing: process.env.GITHUB_TOKEN ? [] : ["GITHUB_TOKEN"],
    questions: /web|dashboard|mobile|desktop/.test(text) ? [] : ["Is this a desktop app, a website, or a phone app?"],
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [projectName, description, theme] = process.argv.slice(2);
  console.log(JSON.stringify(buildBlueprint({ projectName: projectName || "Notes", description, theme }), null, 2));
}
