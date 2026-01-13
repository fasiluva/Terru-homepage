import React from "react";
import HoverTooltip from "./HoverTooltip";

const AdditionalInformation = () => {
  return (
    <section className="mt-0 pt-5 pb-5 px-4">
      <h3 className="text-lg font-bold">Horario de verano</h3>
      <p className="font-body">Miércoles a Domingo: desde las 18:30 hs</p>

      <h3 className="pt-5 text-lg font-bold">Reservas</h3>
      <p className="font-body">3407-480905 (teléfono fijo)</p>
      <p className="font-body">3407-467455 (Whatsapp)</p>

      <h3 className="pt-5 text-lg font-bold">Dirección</h3>
      <p className="font-body">
        <HoverTooltip 
            href="https://www.google.com.ar/maps/place/Terru%C3%B1o+Restaurante/@-33.5013065,-60.0665433,17.92z/data=!4m6!3m5!1s0x95b9e37970bed749:0xaf4dcc8e9a21ebba!8m2!3d-33.5022082!4d-60.0659642!16s%2Fg%2F1tdpsvfm?entry=ttu&g_ep=EgoyMDI2MDExMS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
            tooltipText="Abrir en Google Maps">
          Av. Dr. Bonfiglio 202, B2914 Villa Ramallo
        </HoverTooltip>
      </p>
    </section>
  );
};

export default AdditionalInformation;
