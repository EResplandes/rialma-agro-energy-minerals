import { Button } from "@/components/ui/button";

const Header = () => {
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
          </nav>
          
          <Button variant="default" size="sm" className="hidden md:block">
            Contato
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;