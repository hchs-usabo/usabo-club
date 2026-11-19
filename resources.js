/*
  HOW TO ADD A RESOURCE
  1. Copy one block { ... }, paste it right below the last one, and add a comma after the previous block.
  2. Change the fields:
       title   - name shown on the card
       unit    - Campbell unit number 1-8, or 0 for general / multi-unit (e.g. full exams)
       type    - "guide", "practice", or "exam"
       format  - "doc" (Google Doc), "pdf", or "link"
       url     - Google Doc: paste the share link (set sharing to "Anyone with the link can view")
                 PDF: upload the file to the pdfs folder, then use "pdfs/your-file.pdf"
       desc    - one short sentence (optional)
       date    - YYYY-MM-DD (newest shows first)
  3. Leave url as "" to show a "Coming soon" card.

  The entries below are placeholders. Replace them with your real resources.
*/
const RESOURCES = [
  {
    title: "Cellular respiration study guide",
    unit: 2,
    type: "guide",
    format: "doc",
    url: "",
    desc: "Glycolysis, the citric acid cycle, and oxidative phosphorylation.",
    date: "2026-11-18"
  },
  {
    title: "Mendelian genetics problem set",
    unit: 3,
    type: "practice",
    format: "doc",
    url: "",
    desc: "Punnett squares, test crosses, and pedigree analysis.",
    date: "2026-11-10"
  },
  {
    title: "USABO Open Exam practice test",
    unit: 0,
    type: "exam",
    format: "pdf",
    url: "",
    desc: "Full-length past exam with worked solutions.",
    date: "2026-11-01"
  }
];
