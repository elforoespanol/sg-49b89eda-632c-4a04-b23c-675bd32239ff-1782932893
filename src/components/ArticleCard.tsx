import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  readTime: string;
  slug: string;
}

export function ArticleCard({ title, excerpt, category, imageUrl, readTime, slug }: ArticleCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3">
            <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
              {category}
            </Badge>
            <span className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              {readTime}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-foreground font-heading group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-foreground/70 line-clamp-3 leading-relaxed">
            {excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}