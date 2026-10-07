import type { Metadata } from "next";
import Script from "next/script";
import { siteUrl } from "@/config/seo";
import "./globals.css";
import "./brand.css";

const title = "Better Man | 成年男性日常营养补充";
const description = "Better Man 男士日常营养补充，含红东革阿里、黑玛卡、锌与罗汉果。配方、产品资料与食用方式清楚透明。";
const socialImage = siteUrl ? `${siteUrl}/images/hero/better-man-product.png` : undefined;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: title, template: "%s | Better Man" },
  description,
  applicationName: "Better Man",
  alternates: siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Better Man",
    locale: "zh_SG",
    url: siteUrl,
    images: socialImage ? [{ url: socialImage, width: 1254, height: 1254, alt: "Better Man 男士日常营养补充产品盒与独立包装" }] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: socialImage ? [socialImage] : undefined,
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-SG">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18459690544"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18459690544');
          `}
        </Script>
      </body>
    </html>
  );
}
