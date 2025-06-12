import { ServiceCard } from "@/components/ServiceCard";

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
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-12">
          Услуги
        </h1>

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
      </div>
    </div>
  );
};

export default Services;
