const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const [imageFolder] = process.argv.slice(2);

if (!imageFolder || !fs.existsSync(path.resolve(imageFolder))) {
  console.log("Not valid image folder path");
  process.exit();
}
// This is the directory to run through and generate placeholders
// const TARGET_DIR = path.join(__dirname, "../static/images/jesus-shoes");
const TARGET_DIR = path.resolve(imageFolder);

const SUPPORTED_EXTENSIONS = [".png", ".jpg", ".jpeg"];

function run() {
  return new Promise(resolve => {
    const files = fs.readdirSync(TARGET_DIR);

    const generate = async (idx = 0) => {
      if (idx >= files.length) {
        resolve();
        return;
      }

      const file = path.join(TARGET_DIR, files[idx]);
      const ext = path.extname(file);

      if (
        SUPPORTED_EXTENSIONS.includes(ext) &&
        !file.includes(".placeholder")
      ) {
        const targetFile = `${file.substring(
          0,
          file.length - ext.length
        )}.placeholder${ext}`;
        const targetFileWebp = `${file.substring(
          0,
          file.length - ext.length
        )}.webp`;

        const images = [];
        if (!fs.existsSync(targetFile)) {
          if (ext === ".jpg" || ext === ".jpeg") {
            images.push(
              sharp(file)
                .jpeg({
                  quality: 50
                })
                .resize(100)
                .toFile(targetFile)
            );
          } else {
            images.push(
              sharp(file)
                .png({
                  quality: 50
                })
                .resize(100)
                .toFile(targetFile)
            );
          }
        }

        if (!fs.existsSync(targetFileWebp)) {
          images.push(sharp(file).toFile(targetFileWebp));
        }

        await Promise.all(images);
      }

      generate(idx + 1);
    };

    generate();
  });
}

run().then(() => {
  console.log("All done generating 👍");
});
