# Better Man 品牌官网

Next.js 16、TypeScript、Tailwind CSS 4 构建的简体中文品牌官网。没有公开价格、购物车、会员或数据库。构建后可作为静态站点部署到 Vercel。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。上线前运行 `npm run build`。

## 上线前必须配置

1. `config/site.ts` 的 `whatsappNumber` 统一使用新加坡国际格式 `6580575266`，只填数字，不带 `+`、空格或前导 0。所有咨询按钮统一使用该号码。
2. 将真实产品图放到 `public/images/better-man-product.png`。
3. 将已获授权的顾客图片放到 `public/reviews/images/review-01.jpg` 至 `review-06.jpg`，视频放到 `public/reviews/videos/review-video-01.mp4` 至 `review-video-04.mp4`，封面放到 `public/reviews/posters/video-01.jpg` 至 `video-04.jpg`。缺失文件会显示占位画面。每次增加素材后重新构建／部署。
   四张独立成分图片位于 `public/images/ingredients/`：`tongkat-ali.webp`、`black-maca.webp`、`zinc.webp`、`monk-fruit.webp`。
4. 在 `data/reviews.ts` 将占位的顾客名称、标题及地点替换为获得授权且准确的信息；根据实际图片类型设置 `photo`、`chat` 或 `product`。
5. 核对产品规格、成分、食用建议及目标市场适用的广告与保健品规定。补齐隐私政策、条款中的运营主体资料。

项目使用静态导出，构建产物在 `out/`。Vercel 可直接导入此仓库部署。

