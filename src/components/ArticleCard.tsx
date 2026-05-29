import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Calendar, Edit } from "lucide-react";
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
}

export function ArticleCard({ title, excerpt, category, image, date, slug, postId }: ArticleCardProps) {
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
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <Badge className="bg-primary hover:bg-primary/90">
                  {category}
                </Badge>
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