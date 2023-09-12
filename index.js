const userName = document.getElementById("name");
const userMname = document.getElementById("Mname");
const userreligion = document.getElementById("religion");
const usernationality = document.getElementById("nationality");
const userplaceOfBirth = document.getElementById("placeOfBirth");
const userdobInFig = document.getElementById("dobInFig");
const userdobInWords = document.getElementById("dobInWords");
const userlCollege = document.getElementById("lCollege");
const userdateOfAd = document.getElementById("dateOfAd");
const userconduct = document.getElementById("conduct");
const userdateOfLeav = document.getElementById("dateOfLeav");
const useryearInStud = document.getElementById("yearInStud");
const userreason = document.getElementById("reason");
const userremarks = document.getElementById("remarks");

const submitBtn = document.getElementById("submitBtn");

const { PDFDocument, rgb, degrees } = PDFLib;


const generatePDF = async (name, Mname, religion, 
    nationality, placeOfBirth, dobInFig, dobInWords,
    lCollege, dateOfAd, conduct, dateOfLeav, 
    yearInStud, reason, remarks) => {
    const {PDFDocument, rgb} = PDFLib;
    const existingPdfBytes = await fetch("./LC.pdf").then((res) =>
      res.arrayBuffer()
    );

    const pdfDoc = await PDFDocument.load(existingPdfBytes)

    const pages =pdfDoc.getPages();
    const firstPg = pages[0];

    firstPg.drawText(name, {
        x:290,
        y:588,
        size: 12
    });

    firstPg.drawText(Mname, {
        x: 290,
        y: 558,
        size: 12,
    });

    firstPg.drawText(religion, {
        x: 290,
        y: 529,
        size: 12,
    });

    firstPg.drawText(nationality, {
        x: 290,
        y: 499,
        size: 12,
    });

    firstPg.drawText(placeOfBirth, {
        x: 290,
        y: 469,
        size: 12,
    });

    firstPg.drawText(dobInFig, {
        x: 290,
        y: 440,
        size: 12,
    });

    firstPg.drawText(dobInWords, {
        x: 290,
        y: 411,
        size: 12,
    });

    firstPg.drawText(lCollege, {
        x: 290,
        y: 381,
        size: 12,
    });

    firstPg.drawText(dateOfAd, {
        x: 290,
        y: 352,
        size: 12,
    });

    firstPg.drawText(conduct, {
        x: 290,
        y: 323,
        size: 12,
    });

    firstPg.drawText(dateOfLeav, {
        x: 290,
        y: 293,
        size: 12,
    });

    firstPg.drawText(yearInStud, {
        x: 290,
        y: 264,
        size: 12,
    });

    firstPg.drawText(reason, {
        x: 290,
        y: 235,
        size: 12,
    });

    firstPg.drawText(remarks, {
        x: 290,
        y: 205,
        size: 12,
    });

    
     // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    console.log("Done creating");
    //const uri = await pdfDoc.saveAsBase64({dataUri: true});

    var file = new File(
        [pdfBytes],
        "Padhega India Subscription Certificate.pdf",
        {
          type: "application/pdf;charset=utf-8",
        }
      );
     saveAs(file);
    };
    // document.querySelector("#mypdf").src = uri;


// generatePDF("Khandu", "Bharat", "Hindu", "Indian",
//  "Solapur", "30/02/2003", "fifteen January two thousand and three",
//  "Fattechand", "12/12/2022", "Good", "1/07/2025", 
//  "BE since 2024", "PassOut", "Good")