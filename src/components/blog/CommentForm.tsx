import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";

interface CommentFormProps {
  postId: string;
  onCommentAdded?: () => void;
}

export const CommentForm = ({ postId, onCommentAdded }: CommentFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();

  const texts = language === "nl" ? {
    title: "Laat een reactie achter",
    name: "Naam",
    email: "E-mail (optioneel)",
    comment: "Reactie",
    submit: "Versturen",
    success: "Reactie verzonden! Wordt gemodereerd voor publicatie.",
    error: "Fout bij verzenden. Probeer opnieuw.",
    namePlaceholder: "Je naam",
    emailPlaceholder: "je@email.com",
    commentPlaceholder: "Wat vind je van dit bericht?",
  } : language === "pt" ? {
    title: "Deixe um comentário",
    name: "Nome",
    email: "E-mail (opcional)",
    comment: "Comentário",
    submit: "Enviar",
    success: "Comentário enviado! Será moderado antes da publicação.",
    error: "Erro ao enviar. Tente novamente.",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "seu@email.com",
    commentPlaceholder: "O que achou deste post?",
  } : {
    title: "Leave a comment",
    name: "Name",
    email: "Email (optional)",
    comment: "Comment",
    submit: "Submit",
    success: "Comment submitted! Will be moderated before publishing.",
    error: "Error submitting. Please try again.",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    commentPlaceholder: "What do you think about this post?",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from("blog_comments")
      .insert({
        post_id: postId,
        author_name: name,
        author_email: email || null,
        content,
      });

    if (error) {
      console.error("Error submitting comment:", error);
      toast.error(texts.error);
    } else {
      toast.success(texts.success);
      setName("");
      setEmail("");
      setContent("");
      onCommentAdded?.();
    }

    setIsSubmitting(false);
  };

  return (
    <Card>
      <CardHeader className="pb-4 sm:pb-6">
        <CardTitle className="flex items-center gap-2 text-base sm:text-lg font-heading">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
          {texts.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="name" className="text-sm">{texts.name}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={texts.namePlaceholder}
                required
                className="min-h-[44px] text-base"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <Label htmlFor="email" className="text-sm">{texts.email}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={texts.emailPlaceholder}
                className="min-h-[44px] text-base"
              />
            </div>
          </div>

          <div className="space-y-1.5 sm:space-y-2">
            <Label htmlFor="content" className="text-sm">{texts.comment}</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={texts.commentPlaceholder}
              rows={4}
              required
              className="text-base min-h-[120px]"
            />
          </div>

          <Button type="submit" disabled={isSubmitting} className="min-h-[44px] w-full sm:w-auto">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {texts.submit}...
              </>
            ) : (
              texts.submit
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
