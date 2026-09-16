import fs from "node:fs";
import path from "node:path";
import { photoReviews, videoReviews } from "@/data/reviews";
import { Site } from "@/components/Site";

function hasAsset(url: string) { return fs.existsSync(path.join(process.cwd(), "public", url)); }
export default function Page() {
  return <Site productAvailable={hasAsset("/images/better-man-product.png")}
    photos={photoReviews.map((item) => ({ ...item, available: hasAsset(item.image) }))}
    videos={videoReviews.map((item) => ({ ...item, available: hasAsset(item.video), posterAvailable: hasAsset(item.poster) }))} />;
}
