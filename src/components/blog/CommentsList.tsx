import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { ptBR, enUS, nl } from "date-fns/locale";
import { useLanguage } from "@/hooks/useLanguage";

interface Comment {
  id: string;
  author_name: string;
  content: string;
  created_at: string;
}

interface CommentsListProps {
  postId: string;
  refreshKey?: number;
}

export const CommentsList = ({ postId, refreshKey }: CommentsListProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();

  const dateLocale = language === "pt" ? ptBR : language === "nl" ? nl : enUS;

  const texts = language === "nl" ? {
    title: "Reacties",
    noComments: "Nog geen reacties. Wees de eerste!",
  } : language === "pt" ? {
    title: "Comentários",
    noComments: "Nenhum comentário ainda. Seja o primeiro!",
  } : {
    title: "Comments",
    noComments: "No comments yet. Be the first!",
  };

  useEffect(() => {
    const fetchComments = async () => {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from("blog_comments")
        .select("id, author_name, content, created_at")
        .eq("post_id", postId)
        .eq("approved", true)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("Error fetching comments:", error);
      } else {
        setComments(data || []);
      }
      
      setIsLoading(false);
    };

    fetchComments();
  }, [postId, refreshKey]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h3 className="font-heading font-bold text-lg">{texts.title}</h3>
        {[1, 2].map((i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex gap-3">
                <Skeleton className="w-10 h-10 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-full" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="font-heading font-bold text-lg">
        {texts.title} ({comments.length})
      </h3>
      
      {comments.length === 0 ? (
        <p className="text-muted-foreground text-sm">{texts.noComments}</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {comment.author_name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{comment.author_name}</span>
                      <span className="text-xs text-muted-foreground">
                        {format(new Date(comment.created_at), "d MMM yyyy, HH:mm", { locale: dateLocale })}
                      </span>
                    </div>
                    <p className="text-sm text-foreground/90">{comment.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
