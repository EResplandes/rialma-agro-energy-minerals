import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [codigoONS, setCodigoONS] = useState("");
  const navigate = useNavigate();

  const handleONSSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (codigoONS.trim()) {
      navigate(`/codigo-ons?codigo=${encodeURIComponent(codigoONS)}`);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">R</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">RIALMA S/A</h1>
              <p className="text-xs text-muted-foreground">Energia • Agropecuária • Mineração</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#segmentos" className="text-foreground hover:text-primary transition-colors">
              Segmentos
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#numeros" className="text-foreground hover:text-primary transition-colors">
              Números
            </a>
            <a href="/relacao-investidores" className="text-foreground hover:text-primary transition-colors">
              Investidores
            </a>
          </nav>
          
          <form onSubmit={handleONSSubmit} className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Código ONS"
                value={codigoONS}
                onChange={(e) => setCodigoONS(e.target.value)}
                className="w-32 text-sm"
              />
              <Button 
                type="submit" 
                size="sm" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full px-2"
                disabled={!codigoONS.trim()}
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;