import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Edit, User, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { authService } from "@/services/authService";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  slug: string;
  postId?: string;
  authorName?: string;
  videoUrl?: string;
}

export function ArticleCard({ title, excerpt, category, image, date, slug, postId, authorName, videoUrl }: ArticleCardProps) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAdminStatus();
  }, []);

  async function checkAdminStatus() {
    const adminStatus = await authService.isAdmin();
    setIsAdmin(adminStatus);
  }

  return (
    <div className="relative">
      <Link href={slug} className="block group">
        <article className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="md:flex gap-6">
            {/* Image */}
            <div className="md:w-80 h-64 md:h-auto relative overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <Badge className="bg-primary hover:bg-primary/90">
                  {category}
                </Badge>
                {videoUrl && (
                  <Badge variant="outline" className="gap-1 border-primary text-primary">
                    <Play className="h-3 w-3" />
                    Video
                  </Badge>
                )}
                {authorName && (
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {authorName}
                  </span>
                )}
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {date}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground font-heading mb-3 group-hover:text-primary transition-colors">
                {title}
              </h3>

              <p className="text-muted-foreground leading-relaxed flex-1">
                {excerpt}
              </p>

              <div className="mt-4 text-primary font-semibold flex items-center gap-2">
                Read More →
              </div>
            </div>
          </div>
        </article>
      </Link>

      {/* Admin Edit Button */}
      {isAdmin && postId && (
        <Link 
          href={{
            pathname: "/admin/posts/new",
            query: { edit: postId }
          }}
          className="absolute top-4 right-4 z-10"
        >
          <Button size="sm" variant="secondary" className="gap-2">
            <Edit className="h-4 w-4" />
            Edit
          </Button>
        </Link>
      )}
    </div>
  );
}