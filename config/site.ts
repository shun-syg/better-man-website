export const siteConfig = {
  brandName: "Better Man",
  whatsappNumber: "6580575266",
  whatsappMessage: "你好，我在 Better Man 官网看到产品，想了解一下效果和配套。",
};

export function whatsappHref() {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}
