function downloadPDF() {
    const element = document.getElementById('cv-preview');
    const opt = {
        margin: 0,
        filename: 'CV_Vo_Ba_Hoang_Anh.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    if (typeof html2pdf !== 'undefined') {
        html2pdf().set(opt).from(element).save();
    } else {
        console.error('html2pdf library is not loaded');
        alert('Loading PDF library, please try again in a moment.');
    }
}
