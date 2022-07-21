import Report from "../model/report_schema.js";


export const CreateReport = async (request, response) => {
  console.log(request.body);
  try {
    const report = await new Report(request.body);
    report.save();
    response.status(200).json({ msg: "Hi Successfully generated the report" });
  } catch (error) {
    response.status(500).json({ msg: error.msg });
  }
};
export const GetAllReports = async (request, response) => {
  try {
    let reports = await Report.find({});
    console.log(reports);
    response.status(200).json(reports);
  } catch (error) {
    response.status(500).json(error);
  }
};
export const Getreport = async (request, response) => {
  try {
    let report = await Report.findById(request.params.id);
    response.status(200).json(report);
  } catch (error) {
    response.status(500).json(error);
  }
};

export const UpdateComplaint = async (request, response) => {
  try {
    // const complaint = await Report.findById(request.params.id);
    await Report.findByIdAndUpdate(request.params.id, {
      $set: request.body,
    });
    response.status(200).json("Report updated successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};

export const DeleteComplaint = async (request, response) => {
  try {
    let Report = await Report.findById(request.params.id);
    await Report.delete();
    response.status(200).json("Report deleted successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};
