import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, Save, Eye, Trash2, LogOut, Image, FileText, 
  MessageSquare, Settings, Loader2, ArrowLeft, Edit,
  Check, X, PenLine, ImageIcon, Video
} from "lucide-react";
import { toast } from "sonner";
import { WysiwygEditor } from "@/components/blog/WysiwygEditor";

interface Category {
  id: string;
  name: string;
  emoji: string | null;
}

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  category_id: string | null;
  status: string;
  featured: boolean | null;
  read_time_minutes: number | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  published_at: string | null;
  blog_categories: Category | null;
  // Translation fields
  title_en: string | null;
  title_nl: string | null;
  content_en: string | null;
  content_nl: string | null;
  excerpt_en: string | null;
  excerpt_nl: string | null;
}

interface Comment {
  id: string;
  author_name: string;
  author_email: string | null;
  content: string;
  approved: boolean;
  created_at: string;
  blog_posts: { title: string } | null;
}

const AdminBlog = () => {
  const { user, isAdmin, isLoading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const locale = getCurrentLocale();

  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");
  
  // Post editor state
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [editorTab, setEditorTab] = useState<"edit" | "preview">("edit");
  const [previewLang, setPreviewLang] = useState<"pt" | "en" | "nl">("pt");
  const [postForm, setPostForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    featured_image: "",
    category_id: "",
    status: "draft",
    featured: false,
    read_time_minutes: 5,
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    // Translation fields
    title_en: "",
    title_nl: "",
    content_en: "",
    content_nl: "",
    excerpt_en: "",
    excerpt_nl: "",
  });

  const texts = language === "nl" ? {
    title: "Blog Beheer",
    posts: "Berichten",
    comments: "Reacties",
    newPost: "Nieuw bericht",
    editPost: "Bericht bewerken",
    save: "Opslaan",
    publish: "Publiceren",
    delete: "Verwijderen",
    logout: "Uitloggen",
    back: "Terug",
    postTitle: "Titel",
    slug: "Slug",
    excerpt: "Samenvatting",
    content: "Inhoud",
    image: "Afbeelding URL",
    category: "Categorie",
    status: "Status",
    featured: "Uitgelicht",
    readTime: "Leestijd (min)",
    seo: "SEO",
    metaTitle: "Meta titel",
    metaDesc: "Meta beschrijving",
    metaKeywords: "Keywords",
    draft: "Concept",
    published: "Gepubliceerd",
    archived: "Gearchiveerd",
    approve: "Goedkeuren",
    reject: "Afwijzen",
    noAccess: "Geen toegang",
    saved: "Opgeslagen!",
    deleted: "Verwijderd!",
    uploadImage: "Afbeelding uploaden",
    noPosts: "Nog geen berichten",
    noComments: "Geen nieuwe reacties",
  } : language === "pt" ? {
    title: "Gerenciar Blog",
    posts: "Posts",
    comments: "Comentários",
    newPost: "Novo post",
    editPost: "Editar post",
    save: "Salvar",
    publish: "Publicar",
    delete: "Excluir",
    logout: "Sair",
    back: "Voltar",
    postTitle: "Título",
    slug: "Slug",
    excerpt: "Resumo",
    content: "Conteúdo",
    image: "URL da imagem",
    category: "Categoria",
    status: "Status",
    featured: "Destaque",
    readTime: "Tempo de leitura (min)",
    seo: "SEO",
    metaTitle: "Meta título",
    metaDesc: "Meta descrição",
    metaKeywords: "Palavras-chave",
    draft: "Rascunho",
    published: "Publicado",
    archived: "Arquivado",
    approve: "Aprovar",
    reject: "Rejeitar",
    noAccess: "Sem acesso",
    saved: "Salvo!",
    deleted: "Excluído!",
    uploadImage: "Enviar imagem",
    noPosts: "Nenhum post ainda",
    noComments: "Nenhum comentário pendente",
  } : {
    title: "Manage Blog",
    posts: "Posts",
    comments: "Comments",
    newPost: "New post",
    editPost: "Edit post",
    save: "Save",
    publish: "Publish",
    delete: "Delete",
    logout: "Logout",
    back: "Back",
    postTitle: "Title",
    slug: "Slug",
    excerpt: "Excerpt",
    content: "Content",
    image: "Image URL",
    category: "Category",
    status: "Status",
    featured: "Featured",
    readTime: "Read time (min)",
    seo: "SEO",
    metaTitle: "Meta title",
    metaDesc: "Meta description",
    metaKeywords: "Keywords",
    draft: "Draft",
    published: "Published",
    archived: "Archived",
    approve: "Approve",
    reject: "Reject",
    noAccess: "No access",
    saved: "Saved!",
    deleted: "Deleted!",
    uploadImage: "Upload image",
    noPosts: "No posts yet",
    noComments: "No pending comments",
  };

  // Auth check
  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate(getLocalizedPath(locale, "/admin/login"));
    }
  }, [user, isAdmin, authLoading, navigate, getLocalizedPath, locale]);

  // Fetch data
  useEffect(() => {
    if (!isAdmin) return;

    const fetchData = async () => {
      setIsLoading(true);

      // Fetch posts
      const { data: postsData } = await supabase
        .from("blog_posts")
        .select(`
          id, title, slug, excerpt, content, featured_image,
          category_id, status, featured, read_time_minutes,
          meta_title, meta_description, meta_keywords, published_at,
          title_en, title_nl, content_en, content_nl, excerpt_en, excerpt_nl,
          blog_categories (id, name, emoji)
        `)
        .order("created_at", { ascending: false });

      // Fetch categories
      const { data: categoriesData } = await supabase
        .from("blog_categories")
        .select("id, name, emoji")
        .order("sort_order");

      // Fetch pending comments
      const { data: commentsData } = await supabase
        .from("blog_comments")
        .select(`
          id, author_name, author_email, content, approved, created_at,
          blog_posts (title)
        `)
        .order("created_at", { ascending: false });

      setPosts(postsData || []);
      setCategories(categoriesData || []);
      setComments(commentsData || []);
      setIsLoading(false);
    };

    fetchData();
  }, [isAdmin]);

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  const handleTitleChange = (title: string) => {
    setPostForm(prev => ({
      ...prev,
      title,
      slug: generateSlug(title),
    }));
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast.error(language === "pt" ? "Apenas imagens são permitidas" : language === "nl" ? "Alleen afbeeldingen toegestaan" : "Only images are allowed");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error(language === "pt" ? "Imagem muito grande (máx 5MB)" : language === "nl" ? "Afbeelding te groot (max 5MB)" : "Image too large (max 5MB)");
      return;
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `posts/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("blog-images")
      .upload(filePath, file);

    if (uploadError) {
      toast.error("Upload failed");
      return;
    }

    const { data } = supabase.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    setPostForm(prev => ({ ...prev, featured_image: data.publicUrl }));
    toast.success("Image uploaded!");
  };

  const handleSavePost = async (publish = false) => {
    setIsSaving(true);

    const status = publish ? "published" : postForm.status;

    const postData = {
      title: postForm.title,
      slug: postForm.slug,
      excerpt: postForm.excerpt || null,
      content: postForm.content,
      featured_image: postForm.featured_image || null,
      category_id: postForm.category_id || null,
      status: status as "draft" | "published" | "archived",
      featured: postForm.featured,
      read_time_minutes: postForm.read_time_minutes,
      meta_title: postForm.meta_title || null,
      meta_description: postForm.meta_description || null,
      meta_keywords: postForm.meta_keywords || null,
      author_id: user?.id,
      published_at: publish ? new Date().toISOString() : editingPost?.published_at,
      // Translation fields
      title_en: postForm.title_en || null,
      title_nl: postForm.title_nl || null,
      content_en: postForm.content_en || null,
      content_nl: postForm.content_nl || null,
      excerpt_en: postForm.excerpt_en || null,
      excerpt_nl: postForm.excerpt_nl || null,
    };

    let error;

    if (editingPost) {
      const result = await supabase
        .from("blog_posts")
        .update(postData)
        .eq("id", editingPost.id);
      error = result.error;
    } else {
      const result = await supabase
        .from("blog_posts")
        .insert([postData]);
      error = result.error;
    }

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(texts.saved);
      setEditingPost(null);
      setIsCreating(false);
      // Refresh posts
      const { data } = await supabase
        .from("blog_posts")
        .select(`
          id, title, slug, excerpt, content, featured_image,
          category_id, status, featured, read_time_minutes,
          meta_title, meta_description, meta_keywords, published_at,
          title_en, title_nl, content_en, content_nl, excerpt_en, excerpt_nl,
          blog_categories (id, name, emoji)
        `)
        .order("created_at", { ascending: false });
      setPosts(data || []);
    }

    setIsSaving(false);
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm("Delete this post?")) return;

    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", postId);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(texts.deleted);
      setPosts(prev => prev.filter(p => p.id !== postId));
    }
  };

  const handleEditPost = (post: Post) => {
    setEditingPost(post);
    setPostForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || "",
      content: post.content,
      featured_image: post.featured_image || "",
      category_id: post.category_id || "",
      status: post.status,
      featured: post.featured || false,
      read_time_minutes: post.read_time_minutes || 5,
      meta_title: post.meta_title || "",
      meta_description: post.meta_description || "",
      meta_keywords: post.meta_keywords || "",
      title_en: post.title_en || "",
      title_nl: post.title_nl || "",
      content_en: post.content_en || "",
      content_nl: post.content_nl || "",
      excerpt_en: post.excerpt_en || "",
      excerpt_nl: post.excerpt_nl || "",
    });
    setIsCreating(true);
  };

  const handleNewPost = () => {
    setEditingPost(null);
    setPostForm({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      featured_image: "",
      category_id: "",
      status: "draft",
      featured: false,
      read_time_minutes: 5,
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      title_en: "",
      title_nl: "",
      content_en: "",
      content_nl: "",
      excerpt_en: "",
      excerpt_nl: "",
    });
    setIsCreating(true);
  };

  const handleCommentAction = async (commentId: string, approve: boolean) => {
    if (approve) {
      await supabase
        .from("blog_comments")
        .update({ approved: true })
        .eq("id", commentId);
    } else {
      await supabase
        .from("blog_comments")
        .delete()
        .eq("id", commentId);
    }

    setComments(prev => prev.filter(c => c.id !== commentId));
    toast.success(approve ? "Approved!" : "Rejected!");
  };

  if (authLoading || isLoading) {
    return (
      <>
        <SEOHead 
          title="Admin Blog | Amsterdu"
          description="Admin blog management page - Loading"
          noindex={true}
        />
        <div className="min-h-screen flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      </>
    );
  }

  if (!isAdmin) {
    return (
      <>
        <SEOHead 
          title="Admin Blog | Amsterdu"
          description="Admin blog management page - Access denied"
          noindex={true}
        />
        <div className="min-h-screen flex items-center justify-center">
          <p>{texts.noAccess}</p>
        </div>
      </>
    );
  }


  // Get preview content based on selected language
  const getPreviewContent = () => {
    if (previewLang === "en" && postForm.content_en) return postForm.content_en;
    if (previewLang === "nl" && postForm.content_nl) return postForm.content_nl;
    return postForm.content;
  };

  const getPreviewTitle = () => {
    if (previewLang === "en" && postForm.title_en) return postForm.title_en;
    if (previewLang === "nl" && postForm.title_nl) return postForm.title_nl;
    return postForm.title;
  };

  // Post editor view
  if (isCreating) {
    return (
      <>
      <SEOHead 
        title={editingPost ? `Editar: ${editingPost.title} | Amsterdu Admin` : "Novo Post | Amsterdu Admin"}
        description="Admin blog post editor"
        noindex={true}
      />
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="container max-w-5xl">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" onClick={() => { setIsCreating(false); setEditorTab("edit"); }}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {texts.back}
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => handleSavePost(false)} disabled={isSaving}>
                {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                {texts.save}
              </Button>
              <Button onClick={() => handleSavePost(true)} disabled={isSaving}>
                {texts.publish}
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{editingPost ? texts.editPost : texts.newPost}</CardTitle>
                {/* Editor/Preview tabs */}
                <Tabs value={editorTab} onValueChange={(v) => setEditorTab(v as "edit" | "preview")}>
                  <TabsList>
                    <TabsTrigger value="edit" className="gap-2">
                      <PenLine className="w-4 h-4" />
                      {language === "pt" ? "Editar" : language === "nl" ? "Bewerken" : "Edit"}
                    </TabsTrigger>
                    <TabsTrigger value="preview" className="gap-2">
                      <Eye className="w-4 h-4" />
                      Preview
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Title & Slug */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>{texts.postTitle}</Label>
                  <Input
                    value={postForm.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    placeholder="My awesome post"
                  />
                </div>
                <div className="space-y-2">
                  <Label>{texts.slug}</Label>
                  <Input
                    value={postForm.slug}
                    onChange={(e) => setPostForm(prev => ({ ...prev, slug: e.target.value }))}
                    placeholder="my-awesome-post"
                  />
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <Label>{texts.excerpt}</Label>
                <Textarea
                  value={postForm.excerpt}
                  onChange={(e) => setPostForm(prev => ({ ...prev, excerpt: e.target.value }))}
                  placeholder="Brief summary..."
                  rows={2}
                />
              </div>

              {/* Content - show editor or preview */}
              {editorTab === "edit" ? (
                <>
                  <div className="space-y-2">
                    <Label>{texts.content}</Label>
                    <WysiwygEditor
                      content={postForm.content}
                      onChange={(html) => setPostForm(prev => ({ ...prev, content: html }))}
                      placeholder={language === "pt" ? "Comece a escrever seu artigo..." : "Start writing your article..."}
                    />
                  </div>

                  {/* Image */}
                  <div className="space-y-2">
                    <Label>{texts.image}</Label>
                    <div className="flex gap-2">
                      <Input
                        value={postForm.featured_image}
                        onChange={(e) => setPostForm(prev => ({ ...prev, featured_image: e.target.value }))}
                        placeholder="https://..."
                        className="flex-1"
                      />
                      <Button variant="outline" asChild>
                        <label className="cursor-pointer">
                          <Image className="mr-2 h-4 w-4" />
                          {texts.uploadImage}
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </Button>
                    </div>
                    {postForm.featured_image && (
                      <img src={postForm.featured_image} alt="Preview" className="mt-2 max-h-40 rounded-lg" />
                    )}
                  </div>

                  {/* Category, Status, Featured */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>{texts.category}</Label>
                      <Select
                        value={postForm.category_id}
                        onValueChange={(value) => setPostForm(prev => ({ ...prev, category_id: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat.id} value={cat.id}>
                              {cat.emoji} {cat.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>{texts.status}</Label>
                      <Select
                        value={postForm.status}
                        onValueChange={(value) => setPostForm(prev => ({ ...prev, status: value }))}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">{texts.draft}</SelectItem>
                          <SelectItem value="published">{texts.published}</SelectItem>
                          <SelectItem value="archived">{texts.archived}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>{texts.readTime}</Label>
                      <Input
                        type="number"
                        value={postForm.read_time_minutes}
                        onChange={(e) => setPostForm(prev => ({ ...prev, read_time_minutes: parseInt(e.target.value) || 5 }))}
                        min={1}
                      />
                    </div>
                  </div>

                  {/* Featured toggle */}
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={postForm.featured}
                      onCheckedChange={(checked) => setPostForm(prev => ({ ...prev, featured: checked }))}
                    />
                    <Label>{texts.featured}</Label>
                  </div>

                  {/* Translations Section */}
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-heading font-bold flex items-center gap-2">
                      🌐 {language === "pt" ? "Traduções Manuais" : language === "nl" ? "Handmatige Vertalingen" : "Manual Translations"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "pt" 
                        ? "Preencha para evitar tradução automática. Use o Preview para ver como vai ficar!" 
                        : language === "nl" 
                        ? "Vul in om automatische vertaling te vermijden. Gebruik Preview om te zien hoe het eruit zal zien!" 
                        : "Fill to avoid auto-translation. Use Preview to see how it will look!"}
                    </p>
                    
                    {/* English */}
                    <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 space-y-4">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-300 flex items-center gap-2">
                        🇬🇧 English
                      </h4>
                      <div className="space-y-2">
                        <Label>{language === "pt" ? "Título (EN)" : "Title (EN)"}</Label>
                        <Input
                          value={postForm.title_en}
                          onChange={(e) => setPostForm(prev => ({ ...prev, title_en: e.target.value }))}
                          placeholder="English title..."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{language === "pt" ? "Resumo (EN)" : "Excerpt (EN)"}</Label>
                        <Textarea
                          value={postForm.excerpt_en}
                          onChange={(e) => setPostForm(prev => ({ ...prev, excerpt_en: e.target.value }))}
                          placeholder="English excerpt..."
                          rows={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{language === "pt" ? "Conteúdo (EN)" : "Content (EN)"}</Label>
                        <WysiwygEditor
                          content={postForm.content_en}
                          onChange={(html) => setPostForm(prev => ({ ...prev, content_en: html }))}
                          placeholder="English content..."
                        />
                      </div>
                    </div>

                    {/* Dutch */}
                    <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 space-y-4">
                      <h4 className="font-semibold text-orange-800 dark:text-orange-300 flex items-center gap-2">
                        🇳🇱 Nederlands
                      </h4>
                      <div className="space-y-2">
                        <Label>{language === "pt" ? "Título (NL)" : "Titel (NL)"}</Label>
                        <Input
                          value={postForm.title_nl}
                          onChange={(e) => setPostForm(prev => ({ ...prev, title_nl: e.target.value }))}
                          placeholder="Dutch title..."
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{language === "pt" ? "Resumo (NL)" : "Samenvatting (NL)"}</Label>
                        <Textarea
                          value={postForm.excerpt_nl}
                          onChange={(e) => setPostForm(prev => ({ ...prev, excerpt_nl: e.target.value }))}
                          placeholder="Dutch excerpt..."
                          rows={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{language === "pt" ? "Conteúdo (NL)" : "Inhoud (NL)"}</Label>
                        <WysiwygEditor
                          content={postForm.content_nl}
                          onChange={(html) => setPostForm(prev => ({ ...prev, content_nl: html }))}
                          placeholder="Dutch content..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* SEO */}
                  <div className="border-t pt-6 space-y-4">
                    <h3 className="font-heading font-bold flex items-center gap-2">
                      <Settings className="w-4 h-4" />
                      {texts.seo}
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label>{texts.metaTitle}</Label>
                        <Input
                          value={postForm.meta_title}
                          onChange={(e) => setPostForm(prev => ({ ...prev, meta_title: e.target.value }))}
                          placeholder="SEO title (max 60 chars)"
                          maxLength={60}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{texts.metaDesc}</Label>
                        <Textarea
                          value={postForm.meta_description}
                          onChange={(e) => setPostForm(prev => ({ ...prev, meta_description: e.target.value }))}
                          placeholder="SEO description (max 160 chars)"
                          maxLength={160}
                          rows={2}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>{texts.metaKeywords}</Label>
                        <Input
                          value={postForm.meta_keywords}
                          onChange={(e) => setPostForm(prev => ({ ...prev, meta_keywords: e.target.value }))}
                          placeholder="keyword1, keyword2, keyword3"
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* Preview Mode */
                <div className="space-y-6">
                  {/* Language selector for preview */}
                  <div className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                    <span className="font-medium text-sm">
                      {language === "pt" ? "Visualizar em:" : language === "nl" ? "Bekijken in:" : "Preview in:"}
                    </span>
                    <div className="flex gap-2">
                      <Button 
                        variant={previewLang === "pt" ? "default" : "outline"} 
                        size="sm"
                        onClick={() => setPreviewLang("pt")}
                      >
                        🇧🇷 PT
                      </Button>
                      <Button 
                        variant={previewLang === "en" ? "default" : "outline"} 
                        size="sm"
                        onClick={() => setPreviewLang("en")}
                        className={!postForm.content_en ? "opacity-50" : ""}
                      >
                        🇬🇧 EN {!postForm.content_en && "(vazio)"}
                      </Button>
                      <Button 
                        variant={previewLang === "nl" ? "default" : "outline"} 
                        size="sm"
                        onClick={() => setPreviewLang("nl")}
                        className={!postForm.content_nl ? "opacity-50" : ""}
                      >
                        🇳🇱 NL {!postForm.content_nl && "(vazio)"}
                      </Button>
                    </div>
                  </div>

                  {/* Preview content */}
                  <div className="bg-background border rounded-lg p-6 lg:p-8">
                    {/* Featured image */}
                    {postForm.featured_image && (
                      <img 
                        src={postForm.featured_image} 
                        alt="Preview" 
                        className="w-full h-64 object-cover rounded-xl mb-6"
                      />
                    )}
                    
                    {/* Title */}
                    <h1 className="font-heading text-3xl lg:text-4xl font-bold mb-6">
                      {getPreviewTitle() || (language === "pt" ? "Título do post..." : "Post title...")}
                    </h1>

                    {/* Content */}
                    <div className="blog-content max-w-none">
                      {getPreviewContent() ? (
                        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(getPreviewContent()) }} />
                      ) : (
                        <p className="text-muted-foreground italic">
                          {language === "pt" 
                            ? "Nenhum conteúdo para visualizar..." 
                            : "No content to preview..."}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
      </>
    );
  }

  // Main admin dashboard
  return (
    <>
      <SEOHead 
        title="Admin Blog | Amsterdu"
        description="Admin blog management page"
        noindex={true}
      />
      <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/50 py-8">
      <div className="container">
        {/* Header with gradient accent */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl blur-xl" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/70 text-primary-foreground shadow-lg shadow-primary/25">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="font-heading text-2xl lg:text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">{texts.title}</h1>
                <p className="text-sm text-muted-foreground">
                  {posts.length} {language === "pt" ? "artigos" : language === "nl" ? "artikelen" : "articles"} • {comments.filter(c => !c.approved).length} {language === "pt" ? "pendentes" : language === "nl" ? "in behandeling" : "pending"}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => navigate(getLocalizedPath(locale, "/admin/video"))} className="shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <Video className="mr-2 h-4 w-4" />
                {language === "nl" ? "Video" : language === "pt" ? "Vídeo" : "Video"}
              </Button>
              <Button variant="outline" onClick={() => navigate(getLocalizedPath(locale, "/admin/images"))} className="shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <ImageIcon className="mr-2 h-4 w-4" />
                {language === "nl" ? "Afbeeldingen" : language === "pt" ? "Imagens" : "Images"}
              </Button>
              <Button variant="outline" onClick={() => navigate(getLocalizedPath(locale, "/blog"))} className="shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
                <Eye className="mr-2 h-4 w-4" />
                {language === "nl" ? "Bekijk blog" : language === "pt" ? "Ver blog" : "View blog"}
              </Button>
              <Button variant="ghost" onClick={signOut} className="text-muted-foreground hover:text-destructive transition-colors">
                <LogOut className="mr-2 h-4 w-4" />
                {texts.logout}
              </Button>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6 p-1 bg-card/80 backdrop-blur-sm border border-border/50 shadow-md">
            <TabsTrigger value="posts" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all">
              <FileText className="w-4 h-4" />
              {texts.posts}
              <Badge variant="secondary" className="ml-1 bg-muted text-muted-foreground">
                {posts.length}
              </Badge>
            </TabsTrigger>
            <TabsTrigger value="comments" className="gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md transition-all">
              <MessageSquare className="w-4 h-4" />
              {texts.comments}
              {comments.filter(c => !c.approved).length > 0 && (
                <Badge variant="destructive" className="ml-1 h-5 min-w-5 px-1.5 flex items-center justify-center text-xs animate-pulse">
                  {comments.filter(c => !c.approved).length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="animate-fade-in">
            <div className="flex justify-end mb-4">
              <Button onClick={handleNewPost} className="shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5 bg-gradient-to-r from-primary to-primary/90">
                <Plus className="mr-2 h-4 w-4" />
                {texts.newPost}
              </Button>
            </div>

            {posts.length === 0 ? (
              <Card className="border-dashed border-2">
                <CardContent className="py-16 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <FileText className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground mb-4">{texts.noPosts}</p>
                  <Button variant="outline" onClick={handleNewPost}>
                    <Plus className="mr-2 h-4 w-4" />
                    {texts.newPost}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {posts.map((post, index) => (
                  <Card 
                    key={post.id} 
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/80 backdrop-blur-sm"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-stretch">
                        {/* Image section with overlay */}
                        <div className="relative w-32 sm:w-40 flex-shrink-0 overflow-hidden">
                          {post.featured_image ? (
                            <>
                              <img
                                src={post.featured_image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80" />
                            </>
                          ) : (
                            <div className="w-full h-full min-h-[80px] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                              <ImageIcon className="w-8 h-8 text-muted-foreground/50" />
                            </div>
                          )}
                          {/* Status badge overlay */}
                          <div className="absolute top-2 left-2">
                            <Badge 
                              variant={post.status === "published" ? "default" : "secondary"}
                              className={post.status === "published" 
                                ? "bg-green-500/90 hover:bg-green-500 text-white shadow-sm" 
                                : "bg-amber-500/90 hover:bg-amber-500 text-white shadow-sm"
                              }
                            >
                              {post.status === "published" ? "✓" : "○"} {post.status === "published" ? texts.published : post.status === "draft" ? texts.draft : texts.archived}
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Content section */}
                        <div className="flex-1 p-4 flex items-center gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1.5">
                              <h3 className="font-heading font-semibold text-lg truncate group-hover:text-primary transition-colors">{post.title}</h3>
                              {post.featured && (
                                <Badge variant="outline" className="border-amber-400 text-amber-600 bg-amber-50 dark:bg-amber-950/30 flex-shrink-0">
                                  ★ {language === "pt" ? "Destaque" : language === "nl" ? "Uitgelicht" : "Featured"}
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                              {post.blog_categories && (
                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
                                  {post.blog_categories.emoji} {post.blog_categories.name}
                                </span>
                              )}
                              {post.read_time_minutes && (
                                <span className="text-xs">📖 {post.read_time_minutes} min</span>
                              )}
                              {/* Translation indicators */}
                              <div className="flex gap-1">
                                {post.content_en && <span className="text-xs opacity-60">🇬🇧</span>}
                                {post.content_nl && <span className="text-xs opacity-60">🇳🇱</span>}
                              </div>
                            </div>
                            {post.excerpt && (
                              <p className="text-sm text-muted-foreground mt-1.5 line-clamp-1 max-w-lg">{post.excerpt}</p>
                            )}
                          </div>
                          
                          {/* Actions */}
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleEditPost(post)}
                              className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              onClick={() => handleDeletePost(post.id)}
                              className="h-9 w-9 rounded-full hover:bg-destructive/10 hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="comments" className="animate-fade-in">
            {comments.length === 0 ? (
              <Card className="border-dashed border-2">
                <CardContent className="py-16 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                    <MessageSquare className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">{texts.noComments}</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {comments.map((comment, index) => (
                  <Card 
                    key={comment.id} 
                    className={`group overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                      !comment.approved 
                        ? "border-l-4 border-l-amber-500 bg-amber-50/50 dark:bg-amber-950/10" 
                        : "border-l-4 border-l-green-500 bg-card/80"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        {/* Avatar placeholder */}
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="font-heading font-bold text-primary">
                            {comment.author_name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="font-semibold">{comment.author_name}</span>
                            {comment.author_email && (
                              <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                                {comment.author_email}
                              </span>
                            )}
                            {!comment.approved && (
                              <Badge variant="outline" className="border-amber-400 text-amber-600 bg-amber-100 dark:bg-amber-950/50 text-xs">
                                ⏳ {language === "pt" ? "Pendente" : language === "nl" ? "In behandeling" : "Pending"}
                              </Badge>
                            )}
                            {comment.approved && (
                              <Badge variant="outline" className="border-green-400 text-green-600 bg-green-100 dark:bg-green-950/50 text-xs">
                                ✓ {language === "pt" ? "Aprovado" : language === "nl" ? "Goedgekeurd" : "Approved"}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {comment.blog_posts?.title}
                          </p>
                          <p className="text-sm bg-muted/50 p-3 rounded-lg border border-border/50 italic">
                            "{comment.content}"
                          </p>
                        </div>
                        
                        {!comment.approved && (
                          <div className="flex flex-col gap-1">
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-9 w-9 rounded-full bg-green-100 hover:bg-green-200 text-green-600 dark:bg-green-950/50 dark:hover:bg-green-950"
                              onClick={() => handleCommentAction(comment.id, true)}
                            >
                              <Check className="w-4 h-4" />
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="h-9 w-9 rounded-full bg-red-100 hover:bg-red-200 text-red-600 dark:bg-red-950/50 dark:hover:bg-red-950"
                              onClick={() => handleCommentAction(comment.id, false)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
    </>
  );
};

export default AdminBlog;
