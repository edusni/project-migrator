import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/hooks/useLanguage";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { ArrowLeft, Upload, Video, Loader2, Trash2, Save } from "lucide-react";

interface HomeVideo {
  id: string;
  video_url: string;
  title: string | null;
  title_en: string | null;
  title_nl: string | null;
  description: string | null;
  description_en: string | null;
  description_nl: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function AdminVideo() {
  const navigate = useNavigate();
  const { user, isAdmin, isLoading: authLoading } = useAuth();
  const { language } = useLanguage();
  
  const [video, setVideo] = useState<HomeVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [form, setForm] = useState({
    title: "",
    title_en: "",
    title_nl: "",
    description: "",
    description_en: "",
    description_nl: "",
    is_active: true,
  });

  const texts = language === "nl" ? {
    title: "Video Beheer",
    subtitle: "Upload een welkomstvideo voor de homepage",
    upload: "Video uploaden",
    uploading: "Uploaden...",
    save: "Opslaan",
    delete: "Verwijderen",
    back: "Terug",
    titleLabel: "Titel (PT)",
    titleEn: "Titel (EN)",
    titleNl: "Titel (NL)",
    descLabel: "Beschrijving (PT)",
    descEn: "Beschrijving (EN)",
    descNl: "Beschrijving (NL)",
    active: "Actief",
    noVideo: "Nog geen video geüpload",
    dropzone: "Klik om video te uploaden of sleep hier",
    maxSize: "Max 100MB - MP4, WebM, MOV",
    saved: "Opgeslagen!",
    deleted: "Verwijderd!",
    uploadSuccess: "Video geüpload!",
    uploadError: "Fout bij uploaden",
  } : language === "pt" ? {
    title: "Gerenciar Vídeo",
    subtitle: "Faça upload do vídeo de boas-vindas para a home",
    upload: "Enviar vídeo",
    uploading: "Enviando...",
    save: "Salvar",
    delete: "Excluir",
    back: "Voltar",
    titleLabel: "Título (PT)",
    titleEn: "Título (EN)",
    titleNl: "Título (NL)",
    descLabel: "Descrição (PT)",
    descEn: "Descrição (EN)",
    descNl: "Descrição (NL)",
    active: "Ativo",
    noVideo: "Nenhum vídeo enviado ainda",
    dropzone: "Clique para enviar ou arraste o vídeo",
    maxSize: "Máx 100MB - MP4, WebM, MOV",
    saved: "Salvo!",
    deleted: "Excluído!",
    uploadSuccess: "Vídeo enviado!",
    uploadError: "Erro ao enviar",
  } : {
    title: "Manage Video",
    subtitle: "Upload the welcome video for the homepage",
    upload: "Upload video",
    uploading: "Uploading...",
    save: "Save",
    delete: "Delete",
    back: "Back",
    titleLabel: "Title (PT)",
    titleEn: "Title (EN)",
    titleNl: "Title (NL)",
    descLabel: "Description (PT)",
    descEn: "Description (EN)",
    descNl: "Description (NL)",
    active: "Active",
    noVideo: "No video uploaded yet",
    dropzone: "Click to upload or drag video here",
    maxSize: "Max 100MB - MP4, WebM, MOV",
    saved: "Saved!",
    deleted: "Deleted!",
    uploadSuccess: "Video uploaded!",
    uploadError: "Upload error",
  };

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/pt/admin/login");
    }
  }, [user, isAdmin, authLoading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchVideo();
    }
  }, [user, isAdmin]);

  const fetchVideo = async () => {
    try {
      // Use raw query to bypass RLS for admin viewing
      const { data, error } = await supabase
        .from("home_video")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(1);

      if (error) throw error;
      
      if (data && data.length > 0) {
        const v = data[0] as HomeVideo;
        setVideo(v);
        setForm({
          title: v.title || "",
          title_en: v.title_en || "",
          title_nl: v.title_nl || "",
          description: v.description || "",
          description_en: v.description_en || "",
          description_nl: v.description_nl || "",
          is_active: v.is_active,
        });
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ["video/mp4", "video/webm", "video/quicktime"];
    if (!validTypes.includes(file.type)) {
      toast.error("Formato inválido. Use MP4, WebM ou MOV.");
      return;
    }

    // Validate file size (100MB)
    if (file.size > 100 * 1024 * 1024) {
      toast.error("Arquivo muito grande. Máximo 100MB.");
      return;
    }

    setUploading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `welcome-video-${Date.now()}.${fileExt}`;

      // Upload to storage
      const { error: uploadError } = await supabase.storage
        .from("videos")
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("videos")
        .getPublicUrl(fileName);

      const videoUrl = urlData.publicUrl;

      // Create or update video record
      if (video) {
        // Delete old video file if exists
        const oldFileName = video.video_url.split("/").pop();
        if (oldFileName) {
          await supabase.storage.from("videos").remove([oldFileName]);
        }

        // Update record
        const { error: updateError } = await supabase
          .from("home_video")
          .update({ 
            video_url: videoUrl,
            ...form,
          })
          .eq("id", video.id);

        if (updateError) throw updateError;
      } else {
        // Insert new record
        const { error: insertError } = await supabase
          .from("home_video")
          .insert({
            video_url: videoUrl,
            ...form,
          });

        if (insertError) throw insertError;
      }

      toast.success(texts.uploadSuccess);
      fetchVideo();
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(texts.uploadError);
    } finally {
      setUploading(false);
    }
  };

  const handleSave = async () => {
    if (!video) return;
    
    setSaving(true);
    try {
      const { error } = await supabase
        .from("home_video")
        .update(form)
        .eq("id", video.id);

      if (error) throw error;
      
      toast.success(texts.saved);
      fetchVideo();
    } catch (error) {
      console.error("Save error:", error);
      toast.error("Erro ao salvar");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!video) return;
    
    if (!confirm("Tem certeza que deseja excluir o vídeo?")) return;

    try {
      // Delete from storage
      const fileName = video.video_url.split("/").pop();
      if (fileName) {
        await supabase.storage.from("videos").remove([fileName]);
      }

      // Delete record
      const { error } = await supabase
        .from("home_video")
        .delete()
        .eq("id", video.id);

      if (error) throw error;
      
      toast.success(texts.deleted);
      setVideo(null);
      setForm({
        title: "",
        title_en: "",
        title_nl: "",
        description: "",
        description_en: "",
        description_nl: "",
        is_active: true,
      });
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Erro ao excluir");
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <>
      <SEOHead 
        title="Admin Video | Amsterdu"
        description="Gerenciar vídeo de boas-vindas"
        noindex={true}
      />
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="container max-w-4xl">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/pt/admin/blog")}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-heading font-bold">{texts.title}</h1>
              <p className="text-muted-foreground">{texts.subtitle}</p>
            </div>
          </div>

          <div className="grid gap-6">
            {/* Upload Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  Vídeo de Boas-Vindas
                </CardTitle>
                <CardDescription>
                  Este vídeo será exibido na página inicial
                </CardDescription>
              </CardHeader>
              <CardContent>
                {video ? (
                  <div className="space-y-4">
                    <video
                      src={video.video_url}
                      controls
                      className="w-full rounded-lg bg-black aspect-video"
                    />
                    <div className="flex gap-2">
                      <label className="flex-1">
                        <input
                          type="file"
                          accept="video/mp4,video/webm,video/quicktime"
                          onChange={handleUpload}
                          className="hidden"
                          disabled={uploading}
                        />
                        <Button
                          variant="outline"
                          className="w-full"
                          disabled={uploading}
                          asChild
                        >
                          <span>
                            {uploading ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                {texts.uploading}
                              </>
                            ) : (
                              <>
                                <Upload className="w-4 h-4 mr-2" />
                                Substituir vídeo
                              </>
                            )}
                          </span>
                        </Button>
                      </label>
                      <Button
                        variant="destructive"
                        onClick={handleDelete}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <label className="block cursor-pointer">
                    <input
                      type="file"
                      accept="video/mp4,video/webm,video/quicktime"
                      onChange={handleUpload}
                      className="hidden"
                      disabled={uploading}
                    />
                    <div className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-12 text-center hover:border-primary/50 transition-colors">
                      {uploading ? (
                        <div className="flex flex-col items-center gap-3">
                          <Loader2 className="w-12 h-12 animate-spin text-primary" />
                          <p className="text-muted-foreground">{texts.uploading}</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-3">
                          <Video className="w-12 h-12 text-muted-foreground" />
                          <p className="font-medium">{texts.dropzone}</p>
                          <p className="text-sm text-muted-foreground">{texts.maxSize}</p>
                        </div>
                      )}
                    </div>
                  </label>
                )}
              </CardContent>
            </Card>

            {/* Settings Card */}
            {video && (
              <Card>
                <CardHeader>
                  <CardTitle>Configurações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Active toggle */}
                  <div className="flex items-center justify-between">
                    <Label htmlFor="is_active">{texts.active}</Label>
                    <Switch
                      id="is_active"
                      checked={form.is_active}
                      onCheckedChange={(checked) => setForm({ ...form, is_active: checked })}
                    />
                  </div>

                  {/* Titles */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="title">{texts.titleLabel}</Label>
                      <Input
                        id="title"
                        value={form.title}
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                        placeholder="Bem-vindo a Amsterdam!"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title_en">{texts.titleEn}</Label>
                      <Input
                        id="title_en"
                        value={form.title_en}
                        onChange={(e) => setForm({ ...form, title_en: e.target.value })}
                        placeholder="Welcome to Amsterdam!"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title_nl">{texts.titleNl}</Label>
                      <Input
                        id="title_nl"
                        value={form.title_nl}
                        onChange={(e) => setForm({ ...form, title_nl: e.target.value })}
                        placeholder="Welkom in Amsterdam!"
                      />
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="description">{texts.descLabel}</Label>
                      <Textarea
                        id="description"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        placeholder="Descrição do vídeo..."
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description_en">{texts.descEn}</Label>
                      <Textarea
                        id="description_en"
                        value={form.description_en}
                        onChange={(e) => setForm({ ...form, description_en: e.target.value })}
                        placeholder="Video description..."
                        rows={3}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description_nl">{texts.descNl}</Label>
                      <Textarea
                        id="description_nl"
                        value={form.description_nl}
                        onChange={(e) => setForm({ ...form, description_nl: e.target.value })}
                        placeholder="Video beschrijving..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Save button */}
                  <Button onClick={handleSave} disabled={saving} className="w-full">
                    {saving ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Salvando...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        {texts.save}
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
