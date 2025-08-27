
export enum BlogStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
  ARCHIVED = "archived",
}

export type TBlog = {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  status: BlogStatus;
  tags?: string[];
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
};
