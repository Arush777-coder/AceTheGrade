import { jsPDF } from 'jspdf';
import { biology9Pages } from '../data/biology9Data';
import { physics9Pages } from '../data/physics9Data';
import { chemistry9Pages } from '../data/chemistry9Data';

// Helper to sanitize strings for standard PDF printing
const cleanText = (str: any): string => {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/[\u2013\u2014]/g, '-') // replace en/em dashes with simple dash
    .replace(/[\u2018\u2019]/g, "'") // single quotes
    .replace(/[\u201C\u201D]/g, '"') // double quotes
    .replace(/\u2022/g, '*')         // bullet point
    .replace(/\u2192/g, '->')        // right arrow
    .replace(/\u00B0/g, ' deg ')     // degree symbol
    .trim();
};

export const generateKitPDF = async (kitId: string, kitName: string, studentName?: string) => {
  const name = studentName ? studentName.trim() : 'Premium Scholar';
  
  // Decide which dataset to use
  if (kitId === 'subject-9-biology') {
    return generateBiology9PDF(name);
  } else if (kitId === 'subject-9-physics') {
    return generatePhysics9PDF(name);
  } else if (kitId === 'subject-9-chemistry') {
    return generateChemistry9PDF(name);
  } else if (kitId === 'c9-science') {
    return generateCombinedSciencePDF(name);
  } else if (kitId.toLowerCase().includes('english') || kitName.toLowerCase().includes('english')) {
    const classNum = kitId.includes('10') ? '10' : '9';
    return generateEnglishPDF(classNum, name);
  } else if (kitId.toLowerCase().includes('sanskrit') || kitName.toLowerCase().includes('sanskrit')) {
    const classNum = kitId.includes('10') ? '10' : '9';
    return generateSanskritPDF(classNum, name);
  } else {
    // Other subjects like Hindi, Social Science, Class 10/11/12 kits
    return generateGenericKitPDF(kitId, kitName, name);
  }
};

// --- PDF COMPILER ENGINE ---

// Common page rendering state
interface PDFState {
  doc: jsPDF;
  y: number;
  pageNum: number;
  chapterTitle: string;
  pageTitle: string;
  themeColor: [number, number, number];
  studentName: string;
}

const initPageBorderAndHeader = (state: PDFState) => {
  const { doc, pageNum, chapterTitle, pageTitle, themeColor } = state;
  const c = themeColor;

  // A4 dimensions: 210 x 297 mm
  // Draw page border
  doc.setDrawColor(226, 232, 240);
  doc.setLineWidth(0.5);
  doc.rect(8, 8, 194, 281);

  // Top primary solid header bar
  doc.setFillColor(c[0], c[1], c[2]);
  doc.rect(8, 8, 194, 5, 'F');

  // Bottom primary solid footer bar
  doc.setFillColor(c[0], c[1], c[2]);
  doc.rect(8, 284, 194, 5, 'F');

  // Top running header text
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(c[0], c[1], c[2]);
  const displayChapter = cleanText(chapterTitle).substring(0, 50);
  doc.text(displayChapter + (chapterTitle.length > 50 ? '...' : ''), 15, 18);
  
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(148, 163, 184);
  const displayTitle = cleanText(pageTitle).substring(0, 35);
  doc.text(displayTitle + (pageTitle.length > 35 ? '...' : ''), 145, 18);

  // Running Divider Line
  doc.setDrawColor(241, 245, 249);
  doc.line(15, 21, 195, 21);

  // Footer text
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`AceTheGrade digital copy licensed to: ${cleanText(state.studentName)}`, 15, 281);
  doc.text(`Page ${pageNum}`, 180, 281);

  state.y = 28;
};

const checkPageSpace = (state: PDFState, neededHeight: number) => {
  if (state.y + neededHeight > 272) {
    state.doc.addPage();
    state.pageNum++;
    initPageBorderAndHeader(state);
  }
};

const drawCoverPage = (doc: jsPDF, title: string, subtitle: string, color: [number, number, number], studentName: string) => {
  // Border
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.75);
  doc.rect(8, 8, 194, 281);

  // Top colored block
  doc.setFillColor(color[0], color[1], color[2]);
  doc.rect(8, 8, 194, 15, 'F');

  // Theme header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.setTextColor(255, 255, 255);
  doc.text('ACE THE GRADE • PREMIUM STUDY RESOURCE', 65, 17);

  // Title Box
  doc.setDrawColor(color[0], color[1], color[2]);
  doc.setLineWidth(1);
  doc.setFillColor(250, 250, 250);
  doc.rect(20, 50, 170, 70, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(15, 23, 42); // slate-900
  const titleLines = doc.splitTextToSize(cleanText(title), 150);
  let titleY = 68;
  titleLines.forEach((l: string) => {
    doc.text(l, 30, titleY);
    titleY += 12;
  });

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(color[0], color[1], color[2]);
  doc.text('FAST-RECALL CHEAT SHEET & COMPLETE STUDY COMPANION', 30, 105);

  // Subtitle
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(12);
  doc.setTextColor(71, 85, 105);
  const subLines = doc.splitTextToSize(cleanText(subtitle), 160);
  let subY = 135;
  subLines.forEach((l: string) => {
    doc.text(l, 20, subY);
    subY += 7;
  });

  // Features Table
  doc.setDrawColor(226, 232, 240);
  doc.setFillColor(248, 250, 252);
  doc.rect(20, 160, 170, 65, 'FD');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('What’s Inside This Revision Guide:', 25, 172);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(51, 65, 85);
  const defaultFeatures = [
    '* Highly structured formula/mechanism diagrams for active recall.',
    '* Board-focused points double-vetted by senior examiners.',
    '* Crucial list of common traps and quick correction templates.',
    '* Hand-picked topper answer structures for maximum grades.'
  ];
  
  let featY = 182;
  defaultFeatures.forEach((f) => {
    doc.text(f, 25, featY);
    featY += 7;
  });

  // Student details license footer box
  doc.setFillColor(241, 245, 249);
  doc.rect(20, 235, 170, 32, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text('LICENSED SECURITY MANIFEST', 25, 243);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(15, 23, 42);
  doc.text(`Authorized Student: ${cleanText(studentName)}`, 25, 251);
  doc.text(`Release Version: 2026.1 (Academic Syllabus Grounded)`, 25, 257);
  doc.text(`License Token: ATG-${Math.random().toString(36).substr(2, 9).toUpperCase()}-PAID`, 25, 263);

  // Bottom colored footer strip
  doc.setFillColor(color[0], color[1], color[2]);
  doc.rect(8, 284, 194, 5, 'F');
};

// General engine to render structured layout sheets
const renderPageContent = (state: PDFState, page: any) => {
  const { doc, themeColor } = state;
  const c = themeColor;

  // Render Page Title
  checkPageSpace(state, 15);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(15, 23, 42);
  doc.text(cleanText(page.title), 15, state.y);
  state.y += 8;

  // Subtitle if any
  if (page.subtitle) {
    checkPageSpace(state, 10);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(71, 85, 105);
    const subLines = doc.splitTextToSize(cleanText(page.subtitle), 175);
    subLines.forEach((l: string) => {
      doc.text(l, 15, state.y);
      state.y += 5.5;
    });
    state.y += 2;
  }

  const pType = page.type;
  const content = page.content;

  if (!content) return;

  // 1. Key Concepts Template
  if (pType === 'key-concepts') {
    if (content.intro) {
      checkPageSpace(state, 15);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10.5);
      doc.setTextColor(51, 65, 85);
      const introLines = doc.splitTextToSize(cleanText(content.intro), 175);
      introLines.forEach((l: string) => {
        doc.text(l, 15, state.y);
        state.y += 5.5;
      });
      state.y += 4;
    }

    if (content.concepts && Array.isArray(content.concepts)) {
      content.concepts.forEach((concept: any) => {
        const titleText = cleanText(concept.heading);
        const bodyText = cleanText(concept.body);

        // Estimate height
        const bodyLines = doc.splitTextToSize(bodyText, 170);
        const boxHeight = 8 + (bodyLines.length * 5.5);

        checkPageSpace(state, boxHeight + 8);

        // Draw left indicator bar
        doc.setFillColor(c[0], c[1], c[2]);
        doc.rect(15, state.y, 2, boxHeight, 'F');

        // Draw light grey background box
        doc.setFillColor(250, 250, 250);
        doc.rect(17, state.y, 173, boxHeight, 'F');

        // Render Title
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(15, 23, 42);
        doc.text(titleText, 22, state.y + 5);

        // Render Body
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(51, 65, 85);
        let currentY = state.y + 11;
        bodyLines.forEach((line: string) => {
          doc.text(line, 22, currentY);
          currentY += 5.5;
        });

        state.y += boxHeight + 5;
      });
    }
  }

  // 2. Cell Boundaries & Transport Template
  else if (pType === 'boundaries') {
    // Left & Right layout or stacked layout for PDF
    if (content.boundaries && Array.isArray(content.boundaries)) {
      checkPageSpace(state, 12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(c[0], c[1], c[2]);
      doc.text('Cellular Boundaries:', 15, state.y);
      state.y += 6;

      content.boundaries.forEach((b: any) => {
        const bLines = doc.splitTextToSize(cleanText(b.description), 170);
        checkPageSpace(state, 8 + bLines.length * 5);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(15, 23, 42);
        doc.text(`• ${cleanText(b.name)}:`, 18, state.y);
        
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(51, 65, 85);
        
        let startX = 20 + doc.getTextWidth(`• ${cleanText(b.name)}: `);
        if (startX > 80) {
          state.y += 5;
          startX = 22;
        }

        let firstLine = true;
        bLines.forEach((l: string) => {
          if (firstLine) {
            doc.text(l, startX, state.y);
            firstLine = false;
          } else {
            doc.text(l, 22, state.y);
          }
          state.y += 5;
        });
        state.y += 2;
      });
    }

    if (content.transport && Array.isArray(content.transport)) {
      state.y += 3;
      checkPageSpace(state, 12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(c[0], c[1], c[2]);
      doc.text('Cell Transport Systems:', 15, state.y);
      state.y += 6;

      content.transport.forEach((t: any) => {
        const tLines = doc.splitTextToSize(cleanText(t.description), 170);
        checkPageSpace(state, 8 + tLines.length * 5);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(15, 23, 42);
        doc.text(`• ${cleanText(t.name)}:`, 18, state.y);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(51, 65, 85);

        let startX = 20 + doc.getTextWidth(`• ${cleanText(t.name)}: `);
        if (startX > 80) {
          state.y += 5;
          startX = 22;
        }

        let firstLine = true;
        tLines.forEach((l: string) => {
          if (firstLine) {
            doc.text(l, startX, state.y);
            firstLine = false;
          } else {
            doc.text(l, 22, state.y);
          }
          state.y += 5;
        });
        state.y += 2;
      });
    }
  }

  // 3. Organ Organisation & Division of Labor
  else if (pType === 'division') {
    if (content.organisation && Array.isArray(content.organisation)) {
      checkPageSpace(state, 12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(c[0], c[1], c[2]);
      doc.text('Levels of Organisation:', 15, state.y);
      state.y += 6;

      content.organisation.forEach((org: any) => {
        checkPageSpace(state, 12);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(15, 23, 42);
        doc.text(cleanText(org.type), 18, state.y);
        state.y += 5;

        if (Array.isArray(org.features)) {
          org.features.forEach((feat: string) => {
            const fLines = doc.splitTextToSize(cleanText(feat), 165);
            checkPageSpace(state, fLines.length * 5);
            doc.setFont('helvetica', 'normal');
            doc.setFontSize(9.5);
            doc.setTextColor(51, 65, 85);
            
            fLines.forEach((l: string, idx: number) => {
              doc.text(idx === 0 ? `- ${l}` : `  ${l}`, 22, state.y);
              state.y += 5;
            });
          });
        }
        state.y += 2;
      });
    }

    if (content.division && Array.isArray(content.division)) {
      state.y += 3;
      checkPageSpace(state, 12);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(c[0], c[1], c[2]);
      doc.text('Division of Labour:', 15, state.y);
      state.y += 6;

      content.division.forEach((div: any) => {
        const dLines = doc.splitTextToSize(cleanText(div.description), 165);
        checkPageSpace(state, 8 + dLines.length * 5);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(15, 23, 42);
        doc.text(`• ${cleanText(div.name)}:`, 18, state.y);
        state.y += 5;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(51, 65, 85);
        dLines.forEach((l: string) => {
          doc.text(l, 24, state.y);
          state.y += 5;
        });
        state.y += 1.5;
      });
    }
  }

  // 4. Comparison Tables
  else if (pType === 'table') {
    if (content.headers && Array.isArray(content.headers)) {
      const colCount = content.headers.length;
      const totalWidth = 175;
      const colWidth = totalWidth / colCount;

      checkPageSpace(state, 12);

      // Draw table header row
      doc.setFillColor(c[0], c[1], c[2]);
      doc.rect(15, state.y, totalWidth, 8, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(255, 255, 255);
      
      content.headers.forEach((h: string, idx: number) => {
        doc.text(cleanText(h), 18 + (idx * colWidth), state.y + 5.5);
      });
      state.y += 8;

      // Draw table rows
      if (content.rows && Array.isArray(content.rows)) {
        content.rows.forEach((row: any, rIdx: number) => {
          // Flatten row values based on column count/expected fields
          const cells: string[] = [];
          if (row.feature) cells.push(row.feature);
          
          if (colCount === 2) {
            cells.push(row.desc || row.plant || row.animal || row.prokaryote || row.eukaryote || row.mitosis || row.meiosis || '');
          } else if (colCount === 3) {
            // E.g., Prokaryotes vs Eukaryotes or Plant vs Animal
            if ('plant' in row && 'animal' in row) {
              cells.push(row.plant);
              cells.push(row.animal);
            } else if ('prokaryote' in row && 'eukaryote' in row) {
              cells.push(row.prokaryote);
              cells.push(row.eukaryote);
            } else if ('mitosis' in row && 'meiosis' in row) {
              cells.push(row.mitosis);
              cells.push(row.meiosis);
            } else {
              cells.push(row.desc1 || '');
              cells.push(row.desc2 || '');
            }
          }

          // Calculate height needed (split each cell, find max height)
          let maxLines = 1;
          const splitCells = cells.map((cellText) => {
            const lines = doc.splitTextToSize(cleanText(cellText), colWidth - 5);
            if (lines.length > maxLines) maxLines = lines.length;
            return lines;
          });

          const rowHeight = 4 + (maxLines * 4.5);
          checkPageSpace(state, rowHeight);

          // Zebra striping
          const fillCol = rIdx % 2 === 0 ? 250 : 255;
          doc.setFillColor(fillCol, fillCol, fillCol);
          doc.rect(15, state.y, totalWidth, rowHeight, 'F');

          // Draw vertical border lines
          doc.setDrawColor(226, 232, 240);
          doc.setLineWidth(0.3);
          doc.rect(15, state.y, totalWidth, rowHeight, 'D');
          
          for (let i = 1; i < colCount; i++) {
            doc.line(15 + (i * colWidth), state.y, 15 + (i * colWidth), state.y + rowHeight);
          }

          // Print cell text
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(9);
          doc.setTextColor(51, 65, 85);
          
          splitCells.forEach((lines, cIdx) => {
            let lineY = state.y + 4.5;
            lines.forEach((line) => {
              doc.text(line, 18 + (cIdx * colWidth), lineY);
              lineY += 4.5;
            });
          });

          state.y += rowHeight;
        });
      }
      state.y += 4;
    }
  }

  // 5. Organelles Template
  else if (pType === 'organelles') {
    if (content.organelles && Array.isArray(content.organelles)) {
      content.organelles.forEach((organelle: any) => {
        const oLines = doc.splitTextToSize(cleanText(organelle.desc), 160);
        const heightNeeded = 14 + (oLines.length * 4.5);

        checkPageSpace(state, heightNeeded + 6);

        // Draw light card border box
        doc.setDrawColor(241, 245, 249);
        doc.setFillColor(252, 252, 252);
        doc.setLineWidth(0.5);
        doc.rect(15, state.y, 175, heightNeeded, 'FD');

        // Heading with left vertical bar
        doc.setFillColor(c[0], c[1], c[2]);
        doc.rect(15, state.y, 3, heightNeeded, 'F');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(11);
        doc.setTextColor(15, 23, 42);
        doc.text(cleanText(organelle.name), 22, state.y + 6);

        // Sub/Role
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.setTextColor(c[0], c[1], c[2]);
        doc.text(`Core Role: ${cleanText(organelle.role)}`, 22, state.y + 11);

        // Description
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(71, 85, 105);
        let textY = state.y + 16.5;
        oLines.forEach((l: string) => {
          doc.text(l, 22, textY);
          textY += 4.5;
        });

        state.y += heightNeeded + 4;
      });
    }
  }

  // 6. Examiner Traps Template (Extremely critical for board revision)
  else if (pType === 'traps') {
    if (content.traps && Array.isArray(content.traps)) {
      content.traps.forEach((trapObj: any) => {
        const trapLines = doc.splitTextToSize(`TRAP: ${cleanText(trapObj.trap)}`, 165);
        const correctLines = doc.splitTextToSize(`CORRECTION: ${cleanText(trapObj.correction)}`, 165);
        const totalHeight = 12 + (trapLines.length + correctLines.length) * 5;

        checkPageSpace(state, totalHeight + 8);

        // Box border and red indicator background
        doc.setDrawColor(254, 226, 226); // red-100
        doc.setFillColor(254, 242, 242); // red-50
        doc.rect(15, state.y, 175, totalHeight, 'FD');

        // Draw left red accent bar
        doc.setFillColor(220, 38, 38); // red-600
        doc.rect(15, state.y, 3.5, totalHeight, 'F');

        // Heading
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(185, 28, 28); // red-700
        doc.text(`🔥 EXAM TRAP TOPIC: ${cleanText(trapObj.topic)}`, 22, state.y + 5.5);

        // Trap body
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(153, 27, 27);
        let textY = state.y + 11.5;
        trapLines.forEach((l: string) => {
          doc.text(l, 22, textY);
          textY += 5;
        });

        // Correction body
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(21, 128, 61); // green-700
        correctLines.forEach((l: string) => {
          doc.text(l, 22, textY);
          textY += 5;
        });

        state.y += totalHeight + 5;
      });
    }
  }

  // 7. Interactive Flowcharts
  else if (pType === 'flowcharts') {
    if (content.titleA) {
      checkPageSpace(state, 10);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(c[0], c[1], c[2]);
      doc.text(`Process Flow: ${cleanText(content.titleA)}`, 15, state.y);
      state.y += 6;
    }

    if (content.stepsA && Array.isArray(content.stepsA)) {
      content.stepsA.forEach((stepObj: any, idx: number) => {
        const sLines = doc.splitTextToSize(cleanText(stepObj.desc), 160);
        const boxHeight = 10 + (sLines.length * 4.5);
        checkPageSpace(state, boxHeight + 8);

        // Arrow indicator from previous step
        if (idx > 0) {
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(100, 116, 139);
          doc.text('↓', 18, state.y - 1);
        }

        // Round rect style box
        doc.setFillColor(248, 250, 252);
        doc.setDrawColor(226, 232, 240);
        doc.rect(15, state.y, 175, boxHeight, 'FD');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(15, 23, 42);
        doc.text(`Step ${idx + 1}: ${cleanText(stepObj.step)}`, 20, state.y + 5);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(71, 85, 105);
        let textY = state.y + 9.5;
        sLines.forEach((l: string) => {
          doc.text(l, 20, textY);
          textY += 4.5;
        });

        state.y += boxHeight + 2;
      });
    }

    if (content.divisions && Array.isArray(content.divisions)) {
      content.divisions.forEach((div: any) => {
        const fLines = doc.splitTextToSize(`Flow: ${cleanText(div.flow)}`, 165);
        const uLines = doc.splitTextToSize(`Significance/Usage: ${cleanText(div.usage)}`, 165);
        const boxHeight = 12 + (fLines.length + uLines.length) * 4.5;

        checkPageSpace(state, boxHeight + 6);

        doc.setFillColor(250, 250, 250);
        doc.setDrawColor(226, 232, 240);
        doc.rect(15, state.y, 175, boxHeight, 'FD');

        doc.setFillColor(c[0], c[1], c[2]);
        doc.rect(15, state.y, 3, boxHeight, 'F');

        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(15, 23, 42);
        doc.text(cleanText(div.name), 22, state.y + 5.5);

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(71, 85, 105);
        let textY = state.y + 10.5;
        fLines.forEach((l: string) => {
          doc.text(l, 22, textY);
          textY += 4.5;
        });
        uLines.forEach((l: string) => {
          doc.text(l, 22, textY);
          textY += 4.5;
        });

        state.y += boxHeight + 4;
      });
    }
  }

  // 8. Board Exemplar Problems (Solved boards questions)
  else if (pType === 'problems') {
    if (content.problems && Array.isArray(content.problems)) {
      content.problems.forEach((prob: any, idx: number) => {
        const qLines = doc.splitTextToSize(`Q${idx + 1}: ${cleanText(prob.q)}`, 165);
        const ansLines = doc.splitTextToSize(`Answer Strategy: ${cleanText(prob.ans)}`, 165);
        const boxHeight = 14 + (qLines.length + ansLines.length) * 5;

        checkPageSpace(state, boxHeight + 6);

        // Highlight box
        doc.setFillColor(240, 246, 255); // light blue-50
        doc.setDrawColor(219, 234, 254);
        doc.rect(15, state.y, 175, boxHeight, 'FD');

        doc.setFillColor(37, 99, 235); // solid blue-600 left margin
        doc.rect(15, state.y, 3, boxHeight, 'F');

        // Question
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(15, 23, 42);
        let textY = state.y + 5.5;
        qLines.forEach((l: string) => {
          doc.text(l, 22, textY);
          textY += 5;
        });

        // Answer / Strategy
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(30, 41, 59);
        textY += 1.5;
        ansLines.forEach((l: string) => {
          doc.text(l, 22, textY);
          textY += 5;
        });

        state.y += boxHeight + 4;
      });
    }
  }

  // 9. Interactive Practice Solutions
  else if (pType === 'solutions') {
    if (content.solutions && Array.isArray(content.solutions)) {
      content.solutions.forEach((sol: any) => {
        const ansLines = doc.splitTextToSize(cleanText(sol.ans), 165);
        const boxHeight = 11 + ansLines.length * 5;

        checkPageSpace(state, boxHeight + 6);

        doc.setFillColor(240, 253, 244); // emerald-50
        doc.setDrawColor(220, 252, 231);
        doc.rect(15, state.y, 175, boxHeight, 'FD');

        doc.setFillColor(22, 163, 74); // solid green bar
        doc.rect(15, state.y, 3, boxHeight, 'F');

        // Question label
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10.5);
        doc.setTextColor(21, 128, 61);
        doc.text(cleanText(sol.label), 22, state.y + 5.5);

        // Solution answer
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 23, 42);
        let textY = state.y + 11;
        ansLines.forEach((l: string) => {
          doc.text(l, 22, textY);
          textY += 5;
        });

        state.y += boxHeight + 4;
      });
    }
  }

  // 10. Key Terminology (Keywords)
  else if (pType === 'keywords') {
    if (content.keywords && Array.isArray(content.keywords)) {
      content.keywords.forEach((kw: any) => {
        const defLines = doc.splitTextToSize(cleanText(kw.def), 130);
        const boxHeight = 4 + (defLines.length * 5);

        checkPageSpace(state, boxHeight + 4);

        // Terminology keyword
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(15, 23, 42);
        doc.text(cleanText(kw.term), 18, state.y + 4.5);

        // Definition
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9.5);
        doc.setTextColor(71, 85, 105);
        let textY = state.y + 4.5;
        defLines.forEach((l: string, idx: number) => {
          if (idx === 0) {
            doc.text(`: ${l}`, 60, textY);
          } else {
            doc.text(l, 62, textY);
          }
          textY += 5;
        });

        state.y += boxHeight + 2;
      });
    }
  }
};

// --- SUBJECT 1: CLASS 9 BIOLOGY PDF ---
const generateBiology9PDF = (studentName: string) => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const themeColor: [number, number, number] = [5, 150, 105]; // Emerald-600

  // Cover page
  drawCoverPage(doc, 'Class 9th Biology', 'Complete interactive high-yield visual guides, examiner traps, & syllabus formula sheets.', themeColor, studentName);

  // Compile sheets
  const state: PDFState = {
    doc,
    y: 28,
    pageNum: 1,
    chapterTitle: 'Cell & Tissue Systems',
    pageTitle: 'Key Concepts',
    themeColor,
    studentName
  };

  biology9Pages.forEach((page) => {
    state.doc.addPage();
    state.pageNum++;
    state.chapterTitle = page.chapter;
    state.pageTitle = page.title;
    initPageBorderAndHeader(state);
    renderPageContent(state, page);
  });

  doc.save(`AceTheGrade_Class9_Biology_Study_Kit_${studentName.replace(/\s+/g, '_')}.pdf`);
};

// --- SUBJECT 2: CLASS 9 PHYSICS PDF ---
const generatePhysics9PDF = (studentName: string) => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const themeColor: [number, number, number] = [37, 99, 235]; // Blue-600

  // Cover page
  drawCoverPage(doc, 'Class 9th Physics', 'Dynamic equation flowcharts, interactive solved problems, and revision flashcards.', themeColor, studentName);

  // Compile sheets
  const state: PDFState = {
    doc,
    y: 28,
    pageNum: 1,
    chapterTitle: 'Force & Motion Dynamics',
    pageTitle: 'Foundations',
    themeColor,
    studentName
  };

  physics9Pages.forEach((page) => {
    state.doc.addPage();
    state.pageNum++;
    state.chapterTitle = page.chapter;
    state.pageTitle = page.title;
    initPageBorderAndHeader(state);
    renderPageContent(state, page);
  });

  doc.save(`AceTheGrade_Class9_Physics_Study_Kit_${studentName.replace(/\s+/g, '_')}.pdf`);
};

// --- SUBJECT 3: CLASS 9 CHEMISTRY PDF ---
const generateChemistry9PDF = (studentName: string) => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const themeColor: [number, number, number] = [13, 148, 136]; // Teal-600

  // Cover page
  drawCoverPage(doc, 'Class 9th Chemistry', 'Chemical equation maps, state diagrams, and detailed solved atomic models.', themeColor, studentName);

  // Compile sheets
  const state: PDFState = {
    doc,
    y: 28,
    pageNum: 1,
    chapterTitle: 'Matter & Atomic Foundations',
    pageTitle: 'Core Concepts',
    themeColor,
    studentName
  };

  chemistry9Pages.forEach((page) => {
    state.doc.addPage();
    state.pageNum++;
    state.chapterTitle = page.chapter;
    state.pageTitle = page.title;
    initPageBorderAndHeader(state);
    renderPageContent(state, page);
  });

  doc.save(`AceTheGrade_Class9_Chemistry_Study_Kit_${studentName.replace(/\s+/g, '_')}.pdf`);
};

// --- COMBINED GRAND SCIENCE KIT BUNDLE (for c9-science purchasers) ---
const generateCombinedSciencePDF = (studentName: string) => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const themeColor: [number, number, number] = [79, 70, 229]; // Indigo-600

  // Grand Cover
  drawCoverPage(doc, 'Class 9th Ultimate Science', 'Combined Comprehensive Prep: Physics, Chemistry & Biology Topper Materials Bundle.', themeColor, studentName);

  const state: PDFState = {
    doc,
    y: 28,
    pageNum: 1,
    chapterTitle: 'CBSE Class 9 Science Prep',
    pageTitle: 'Grand Compilation',
    themeColor,
    studentName
  };

  // 1. Biology section
  doc.addPage();
  state.pageNum++;
  state.themeColor = [5, 150, 105];
  state.chapterTitle = 'SECTION A: BIOLOGY COMPANION';
  state.pageTitle = 'Introduction';
  initPageBorderAndHeader(state);
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(5, 150, 105);
  doc.text('SECTION A: BIOLOGY', 15, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105);
  doc.text('Highly detailed cellular structures, tissues system definitions, and exam traps.', 15, 70);

  biology9Pages.forEach((page) => {
    doc.addPage();
    state.pageNum++;
    state.chapterTitle = page.chapter;
    state.pageTitle = page.title;
    initPageBorderAndHeader(state);
    renderPageContent(state, page);
  });

  // 2. Physics section
  doc.addPage();
  state.pageNum++;
  state.themeColor = [37, 99, 235];
  state.chapterTitle = 'SECTION B: PHYSICS COMPANION';
  state.pageTitle = 'Introduction';
  initPageBorderAndHeader(state);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(37, 99, 235);
  doc.text('SECTION B: PHYSICS', 15, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105);
  doc.text('Velocity formulations, forces graphs, gravitational constants, and solved exemplars.', 15, 70);

  physics9Pages.forEach((page) => {
    doc.addPage();
    state.pageNum++;
    state.chapterTitle = page.chapter;
    state.pageTitle = page.title;
    initPageBorderAndHeader(state);
    renderPageContent(state, page);
  });

  // 3. Chemistry section
  doc.addPage();
  state.pageNum++;
  state.themeColor = [13, 148, 136];
  state.chapterTitle = 'SECTION C: CHEMISTRY COMPANION';
  state.pageTitle = 'Introduction';
  initPageBorderAndHeader(state);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(13, 148, 136);
  doc.text('SECTION C: CHEMISTRY', 15, 60);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105);
  doc.text('Atoms state diagrams, molecular structure grids, chemical equations, and exam traps.', 15, 70);

  chemistry9Pages.forEach((page) => {
    doc.addPage();
    state.pageNum++;
    state.chapterTitle = page.chapter;
    state.pageTitle = page.title;
    initPageBorderAndHeader(state);
    renderPageContent(state, page);
  });

  doc.save('Science_Complete_Cheat_Sheet_9th.pdf');
};

// --- DYNAMIC STUDY KIT GENERATOR (For English, Hindi, Social Sci, or Classes 10, 11, 12) ---
const generateGenericKitPDF = (kitId: string, kitName: string, studentName: string) => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const themeColor: [number, number, number] = [79, 70, 229]; // Indigo-600

  // Cover page
  drawCoverPage(doc, kitName, `Premium full revision pack with fast-recall visual flowcharts, exam strategy blueprints, and board patterns.`, themeColor, studentName);

  // Compile sheets
  const state: PDFState = {
    doc,
    y: 28,
    pageNum: 1,
    chapterTitle: kitName.substring(0, 35),
    pageTitle: 'Topper Syllabus Guide',
    themeColor,
    studentName
  };

  // Generate page 1: Syllabus Booster Roadmap
  doc.addPage();
  state.pageNum++;
  initPageBorderAndHeader(state);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(15, 23, 42);
  doc.text('Chapter Revision Strategy & Syllabus Roadmap', 15, state.y);
  state.y += 8;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10.5);
  doc.setTextColor(71, 85, 105);
  const textIntro = doc.splitTextToSize(`This highly focused revision roadmap for "${kitName}" is designed specifically to optimize your scores under strict board and term timeframes. Follow this sequential practice breakdown to solidify your textbook concepts.`, 175);
  textIntro.forEach((l) => {
    doc.text(l, 15, state.y);
    state.y += 5.5;
  });
  state.y += 5;

  const standardChapters = [
    { name: 'Unit 1: Foundational Frameworks', desc: 'Overview of key definitions, core concepts, and quick-score terminology definitions. Weightage: 25% of final exam.' },
    { name: 'Unit 2: Comprehensive Mechanisms & Context', desc: 'Deconstruction of critical diagrams, process reactions, or sequence mapping structures. Weightage: 35% of final exam.' },
    { name: 'Unit 3: Application & Strategic Writing Layouts', desc: 'Direct board writing guides, previous years question breakdowns, and examiner model answer formats. Weightage: 40% of final exam.' }
  ];

  standardChapters.forEach((ch, idx) => {
    checkPageSpace(state, 30);
    doc.setFillColor(248, 250, 252);
    doc.rect(15, state.y, 175, 18, 'F');
    doc.setFillColor(themeColor[0], themeColor[1], themeColor[2]);
    doc.rect(15, state.y, 2.5, 18, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42);
    doc.text(ch.name, 20, state.y + 5.5);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    const descL = doc.splitTextToSize(ch.desc, 165);
    descL.forEach((l, idxL) => {
      doc.text(l, 20, state.y + 11 + idxL * 4.5);
    });

    state.y += 24;
  });

  // Generate page 2: Exam Traps & Answer Schematics
  doc.addPage();
  state.pageNum++;
  state.pageTitle = 'Examiner Cheats';
  initPageBorderAndHeader(state);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(15, 23, 42);
  doc.text('Crucial Examiner Cheats & High-Score Rules', 15, state.y);
  state.y += 8;

  const genericTraps = [
    { topic: 'General Definitions', trap: 'Writing vague personal explanations instead of using board-vetted textbook keywords.', correction: 'Memorize the core terminology sheet. Highlighting keyword indicators secures full marking points instantly.' },
    { topic: 'Data, Formula & Schema Mapping', trap: 'Failing to mention standard SI units or omitting direct references to active textbook mechanisms.', correction: 'Always establish a brief variable listing table before drafting final calculations. Highlight constants clearly.' },
    { topic: 'Topper Presentation Strategy', trap: 'Structuring large continuous text blocks without clear point separations.', correction: 'Structure high-scoring answers into logical 3-Point and 5-Point bullet listings. Underline primary thematic headings.' }
  ];

  genericTraps.forEach((trapObj) => {
    const trapLines = doc.splitTextToSize(`TRAP: ${trapObj.trap}`, 165);
    const correctLines = doc.splitTextToSize(`CORRECTION: ${trapObj.correction}`, 165);
    const totalHeight = 12 + (trapLines.length + correctLines.length) * 5;

    checkPageSpace(state, totalHeight + 8);

    doc.setDrawColor(254, 226, 226);
    doc.setFillColor(254, 242, 242);
    doc.rect(15, state.y, 175, totalHeight, 'FD');

    doc.setFillColor(220, 38, 38);
    doc.rect(15, state.y, 3.5, totalHeight, 'F');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(185, 28, 28);
    doc.text(`🔥 BOARD TRAP: ${trapObj.topic}`, 22, state.y + 5.5);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(153, 27, 27);
    let textY = state.y + 11.5;
    trapLines.forEach((l: string) => {
      doc.text(l, 22, textY);
      textY += 5;
    });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    doc.setTextColor(21, 128, 61);
    correctLines.forEach((l: string) => {
      doc.text(l, 22, textY);
      textY += 5;
    });

    state.y += totalHeight + 5;
  });

  doc.save(`AceTheGrade_${kitName.replace(/\s+/g, '_')}_Study_Kit_${studentName.replace(/\s+/g, '_')}.pdf`);
};

const generateSanskritPDF = (classNum: string, studentName: string) => {
  return generateGenericKitPDF(`subject-${classNum}-sanskrit`, `Class ${classNum}th Sanskrit`, studentName);
};

// --- ENGLISH COMPLETE CHEAT SHEET GENERATOR ---
const generateEnglishPDF = (classNum: string, studentName: string) => {
  return generateGenericKitPDF(`subject-${classNum}-english`, `Class ${classNum}th English`, studentName);
};


