"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileStorage = void 0;
const multer_1 = require("multer");
const generateId = () => {
    return Array(18)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
};
const normalizeFileName = (req, file, callback) => {
    const fileExtName = file.originalname.split('.').pop();
    const fileName = `${generateId()}.${fileExtName}`;
    callback(null, fileName);
};
exports.fileStorage = (0, multer_1.diskStorage)({
    destination: './uploads',
    filename: normalizeFileName,
});
//# sourceMappingURL=storage.js.map