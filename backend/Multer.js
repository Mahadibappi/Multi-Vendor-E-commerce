const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = file.originalname.split(".")[0];
    cb(null, filename + "-" + uniqueSuffix + ".png");
  },
});

const fileFilter = function (req, file, cb) {
  const allowedFileTypes = ["jpg", "jpeg", "png", "gif"];
  const fileExtension = path
    .extname(file.originalname)
    .toLowerCase()
    .replace(".", "");

  if (allowedFileTypes.includes(fileExtension)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only JPG, JPEG, PNG, and GIF files are allowed."
      )
    );
  }
};

exports.upload = multer({ storage: storage, fileFilter: fileFilter });
