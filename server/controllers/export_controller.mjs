import exportFromJSON from "export-from-json";
export const exportData = (request, response) => {
  const data = "[{ sample: 'sample'}, { sample1: 'sample1' }]";
  const fileName = "download";
  const exportType = "csv";
  try {
    const result = exportFromJSON({
      data,
      fileName,
      exportType,
      processor(content, type, fileName) {
        switch (type) {
          case "txt":
            response.setHeader("Content-Type", "text/plain");
            break;
          case "xls":
            response.setHeader("Content-Type", "application/vnd.ms-excel");
            break;
          case "csv":
            response.setHeader("Content-Type", "text/csv");
            break;
          case "json":
            response.setHeader("Content-Type", "text/plain");
            break;
        }
        response.setHeader(
          "Content-disposition",
          "attachment;filename=" + fileName
        );
        return content;
      },
    });
    response.send(result);
  } catch (error) {
    console.log("Error while exporting in the backend", error);
    response.status(500).json(error);
  }
};
