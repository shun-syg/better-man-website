export const siteConfig = {
  brandName: "Better Man",
  whatsappNumber: "6590596258",
  whatsappMessage: "你好，我想了解 Better Man 宝马糖的产品和目前配套。",
};

export function whatsappHref() {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}
