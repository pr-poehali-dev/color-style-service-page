import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: "Scale",
      title: "Юридические услуги",
      description:
        "Комплексное юридическое сопровождение бизнеса, правовое консультирование и представительство в судах",
    },
    {
      icon: "Building2",
      title: "Право собственности и недвижимость",
      description:
        "Сделки с недвижимостью, оформление права собственности, сопровождение покупки и продажи",
    },
    {
      icon: "Shield",
      title: "Страхование",
      description:
        "Все виды страхования: имущественное, личное, корпоративное страхование рисков",
    },
    {
      icon: "FileText",
      title: "Оформление справок",
      description:
        "Быстрое оформление всех видов справок, документооборот и легализация документов",
    },
    {
      icon: "Users",
      title: "Корпоративное консультирование",
      description:
        "Консультации по корпоративному праву, реорганизация и ликвидация юридических лиц",
    },
    {
      icon: "ShieldCheck",
      title: "Уголовное право и защита интересов",
      description:
        "Защита в уголовных делах, представительство интересов на всех стадиях процесса",
    },
    {
      icon: "Briefcase",
      title: "Исполнительное производство",
      description:
        "Взыскание задолженности, работа с приставами, сопровождение исполнительного производства",
    },
    {
      icon: "FileCheck",
      title: "Регистрационные услуги",
      description:
        "Регистрация ООО, ИП, изменения в ЕГРЮЛ, подготовка и подача документов в госорганы",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Наши услуги
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Мы предлагаем полный спектр юридических услуг для физических лиц и
              бизнеса. Профессиональный подход и многолетний опыт гарантируют
              качественное решение ваших правовых вопросов.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-medium"
            >
              Все услуги
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
