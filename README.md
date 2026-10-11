# UI Blueprint

Fourth agent for Logically Done. Open this folder in Visual Studio Code or Visual Studio.

Three theme buttons carry the colors:

- Futuristic: `#39FF14`, `#7C3AED`, `#0B0F14`
- Modern: `#2563EB`, `#111827`, `#F8FAFC`
- Clean: `#57534E`, `#A8A29E`, `#FAFAF9`

The live page calls `/api/owner/logically-done/blueprint`. If `GITHUB_TOKEN` is missing, the result stays JSON and the file is still saved on the project and in the library.

```text
npm start -- "Notes" "A web notes dashboard" modern
```
