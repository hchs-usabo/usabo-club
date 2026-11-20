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
    title: "Unit 1: Chemistry of life study guide",
    unit: 1,
    type: "guide",
    format: "pdf",
    url: "pdfs/usabo unit 1-the chemistry of life-study guide",
    desc: "Water, carbon, and the four classes of macromolecules.",
    date: "2026-11-19"
  }
];
