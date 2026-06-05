import React from "react";
import ServiciosDropdownItem from "./ServiciosDropdownItem";

const ServiciosDropdown = () => {
  return (
    <div>
      <ServiciosDropdownItem label="Experiences" defaultOpen={false}>
        <div className="flex gap-3 my-7 flex-wrap">
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Publicidad BTL */}
            Publicity BTL
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Activaciones */}
            Activations
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Eventos */}
            Events
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Convenciones */}
            Conventions
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Stands
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Exposiciones */}
            Expositions
          </p>
        </div>
      </ServiciosDropdownItem>
      <ServiciosDropdownItem label="Advertising" defaultOpen={false}>
         <div className="flex gap-3 my-7 flex-wrap">
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Análisis e Investigación de Mercados */}
            Market Analysis and Research
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Publicidad ATL */}
            Publicity ATL
          </p>

          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Desarrollo de Campañas */}
            Campaign Development
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Diseño Publicitario */}
            Advertising Design
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Marketing Digital */}
            Digital Marketing
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Branding
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Medios */}
            Media
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Shopper
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Comunicación Interna */}
            Internal Communication
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Manejo de Crisis */}
            Crisis Management
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Impresos */}
            Prints
          </p>
        </div>
      </ServiciosDropdownItem>
      <ServiciosDropdownItem label="Audiovisual" defaultOpen={false}>
         <div className="flex gap-3 my-7 flex-wrap">
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Producción de Cine y Video */}
            Film and Video Production
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Producción Musical */}
            Musical Production
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Post Production
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Producción de Audio */}
            Audio Production
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            {/* Videos Corporativos */}
            Corporate Videos
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            2D and 3D Animations
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Radio
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Studio
          </p>
          <p className="py-1 border rounded-2xl px-4 mb-1 w-max font-medium">
            Equipment Rental
          </p>
        </div>
      </ServiciosDropdownItem>

    </div>
  );
};

export default ServiciosDropdown;
