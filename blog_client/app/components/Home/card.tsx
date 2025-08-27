"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

interface BlogCardProps {
  _id: string;
  title: string;
  slug: string;
  content: string;
  expert?: string;
  status: string;
  tags?: string[];
  author: string;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
}
function statusColor(status: string) {
  switch (status) {
    case "published":
      return "bg-green-100 text-green-700";
    case "draft":
      return "bg-yellow-100 text-yellow-700";
    case "archived":
      return "bg-gray-200 text-gray-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

export function ShineBorderCard({ data }: { data: BlogCardProps }) {
  const router = useRouter();
  return (
    <Card className="relative overflow-hidden max-w-[350px] w-full">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardHeader className="flex items-start gap-4 p-2 md:p-6">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold leading-tight text-slate-900 truncate">
            {data.title}
          </h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
            <span className="truncate">
              by <strong>{data.author}</strong>
            </span>
            <span aria-hidden className="mx-1">
              •
            </span>
            <time className="whitespace-nowrap">
              {new Date(data.createdAt).toLocaleDateString()}
            </time>
          </div>
        </div>
        <div className="ml-4 flex items-start gap-2">
          <span
            className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded ${statusColor(
              data.status
            )}`}
          >
            {data.status}
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-2 md:p-4">
        <p className="text-sm text-slate-700 line-clamp-3">
          {data.content.slice(0, 220) +
            (data.content.length > 220 ? "..." : "")}
        </p>

        {data.tags && data.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {data.tags.map((t) => (
              <Badge key={t} className="px-2 py-1 text-xs">
                #{t}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className=" flex items-center justify-between">
        <div className="flex items-center gap-3 w-full mx-auto">
          <Button
            size="lg"
            className=" w-full"
            onClick={() => router.push(`/blog/${data._id}`)}
          >
            Read
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
