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
3. 四张独立成分图片位于 `public/images/ingredients/`：`tongkat-ali.webp`、`black-maca.webp`、`zinc.webp`、`monk-fruit.webp`。
4. 核对产品规格、成分、食用建议及目标市场适用的广告与保健品规定。任何顾客素材与广告文案都应经过授权、真实性及目标市场合规审查后再发布。
5. 补齐隐私政策、条款中的运营主体名称、联系资料及适用地区。

项目使用静态导出，构建产物在 `out/`。Vercel 可直接导入此仓库部署。

