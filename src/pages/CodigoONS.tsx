import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, AlertCircle } from "lucide-react";

const CodigoONS = () => {
  const [codigo, setCodigo] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!codigo.trim()) return;
    
    setStatus("loading");
    
    // Simular validação do código
    setTimeout(() => {
      if (codigo.trim().length >= 6) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Acesso ONS
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Digite seu código ONS para acessar informações específicas
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6 max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>Código de Acesso ONS</CardTitle>
                <CardDescription>
                  Insira o código fornecido pelo ONS para acessar as informações específicas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="codigo">Código ONS</Label>
                    <Input
                      id="codigo"
                      type="text"
                      placeholder="Digite seu código ONS"
                      value={codigo}
                      onChange={(e) => setCodigo(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={status === "loading" || !codigo.trim()}
                  >
                    {status === "loading" ? "Validando..." : "Acessar"}
                  </Button>

                  {status === "success" && (
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-md">
                      <CheckCircle className="h-5 w-5" />
                      <span>Código válido! Redirecionando...</span>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
                      <AlertCircle className="h-5 w-5" />
                      <span>Código inválido. Verifique e tente novamente.</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Não possui um código ONS?{" "}
                <a href="mailto:ons@rialma.com.br" className="text-primary hover:underline">
                  Entre em contato
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CodigoONS;