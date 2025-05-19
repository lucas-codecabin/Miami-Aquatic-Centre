import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const locationId = "5d38a789-4dc8-44a0-b48d-8c06098492b4";

  try {
    const locationDetails = await prisma.locations.findUnique({
      where: {
        id: locationId,
      },
    });

    return locationDetails;
  } catch (error) {
    console.error("Error fetching location", error);
  }
});
