import fetch from "node-fetch";

export default async (req, res) => {
  // Configura los encabezados CORS
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://elielmiranda07.github.io"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const response = await fetch(
      "https://api.football-data.org/v4/matches?status=LIVE",
      {
        headers: {
          "X-Auth-Token": "337c2d400a2ed27f1a044ef413096497", // Tu token de API
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error en el proxy:", error.message);
    res.status(500).json({ error: error.message });
  }
};
