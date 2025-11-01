import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/79811233863', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/+79811233863', '_blank');
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+79811233863';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center p-4 relative">
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/3d98fcc0-6abc-458f-bf37-96d1b9db5618/files/e75c248c-1d49-48aa-8886-bbb2df78f720.jpg)' }}
      />
      <Card className="max-w-2xl w-full p-8 md:p-12 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary rounded-full mb-6">
            <Icon name="CircuitBoard" className="text-white" size={40} />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Профессиональное<br />ШТРОБЛЕНИЕ СТЕН
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Качественно и быстро подготовим стены под проводку и коммуникации
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-3">
              <Icon name="Award" className="text-secondary" size={32} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Специализация</h3>
            <p className="text-base text-muted-foreground">
              Только штробление стен
            </p>
          </div>

          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-3">
              <Icon name="Settings" className="text-secondary" size={32} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Оборудование</h3>
            <p className="text-base text-muted-foreground">
              Современные инструменты — минимум пыли
            </p>
          </div>

          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-3">
              <Icon name="Zap" className="text-secondary" size={32} />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">Скорость</h3>
            <p className="text-base text-muted-foreground">
              Быстрая работа без повреждений
            </p>
          </div>
        </div>

        <div className="bg-primary text-white rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-bold mb-4 text-center">Звоните сейчас!</h2>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold flex items-center gap-2"
            >
              <Icon name="MessageCircle" size={20} />
              WhatsApp
            </Button>
            
            <Button 
              onClick={handleTelegramClick}
              size="lg"
              className="bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold flex items-center gap-2"
            >
              <Icon name="Send" size={20} />
              Telegram
            </Button>
          </div>

          <div className="text-center">
            <button 
              onClick={handlePhoneClick}
              className="text-3xl font-bold hover:underline transition-all"
            >
              +7 (981) 123-38-63
            </button>
          </div>
        </div>

        <p className="text-center text-xl font-semibold text-primary">
          Доверьтесь профессионалам!
        </p>
      </Card>
    </div>
  );
};

export default Index;