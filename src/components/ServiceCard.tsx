import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center h-full">
        <div className="mb-4 p-3 bg-slate-100 rounded-full group-hover:bg-amber-100 transition-colors duration-300">
          <Icon
            name={icon}
            size={32}
            className="text-slate-600 group-hover:text-amber-600 transition-colors duration-300"
          />
        </div>

        <h3 className="text-lg font-semibold text-slate-800 mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};
