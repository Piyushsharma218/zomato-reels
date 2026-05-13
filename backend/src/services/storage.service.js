const { ImageKit } = require("@imagekit/nodejs");

const imagekit = new ImageKit({
//   publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(buffer, fileName) {
  // console.log(process.env.IMAGEKIT_PRIVATE_KEY)
  try {
    const result = await imagekit.files.upload({
      file: buffer.toString("base64"),
      fileName,
      // folder:""
    });
    return result;
  } catch (error) {
    console.log("Upload Error:", error);
    
  }
}

module.exports = { uploadFile };
