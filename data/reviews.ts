export type PhotoReview = { id: number; image: string; name: string; location: string; type: "photo" | "chat" | "product"; available?: boolean };
export type VideoReview = { id: number; video: string; poster: string; title: string; customer: string; location: string; available?: boolean; posterAvailable?: boolean };

export const photoReviews: PhotoReview[] = [
  { id: 1, image: "/reviews/images/review-01.jpg", name: "顾客反馈 01", location: "", type: "chat" },
  { id: 2, image: "/reviews/images/review-02.jpg", name: "顾客反馈 02", location: "", type: "chat" },
  { id: 3, image: "/reviews/images/review-03.jpg", name: "顾客反馈 03", location: "", type: "chat" },
  { id: 4, image: "/reviews/images/review-04.jpg", name: "顾客反馈 04", location: "", type: "chat" },
];
export const videoReviews: VideoReview[] = Array.from({ length: 2 }, (_, i) => ({
  id: i + 1,
  video: `/reviews/videos/review-video-0${i + 1}.mp4`,
  poster: `/reviews/posters/video-0${i + 1}.jpg`,
  title: `顾客使用分享 0${i + 1}`,
  customer: "顾客分享",
  location: "",
}));
