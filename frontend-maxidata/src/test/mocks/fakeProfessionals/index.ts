import { ProfessionalResponse } from "../../../features/professionals/types";

export const fakeProfessionals: ProfessionalResponse[] = Array.from(
  { length: 50 },
  (_, i) => {
    const now = new Date();
    return {
      id: i + 1,
      name: `Profissional ${i + 1}`,
      email: `prof${i + 1}@exemplo.com`,
      telephone: `119999900${String(i).padStart(2, "0")}`,
      situation: i % 2 === 0,
      typeOfProfessionalId: 1,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString(),
      typeProfessional: {
        id: 1,
        describe: "Tipo Exemplo",
        situation: true,
        createdAt: now,
        updatedAt: now,
      },
    };
  }
);
