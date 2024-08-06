import { diskStorage } from 'multer';

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

export const fileStorage = diskStorage({
  destination: './uploads',
  filename: normalizeFileName,
});
