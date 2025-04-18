import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { Document as DocxDocument, Packer, Paragraph } from 'docx';

interface ExportButtonsProps {
  content: string;
  filename: string;
}

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    padding: 30,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  }
});

const PDFDocument = ({ content }: { content: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View>
        <Text style={styles.text}>{content}</Text>
      </View>
    </Page>
  </Document>
);

const ExportButtons = ({ content, filename }: ExportButtonsProps) => {
  console.log('ExportButtons rendering with content:', content);

  const exportToMarkdown = () => {
    console.log('Exporting to Markdown...');
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, `${filename}.md`);
  };

  const exportToDocx = async () => {
    console.log('Exporting to DOCX...');
    const doc = new DocxDocument({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: content
          })
        ]
      }]
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${filename}.docx`);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-4 p-4 border-t border-gray-200">
      <PDFDownloadLink
        document={<PDFDocument content={content} />}
        fileName={`${filename}.pdf`}
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
      >
        {({ loading }) => (loading ? 'Generando PDF...' : 'Exportar como PDF')}
      </PDFDownloadLink>

      <button
        onClick={exportToMarkdown}
        className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors cursor-pointer"
      >
        Exportar como Markdown
      </button>

      <button
        onClick={exportToDocx}
        className="inline-block px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors cursor-pointer"
      >
        Exportar como DOCX
      </button>
    </div>
  );
};

export default ExportButtons; 