import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/hooks/useLanguage";
import { useLocaleNavigation } from "@/hooks/useLocaleNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Mail, ArrowLeft, Loader2, UserPlus } from "lucide-react";
import { toast } from "sonner";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const { signIn, signUp } = useAuth();
  const { language } = useLanguage();
  const { getLocalizedPath, getCurrentLocale } = useLocaleNavigation();
  const navigate = useNavigate();
  const locale = getCurrentLocale();

  const content = language === "nl" ? {
    title: isSignUp ? "Admin Registratie" : "Admin Login",
    description: isSignUp ? "Maak een account aan" : "Log in om het blog te beheren",
    email: "E-mail",
    password: "Wachtwoord",
    login: "Inloggen",
    signup: "Registreren",
    back: "Terug naar blog",
    error: isSignUp ? "Registratie mislukt. Probeer opnieuw." : "Inloggen mislukt. Controleer je gegevens.",
    success: isSignUp ? "Account aangemaakt! Je kunt nu inloggen." : "Succesvol ingelogd!",
    toggle: isSignUp ? "Heb je al een account? Inloggen" : "Nog geen account? Registreren",
    passwordHint: "Minimaal 6 tekens",
  } : language === "pt" ? {
    title: isSignUp ? "Cadastro Admin" : "Login Admin",
    description: isSignUp ? "Crie sua conta de administrador" : "Faça login para gerenciar o blog",
    email: "E-mail",
    password: "Senha",
    login: "Entrar",
    signup: "Cadastrar",
    back: "Voltar ao blog",
    error: isSignUp ? "Falha no cadastro. Tente novamente." : "Falha no login. Verifique suas credenciais.",
    success: isSignUp ? "Conta criada! Agora você pode fazer login." : "Login realizado com sucesso!",
    toggle: isSignUp ? "Já tem conta? Fazer login" : "Não tem conta? Cadastre-se",
    passwordHint: "Mínimo 6 caracteres",
  } : {
    title: isSignUp ? "Admin Registration" : "Admin Login",
    description: isSignUp ? "Create your admin account" : "Log in to manage the blog",
    email: "Email",
    password: "Password",
    login: "Sign In",
    signup: "Sign Up",
    back: "Back to blog",
    error: isSignUp ? "Registration failed. Try again." : "Login failed. Check your credentials.",
    success: isSignUp ? "Account created! You can now log in." : "Successfully logged in!",
    toggle: isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up",
    passwordHint: "Minimum 6 characters",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (isSignUp) {
      if (password.length < 6) {
        toast.error(content.passwordHint);
        setIsLoading(false);
        return;
      }
      
      const { error } = await signUp(email, password);
      
      if (error) {
        if (error.message.includes("already registered")) {
          toast.error(language === "pt" ? "Este email já está cadastrado." : "This email is already registered.");
        } else {
          toast.error(content.error);
        }
        setIsLoading(false);
        return;
      }

      toast.success(content.success);
      setIsSignUp(false);
      setIsLoading(false);
      return;
    }

    const { error } = await signIn(email, password);

    if (error) {
      toast.error(content.error);
      setIsLoading(false);
      return;
    }

    toast.success(content.success);
    navigate(getLocalizedPath(locale, "/admin/blog"));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="border-border/50 shadow-xl">
          <CardHeader className="text-center pb-2">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              {isSignUp ? (
                <UserPlus className="w-6 h-6 text-primary" />
              ) : (
                <Lock className="w-6 h-6 text-primary" />
              )}
            </div>
            <CardTitle className="font-heading text-2xl">{content.title}</CardTitle>
            <CardDescription>{content.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{content.email}</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@example.com"
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">{content.password}</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="pl-10"
                    minLength={6}
                    required
                  />
                </div>
                {isSignUp && (
                  <p className="text-xs text-muted-foreground">{content.passwordHint}</p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isSignUp ? content.signup : content.login}...
                  </>
                ) : (
                  isSignUp ? content.signup : content.login
                )}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <Button
                variant="link"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary"
              >
                {content.toggle}
              </Button>
            </div>

            <div className="mt-2 text-center">
              <Button
                variant="ghost"
                onClick={() => navigate(getLocalizedPath(locale, "/blog"))}
                className="text-muted-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                {content.back}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
