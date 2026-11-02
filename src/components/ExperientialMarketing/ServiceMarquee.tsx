const services = {
  en: ["Trade show booths", "Corporate events", "Conferences", "Brand activations", "Staffing", "KPI reporting"],
  es: ["Stands para expos", "Eventos corporativos", "Congresos", "Activaciones de marca", "Staff", "Medición de resultados"],
};

export default function ServiceMarquee({ locale = "en" }: { locale?: "en" | "es" }) {
  return (
    <div aria-hidden="true" className="btl-service-marquee">
      <div className="btl-service-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="btl-service-group">
            {services[locale].map((service) => (
              <span key={service} className="btl-service-item">
                {service}<span className="btl-service-separator">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
