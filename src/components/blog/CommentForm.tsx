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
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-heading">
          <MessageCircle className="w-5 h-5 text-primary" />
          {texts.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">{texts.name}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={texts.namePlaceholder}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{texts.email}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={texts.emailPlaceholder}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">{texts.comment}</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={texts.commentPlaceholder}
              rows={4}
              required
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
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
