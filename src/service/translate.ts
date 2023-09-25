import ExcelJS from "exceljs";

const JSONparser = async (file?: any) => {
  return new Promise<{
    message: string;
    data: any | {};
  }>(async (resolve, reject) => {
    try {
      if (!file) {
        resolve({
          message: "form error!",
          data: null,
        });
      } else {
        if (!file.name.includes(".xlsx")) {
          resolve({
            message: "just accept file .xlsx!",
            data: null,
          });
        } else {
          const excelData = file.data;
          const workbook = new ExcelJS.Workbook();
          await workbook.xlsx.load(excelData);
          const worksheet = workbook.getWorksheet(1);
          const englishData: any[] = [];
          const korea: any[] = [];
          const vietnamese: any[] = [];
          const japan: any[] = [];
          const china: any[] = [];
          const spain: any[] = [];
          const portual: any[] = [];

          worksheet.eachRow({ includeEmpty: true }, (row, rowIndex) => {
            const columnAValue = row.getCell(1).value;
            const columnBValue = row.getCell(2).value;
            const columnCValue = row.getCell(3).value;
            const columnDValue = row.getCell(4).value;
            const columnEValue = row.getCell(5).value;
            const columnFValue = row.getCell(6).value;
            const columnGValue = row.getCell(7).value;
            englishData.push(columnAValue);
            korea.push(columnBValue);
            vietnamese.push(columnCValue);
            japan.push(columnDValue);
            china.push(columnEValue);
            spain.push(columnFValue);
            portual.push(columnGValue);
          });
          resolve({
            message: "oke",
            data: {
              englishData: englishData.reduce(
                (obj, item: any, index) =>
                  Object.assign(obj, { [item]: englishData[index] }),
                {}
              ),
              korea: englishData.reduce(
                (obj, item: any, index) =>
                  Object.assign(obj, { [item]: korea[index] }),
                {}
              ),
              vietnamese: englishData.reduce(
                (obj, item: any, index) =>
                  Object.assign(obj, { [item]: vietnamese[index] }),
                {}
              ),
              japan: englishData.reduce(
                (obj, item: any, index) =>
                  Object.assign(obj, { [item]: japan[index] }),
                {}
              ),
              china: englishData.reduce(
                (obj, item: any, index) =>
                  Object.assign(obj, { [item]: china[index] }),
                {}
              ),
              spain: englishData.reduce(
                (obj, item: any, index) =>
                  Object.assign(obj, { [item]: spain[index] }),
                {}
              ),
              portual: englishData.reduce(
                (obj, item: any, index) =>
                  Object.assign(obj, { [item]: portual[index] }),
                {}
              ),
            },
          });
        }
      }
    } catch (error) {
      resolve({
        message: "error!",
        data: null,
      });
    }
  });
};

const JSONParserServices = {
  JSONparser,
};

export default JSONParserServices;
