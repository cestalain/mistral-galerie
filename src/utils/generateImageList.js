import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const categories = {
  aquarelle: ["divers", "paysages", "marine", "asiatique"],
  petanque: ["clubs", "reglement", "resultats"],
  auvergne: ["photos"],
};

function listImages(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      console.log(`⚠️ Dossier non trouvé: ${dirPath}`);
      return [];
    }

    const files = fs
      .readdirSync(dirPath)
      .filter((file) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file))
      .sort();

    console.log(`📁 ${dirPath}: ${files.length} images trouvées`);
    return files;
  } catch (error) {
    console.error(`❌ Erreur lecture ${dirPath}:`, error.message);
    return [];
  }
}

function generateImageList() {
  const basePath = path.join(__dirname, "public", "images");
  const output = {};

  console.log("🔍 Recherche des images...");
  console.log("📁 Base path:", basePath);

  for (const [category, subcategories] of Object.entries(categories)) {
    output[category] = {};

    for (const subcategory of subcategories) {
      const imagesPath = path.join(
        basePath,
        category,
        subcategory,
        "miniatures"
      );
      const images = listImages(imagesPath);
      output[category][subcategory] = images;
    }
  }

  // Créer le fichier JSON dans src/data
  const dataDir = path.join(__dirname, "src", "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const outputPath = path.join(dataDir, "images.json");
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), "utf8");

  console.log("\n✅ Fichier images.json généré avec succès !");
  console.log("📁 Emplacement:", outputPath);

  console.log("\n📊 Résumé des images trouvées:");
  for (const [category, subcats] of Object.entries(output)) {
    console.log(`\n${category.toUpperCase()}:`);
    for (const [subcat, images] of Object.entries(subcats)) {
      console.log(`  - ${subcat}: ${images.length} images`);
    }
  }
}

generateImageList();
